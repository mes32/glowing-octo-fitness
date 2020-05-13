const express = require('express');
const { rejectUnauthenticated, rejectNonAdmin } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
});

router.get('/all', rejectNonAdmin, (req, res) => {
    const selectSql = `
    SELECT 
        id
        , username
        , display_name
        , is_admin
        , date_created  
    FROM app_user;
    `;

    pool.query(
        selectSql
    ).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in GET /api/user/all ' + err);
        res.sendStatus(500);
    });
});

router.get('/:id', rejectNonAdmin, (req, res) => {
    const id = req.params.id;
    const selectSql = `
    SELECT
        id
        , username
        , display_name
        , is_admin
        , date_created  
    FROM app_user
    WHERE id = $1
    LIMIT 1;
    `;
    const selectParams = [id];

    pool.query(
        selectSql,
        selectParams
    ).then((result) => {
        res.send(result.rows[0]);
    }).catch((err) => {
        console.log('Error in GET /api/user/:id ' + err);
        res.sendStatus(500);
    });
});

router.put('/:id/reset-password', rejectNonAdmin, (req, res) => {
    const id = req.params.id;
    const password = encryptLib.encryptPassword(req.body.password);
    const updateSql = `
    UPDATE app_user SET 
        password = $1
        WHERE id = $2;
    `;
    const updateParams = [password, id];

    pool.query(
        updateSql,
        updateParams
    ).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error in PUT /api/user/:id/reset-password ' + err);
        res.sendStatus(500);
    });
});

router.put('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;
    const password = req.body.password;
    const newPassword = encryptLib.encryptPassword(req.body.newPassword);
    const displayName = req.body.displayName;

    const selectPasswordSql = `
    SELECT password
        FROM app_user
        WHERE id = $1;
    `;
    const selectPasswordParams = [id];
    const updateUserSql = `
    UPDATE app_user SET
        display_name = $1,
        password = $2
        WHERE id = $3;
    `;
    const updateUserParams = [displayName, newPassword, id];

    if (password && newPassword && displayName) {
        (async () => {
            const client = await pool.connect();
            try {
                await client.query('BEGIN');
                const result = await client.query(selectPasswordSql, selectPasswordParams);
                const user = result && result.rows && result.rows[0];
                if (user && encryptLib.comparePassword(password, user.password)) {
                    await client.query(updateUserSql, updateUserParams);
                } else {
                    throw 'Provided password must match database record';
                }
                await client.query('COMMIT');
                res.sendStatus(200);
            } catch (error) {
                await client.query('ROLLBACK');
                throw error;
            } finally {
                client.release();
            }
        })().catch((err) => {
            console.error(err.stack);
            console.log('Error in PUT /api/user ' + err);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(500);
    }
});

router.put('/display-name', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;
    const displayName = req.body.displayName;

    const queryText = `
    UPDATE app_user SET
        display_name = $1
        WHERE id = $2;
    `;
    const queryParams = [displayName, id];

    pool.query(
        queryText,
        queryParams
    ).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error in PUT /api/user/display-name ' + err);
        res.sendStatus(500);
    });
});

router.post('/register', (req, res, next) => {
    const username = req.body.username.toLowerCase();
    const password = encryptLib.encryptPassword(req.body.password);
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);

    const queryText = `
    INSERT INTO app_user 
        (username, password, display_name)
        VALUES 
        ($1, $2, $3) 
        RETURNING id;
    `;

    if (username && password && displayName) {
        pool.query(
            queryText, 
            [username, password, displayName]
        ).then(() => {
            res.sendStatus(201);
        }).catch((err) => {
            next(err);
        });
    } else {
        res.sendStatus(500);
    }
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

router.post('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
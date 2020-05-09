const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
});

router.put('/', rejectUnauthenticated, (req, res) => {
    const id = req.user.id;
    const password = req.body.password;
    const displayName = req.body.displayName;

    if (displayName) {
        let queryText = `
        UPDATE app_user SET
            display_name = $2
            WHERE id = $1;
        `;
        let queryParams = [id, displayName];

        if (password) {
            queryText = `
            UPDATE app_user SET
                display_name = $2,
                password = $3
                WHERE id = $1;
            `;
            queryParams = [id, displayName, encryptLib.encryptPassword(password)];
        }

        pool.query(
            queryText,
            queryParams
        ).then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            next(err);
        });
    } else {
        res.sendStatus(500);
    }
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
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
});

router.post('/register', (req, res, next) => {
    const username = req.body.username.toLowerCase();
    const password = encryptLib.encryptPassword(req.body.password);
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);

    const queryText = 'INSERT INTO app_user (username, password, display_name) VALUES ($1, $2, $3) RETURNING id;';
    pool.query(
        queryText, 
        [username, password, displayName]
    ).then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        next(err);
    });
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

router.post('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
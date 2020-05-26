const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/all', rejectUnauthenticated, (req, res) => {
    const selectSql = `
    SELECT 
        id
        , exercise_name AS name
    FROM calisthenic_exercise_enum
    ORDER BY name;
    `;

    pool.query(
        selectSql
    ).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in GET /api/exercise/all ' + err);
        res.sendStatus(500);
    });
});

module.exports = router;
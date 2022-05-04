var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const fetch = require('node-fetch');

// router.get('/', (req, res, next) => {
//     console.log(req.body.username);
//     console.log("Received profile info data");
//     const statement = await pool.query(`SELECT * FROM ClientInformation WHERE username = $1;`, [req.body.username]);
//     const arr = statement.rows;
//     if (arr.length > 0) {
//         res.send(statement.rows);
//     }
// });


router.get("/:value", async (req, res) => {
    const {value} = req.params;
    const username = req.query.username;
    console.log("req: " + req);
    console.log("params: " + req.params);
    try {
        const query = await fetch(`http://localhost:9000/AccountInfoSaved/${username}`);
        //const arr = query.rows;
        const data = query.json();
        console.log(data);
        res.json(data);

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
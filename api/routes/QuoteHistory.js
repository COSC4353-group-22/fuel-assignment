var express = require("express");
var router = express.Router();
const pool = require("../db/queries");

router.get("/", async (req, res) => {
    try {
        quoteInfo = req.query; 
        console.log(quoteInfo)
        if(quoteInfo.username.length > 1){
            console.log("passed: "  + quoteInfo.username)
            const query = await pool.query(`SELECT * FROM quote;`);
            res.json(query.rows);
        }

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
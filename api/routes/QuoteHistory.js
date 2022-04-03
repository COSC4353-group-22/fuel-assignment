var express = require("express");
var router = express.Router();
const pool = require("../db/queries");

router.get("/", async (req, res, next) => {
    try {
        const query = await pool.query("SELECT * FROM quote");
        res.json(query.rows);

    } catch (err) {
        console.error(err.message);
    }
    /*res.send([//temporary values for now - will connect to database in following assignments
    { date: '2/22/22', gallons: 3, address: '3034 Scenic Elm St', gallonPrice: 1.57, total: 4.71 },
    { date: '4/25/21', gallons: 34, address: '2020 Winding Way', gallonPrice: 2.02, total:  68.68},
    { date: '2/28/20', gallons: 18, address: '9292 Clear Lake City Blvd', gallonPrice: 6.22, total: 111.96 },
    { date: '11/01/21', gallons: 100, address: '8567 Fairmont St', gallonPrice: 1.57, total: 157.0 },
    { date: '08/12/21', gallons: 50, address: '1313 Cornelia St', gallonPrice: 2.50, total: 150.0 }]);*/
});

module.exports = router;
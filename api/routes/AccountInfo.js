var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const { body } = require('express-validator')

// POST(CREATE): an endpoint that will insert data into Database
router.post('/', async (req, res) => {
    try {
        const profileInfo = req.body
        const username = req.body.username;
        console.log(profileInfo)
        console.log("Received profile info data");

        const getStatement = await pool.query(`SELECT * FROM ClientInformation WHERE username = $1;`, [username]); //Checking if user already exists
        const arr = getStatement.rows;

        if (validateIfEmpty(profileInfo)){
            if (arr.length <=  0) {
                const query = await pool.query(
                    `INSERT INTO ClientInformation (Username, First_Name, Last_Name, 
                    Address1, Address2, City, State, Zipcode)
                    VALUES($1, $2, $3, $4, $5, $6, $7, $8)`, [
                        profileInfo.username,
                        profileInfo.firstName,
                        profileInfo.lastName,
                        profileInfo.addressOne,
                        profileInfo.addressTwo,
                        profileInfo.City,
                        profileInfo.State,
                        profileInfo.Zipcode,
                    ]
                );
                res.status(201).send("Profile info added to database!");
            }
            else {
                const updateQuery = await pool.query(
                    `UPDATE ClientInformation SET First_Name = $1, Last_Name = $2, 
                    Address1 = $3, Address2 = $4, City = $5, State = $6, Zipcode = $7
                    WHERE Username = $8`, [
                        profileInfo.firstName,
                        profileInfo.lastName,
                        profileInfo.addressOne,
                        profileInfo.addressTwo,
                        profileInfo.City,
                        profileInfo.State,
                        profileInfo.Zipcode,
                        profileInfo.username,
                    ]
                );
                res.status(200).send("Profile info updated!");
            }
        }
        else {
            res.status(400).send('Input error. Please try again.');
        }
    } catch (err) {
        // console.log("Something went wrong here");
        console.error(err.message);
    }
});

validateIfEmpty = (profileInfo) => {
    if(!(profileInfo.firstName  && profileInfo.lastName != '')){
        return false;
    }
    return true;
}

module.exports = router;
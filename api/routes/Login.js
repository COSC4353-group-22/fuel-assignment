var express = require("express");
var router = express.Router();
const db = require("../db/queries");
const { body } = require('express-validator')
const bcrypt = require("bcrypt");

//https://dev.to/shreshthgoyal/user-authorization-in-nodejs-using-postgresql-4gl

//https://flaviocopes.com/javascript-bcrypt/

//https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/

router.post('/', async (req, result) => {
    try {
        const { username, password } = req.body;
        // query statement to store hash
        const statement = await db.query(`SELECT password FROM UserCredentials WHERE username = $1;`, [username]); //Checking if user already exists
        const arr = statement.rows;

        if (arr.length <=  0) {
            console.log("Username not found");
            result.status(404).send("Username not found");
        }
        else {
            var hash = statement.rows[0].password;
            // compare hash and password
            bcrypt.compare(password, hash, function(err, bresult) {
                // execute code to test for access and login
                if (bresult) {
                    result.status(200).send("Access Granted!");
                    console.log("Access Granted!");
                }
            });
        }
    } catch (err) {
        console.error(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const query = await db.query("SELECT * FROM UserCredentials;");
        console.log(query.rows[1]);
        res.json(query.rows[1]);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
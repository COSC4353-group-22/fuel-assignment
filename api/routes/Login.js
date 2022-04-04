var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const { body } = require('express-validator')
const bcrypt = require("bcrypt");

router.post('/', async (req, res) => {
    try {
        const data = await pool.query(`SELECT * FROM UserCredentials WHERE username = $1 AND password = $2;`, [username, password]); //Checking if user already exists
        const user = data.rows;
        console.log(data);
        console.log(user);
        console.log("Received login form data"); 

            if (user.length === 0) {
                res.status(400).json({
                error: "User is not registered, Sign Up first",
                });
            }
            else {
                if (req.username === user.username && req.password === user.password) {
                    res.status(200).json({
                    message: "User is logged in",
                    });
                }
                else {
                    res.send("Incorrect username or password");
                }
                // bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
                //     if (err) {
                //         res.send("Error");
                //     }
                //     else if (result === true) { //Checking if credentials match
                //         res.send("Login Successful");
                //     } 
                //     else {
                //         res.send("Incorrect password");
                //     }
                // });
            }
    } catch (err) {
        console.error(err.message);
    }
});

// router.get('/', async (req, res) => {
//     try {
//         const query = await pool.query("SELECT * FROM UserCredentials;");
//         console.log(query.rows[1]);
//         res.json(query.rows[1]);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// router.get("/", (req, res, next) => {
//     res.send([//temporary values for now - will connect to database in following assignments
//         { username: "administrator", password: "admin123" },
//         { username: "user", password: "user123" }
//     ])
// });
  

module.exports = router;
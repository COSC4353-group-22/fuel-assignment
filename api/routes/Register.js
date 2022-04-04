var express = require("express");
var router = express.Router();
const { body } = require('express-validator')
const pool = require("../db/queries");
const bcrypt = require("bcrypt");

router.post('/', async (req, res) => {
  try {
      const user = req.body; 
      const {username, password} = req.body;
      console.log(user);
      console.log("Received register form data"); 
    
        const data = await pool.query(`SELECT * FROM UserCredentials WHERE username = $1;`, [username]); //Checking if user already exists
        const arr = data.rows;
        if (arr.length !=  0) {
          console.log("User already exists");
          return res.send("Email already there, No need to register again.");
        }
        else {
          bcrypt.hash(password, 8, async (err, hash) => {
            const user  = {
              username,
              password: hash,
            };
            const query = await pool.query(
              `INSERT INTO UserCredentials (Username, Password)
              VALUES($1, $2)`, [
                  username,
                  password,
              ]
            );
            res.send("User added to database!");
          });
        }
  } catch (err) {
      console.error(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM UserCredentials");
    res.json(data.rows);
  } catch(err) {
      console.error(err.message);
  }
});


module.exports = router;
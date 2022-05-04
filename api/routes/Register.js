var express = require("express");
var router = express.Router();
const { body } = require('express-validator')
const db = require("../db/queries");
const bcrypt = require("bcrypt");

router.post('/', async (req, res) => {
  try {
      const saltRounds = 10;
      const {username, password} = req.body;
      console.log(req.body);
      console.log("Received register form data"); 
    
        const data = await db.query(`SELECT * FROM UserCredentials WHERE username = $1;`, [username]); //Checking if user already exists
        const arr = data.rows;
        if (arr.length !=  0) {
          console.log("User already exists");
          res.status(300).send("Email already there, No need to register again.");
        }
        else {
          bcrypt.hash(password, saltRounds, async (err, hash) => {
            const query = await db.query(
              `INSERT INTO UserCredentials (Username, Password)
              VALUES($1, $2)`, [
                  username,
                  hash,
              ]
            );
            res.status(201).send("User added to database!");
          });
        }
  } catch (err) {
      console.error(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM UserCredentials");
    res.json(data.rows);
  } catch(err) {
      console.error(err.message);
  }
});


module.exports = router;
var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const { body } = require('express-validator')

// POST(CREATE): an endpoint that will insert data into Database
// Will be implemented further with database
router.post('/', async (req, res) => {
    try {
        const profileInfo = req.body
        console.log(profileInfo)
        console.log("recieved profile info data"); 

        validate(profileInfo);

        if (validate(profileInfo)){
            const query = await pool.query(
                `INSERT INTO clientinformation (First_Name, Last_Name, Address1, Address2, City, State, Zipcode)
                VALUES($1, $2, $3, $4, $5, $6, %7)`, [
                    profileInfo.firstName,
                    profileInfo.lastName,
                    profileInfo.addressOne,
                    profileInfo.addressTwo,
                    profileInfo.City,
                    profileInfo.State,
                    profileInfo.ZipCode,
                ]
            );
            res.send('Profile info is added to the database.');
    } } catch (err) {
        console.error(err.message);
    }
});

//validates input for Quote form 
validate = (method) => {
    switch (method) {
      case 'profileInfo': {
       return [ 
        //   body('gallons', "incorrect input for gallons").exists().isInt(),
        //   body('date', 'Invalid date').exists(),
        ]   
      }
    }
  }

//   validateIfEmpty = (profileInfo) => {
//     if(!(profileInfo.name  && quoteInfo.date != '')){
//         return false;
//     }
//     return true; 
// }

module.exports = router;
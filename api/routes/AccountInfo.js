var express = require("express");
var router = express.Router();
const { body } = require('express-validator')

// POST(CREATE): an endpoint that will insert quote data into Database
//Will be implemented further with database
router.post('/', async (req, res) => {
    try {
        // const quoteInfo = req.body;
        const profileInfo = req.body
        // console.log(quoteInfo);
        console.log(profileInfo)
        console.log("recieved profile info data"); 
        
        validate(profileInfo);

    } catch (err) {
        console.error(err.message);
    }
});

// GET(READ): an endpoint to get all passenger info from the API.
router.get('/', async (req, res) => {
    try{
        res.json({"address": "1313 Cornelia Street"}); //temp value for now
    } catch(err) {
        console.error(err.message);
    }

    //CODE FOR RECIEVING FROM DATABASE ONCE IT IS IMPLEMENTED
    /*try {
        const query = await pool.query("SELECT address FROM quote WHERE id = ");
        res.json(query.rows);

    } catch (err) {
        console.error(err.message);
    }*/
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

module.exports = router;
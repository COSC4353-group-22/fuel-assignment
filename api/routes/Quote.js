var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const { body } = require('express-validator')
// GET(READ): an endpoint to get all passenger info from the API.

router.get('/', async (req, res) => {
    //CODE FOR RECIEVING FROM DATABASE ONCE IT IS IMPLEMENTED
    try {
        const query = await pool.query("SELECT address FROM quote;");
        console.log(query.rows[1]);
        res.json(query.rows[1]);
    } catch (err) {
        console.error(err.message);
    }
}); 

// POST(CREATE): an endpoint that will insert quote data into Database
//Will be implemented further with database
router.post('/', async (req, res) => {
    try {
        const quoteInfo = req.body; 
        console.log(quoteInfo);
        console.log("recieved quote form data"); 
        
        //need to validate that the right amount of info goes into backend 
        validate(quoteInfo);
        
        //CODE FOR SENDING TO DATABASE ONCE IT IS IMPLEMENTED
        if (validate2(quoteInfo)){
            const query = await pool.query(
                `INSERT INTO quote (gallons, date)
                VALUES($1, $2)`, [
                    quoteInfo.gallons,
                    quoteInfo.date,
                    //quote.gallonPrice, //not yet 
                    //quote.total
                ]
            );
            res.send('Quote info is added to the database.');
        } }catch (err) {
            console.error(err.message);
        }
});


validate2 = (quoteInfo) => {
    if(quoteInfo.gallons > 0  && quoteInfo.date != ''){
        return true;
    }
    return false; 
}


//validates input for Quote form 
validate = (method) => {
    switch (method) {
      case 'quote': {
       return [ 
          body('gallons', "incorrect input for gallons").exists().isInt(),
          body('date', 'Invalid date').exists(),
        ]   
      }
    }
  }

module.exports = router;

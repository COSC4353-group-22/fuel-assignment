var express = require("express");
var router = express.Router();
const { body } = require('express-validator')

// POST(CREATE): an endpoint that will insert quote data into Database
//Will be implemented further with database
router.post('/', async (req, res) => {
    try {
        const quoteInfo = req.body; 
        console.log(quoteInfo);
        console.log("recieved quote form data"); 
        
        validate(quoteInfo);
        
        //CODE FOR SENDING TO DATABASE ONCE IT IS IMPLEMENTED
        /*const query = await pool.query(
            `INSERT INTO quote (date, gallons, gallonPrice, total)
            VALUES($1, $2, $3, $4)`, [
                quote.date,
                quote.gallons,
                quote.gallonPrice,
                quote.total
            ]
        );
        res.send('Quote info is added to the database.');*/

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
      case 'quote': {
       return [ 
          body('gallons', "incorrect input for gallons").exists().isInt(),
          body('date', 'Invalid date').exists(),
        ]   
      }
    }
  }

module.exports = router;
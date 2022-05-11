var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const { body } = require('express-validator')
// GET(READ): an endpoint to get all passenger info from the API.

router.get('/', async (req, res) => {
    try {
        const query = await pool.query("SELECT address1 FROM clientinformation;");
        console.log(query.rows[0]);
        res.json(query.rows[0]);
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
        console.log("Send" + quoteInfo.send)
        
        //need to validate that the right amount of info goes into backend 
        validate(quoteInfo);
        suggested_price = Pricing_module(quoteInfo)
        console.log("Suggested Price = " + suggested_price)
        total_price = suggested_price * quoteInfo.gallons
        
        result = {"gallonPrice": suggested_price, "total":total_price}
        res.json(result)
        
        
        //CODE FOR SENDING TO DATABASE ONCE IT IS IMPLEMENTED
        if (validate2(quoteInfo) && quoteInfo.send == 1){
            const query = await pool.query(
                `INSERT INTO quote (Username, gallons, date, address, gallonPrice, total)
                VALUES($1, $2, $3, $4, $5, $6)`, [
                    quoteInfo.user,
                    quoteInfo.gallons,
                    quoteInfo.date,
                    quoteInfo.address,
                    suggested_price, 
                    total_price
                ]
            );
        } }catch (err) {
            console.error(err.message);
        }
});

Pricing_module = (quoteInfo) => {
    fromTexas = 0.04
    newClient = 0.0
    gallons_num = 0.03 

    console.log("quote info username = " + quoteInfo.user); 

    router.get('/', async (req, res) => {
        try {
            const query = await pool.query(`SELECT state FROM clientinformation WHERE username LIKE '$1';` [quoteInfo.user]);
            if(query.rows[0].state == 'TX'){
                fromTexas = 0.02
            }
        } catch (err) {
            console.error(err.message);
        }
    }); 

    router.get('/', async (req, res) => {
        try {
            const query = await pool.query(`SELECT * FROM quote WHERE username LIKE $1;` [quoteInfo.user]);
            if (query2.rows.length >= 1){
                newClient = 0.01
            }
        } catch (err) {
            console.error(err.message);
        }
    });

    if (quoteInfo.gallons >= 1000){
        gallons_num = 0.02
    }
    margin = fromTexas + newClient + gallons_num + .1
    suggested_price = 1.50 + margin 

    return suggested_price;   
}

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

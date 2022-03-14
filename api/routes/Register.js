var express = require("express");
var router = express.Router();
const { body } = require('express-validator')

router.post('/', async (req, res) => {
  try {
      const user = req.body; 
      console.log(user);
      console.log("Received register form data"); 
      
      validate(user);
      
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

router.get('/', async (req, res) => {
  try{
      res.json({"username": "user"}); //temp value for now
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

validate = (method) => {
  switch (method) {
    case 'user': {
     return [ 
        body('username', "incorrect input for user").exists().not().isEmpty(),
        body('password', 'Invalid pass').exists().not().isEmpty(),
      ]   
    }
  }
}


module.exports = router;
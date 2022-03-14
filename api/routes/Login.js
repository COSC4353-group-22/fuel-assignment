var express = require("express");
var router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = req.body; 
        console.log(user);
        console.log("Received login form data"); 
        
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

router.get("/", (req, res, next) => {
    res.send([//temporary values for now - will connect to database in following assignments
        { username: "administrator", password: "admin123" },
        { username: "user", password: "user123" }
    ])
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
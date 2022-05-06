var express = require("express");
var router = express.Router();
const pool = require("../db/queries");
const { body } = require('express-validator')

router.get('/', async (req, res) => {
    try {
        const quoteInfo = req.body; 
        
        suggested_price = Pricing_module(quoteInfo)
        console.log("Suggested Price = " + suggested_price)
        total_price = suggested_price * quoteInfo.gallons

        result = {"gallonPrice": suggested_price, "total":total_price}
        res.json(result);
    } catch (err) {
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
import React, {Component} from "react";
import { useState } from "react";
import './FuelQuote.css';

function FuelQuote()  {
    const [quote, setQuote] = useState({});

    const handleInputChange = (event) => {
        const gallons = event.target.gallons;
        const date = event.target.date; 
        setQuote(values => ({...values, [gallons]:date}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(quote);
    }

    return (
        <div className='Fuel Quote'>
            <head>
                <link rel="stylesheet" href="FuelQuote.css"></link>
            </head>
            <h1> Fuel Quote Form:</h1>
            <form className='quote-form' onSubmit={handleSubmit} oninput="total.value = parseInt(g.value) * parseInt(p.value)">
                <label>
                    Number of Gallons: <input name="gallons" id="g" type="number" value={quote.gallons} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Desired Delivery Date: <input name="date" type="date" value={quote.date} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Delivery Address: <input name="address" type="text" value={quote.address} readonly/>
                </label>
                <br />
                <label>
                   Suggested Price: <input name="gallonPrice" id="p" type="number" value={quote.gallonPrice} />
                </label>
                <br />
                <label>
                    Total Price: <output name="total" for="g p" />
                </label><br />
                 <input type = "submit" />
            </form>
            </div>
    )
}

export default FuelQuote
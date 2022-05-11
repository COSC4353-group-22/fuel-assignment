import React, {Component} from "react";
import axios from "axios";
import './FuelQuote.css';
import NavBar from './NavBar';
import { useEffect, useState } from "react";

function FuelQuote()  {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            console.log("User session: " + foundUser.username);
        }
    }, []);

    //hannah's code from here 
    const [quote, setQuote] = useState({});
    const [price, setPrice] = useState({});
    const [data, setData] = useState();
     

    const fetchAddress = async () => {
        await axios.get(`http://localhost:9000/quote`).then((res) => {
          setData(res.data.address1);
          console.log(res.data.address1);
        }).catch((err) => {
          console.log(err);
        });
    }
    fetchAddress();

    const handleInputChangeGallons = (event) => {
        console.log(event.target.value)
        let q = {
            "send": 0,
            "user": user.username, 
            "gallons": event.target.value, 
            "date": quote.date,
            "address": data
        }
        setQuote(q);
        console.log("input change:", q);
    }

    const handleInputChangeDate = (event) => {
        console.log("address = " +  data);
        let q = {
            "send": 0,
            "user": user.username,
            "gallons": quote.gallons,
            "date": event.target.value,
            "address": data
        }
        setQuote(q);
        console.log("input change:", q);
    }

    const handlePriceSubmit = async(event) => {
        event.preventDefault(); 

        let q = {
            "send": 0,
            "user": user.username,
            "gallons": quote.gallons,
            "date": quote.date,
            "address": data
        }
        setQuote(q);
        console.log(quote);
        
        await axios.post(`http://localhost:9000/quote`, quote).then((res) => {
            console.log("form data sent to server"); 
            let p = {
                "gallonPrice": res.data.gallonPrice, 
                "total": res.data.total
            }
            setPrice(p);
		}).catch((err) => {
			console.log(err);
		});
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log("main submit")

        let q = {
            "send": 1,
            "user": user.username,
            "gallons": quote.gallons,
            "date": quote.date,
            "address": data
        }
        setQuote(q);
        console.log(quote)

        await axios.post(`http://localhost:9000/quote`, quote).then((res) => {
            console.log("form data sent to server"); 
            let p = {
                "gallonPrice": res.data.gallonPrice, 
                "total": res.data.total
            }
            setPrice(p);
		}).catch((err) => {
			console.log(err);
		});
    }

    return (
        <div>
            <NavBar />
            <div className='Fuel-Quote'>
                <head>
                    <link rel="stylesheet" href="FuelQuote.css"></link>
                </head>
                <h1> Fuel Quote Form:</h1>
                <form className='quote-form' onSubmit={handleSubmit} oninput="total.value = parseInt(g.value) * parseInt(p.value)">
                    <label>
                        Number of Gallons: <input name="gallons" id="g" type="number" value={quote.gallons} onChange={handleInputChangeGallons} />
                    </label>
                    <br />
                    <label>
                        Desired Delivery Date: <input name="date" type="date" value={quote.date} onChange={handleInputChangeDate} />
                    </label>
                    <br />
                    <label>
                        Delivery Address: <input name="address" type="text" value={data} readOnly/>
                    </label>
                    <br />
                    <label>
                    Suggested Price: <input name="gallonPrice" id="p" type="number" value={price.gallonPrice} />
                    <button onClick={handlePriceSubmit}>Get Quote</button>
                    </label>
                    <br />
                    <label>
                        Total Price: <input name="total" id="p" type="number" value={price.total} readOnly/>
                    </label><br />
                    <button type="submit">Confirm Quote</button>
                </form>
            </div>
        </div>
    )
}

export default FuelQuote
import React, {Component} from "react";
import axios from "axios";
import './FuelQuote.css';
import NavBar from './NavBar';
import { useEffect, useState } from "react";

function FuelQuote()  {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const [profile, setProfile] = useState({
        "username": "",
        "firstName":"",
        "lastName":"",
        "addressOne":"",
        "addressTwo":"",
        "City":"",
        "Zipcode": "",
        "State":"",
    });

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            console.log("User session: " + foundUser.username);
        }
    }, []);

    const [quote, setQuote] = useState({});
    const [data, setData] = useState(); 

    const handleInputChangeGallons = (event) => {
        console.log(event.target.value)
        let q = {
            "gallons": event.target.value, 
            "date": quote.date
        }
        setQuote(q);
        console.log("input change:", q);
    }

    const handleInputChangeDate = (event) => {
        console.log(event.target.value)
        let q = {
            "gallons": quote.gallons,
            "date": event.target.value,
        }
        setQuote(q);
        console.log("input change:", q);
    }

    const fetchAddress = async () => {
        await axios.get(`http://localhost:9000/quote`).then((res) => {
          setData(res.data.address);
          console.log(res.data.address);
        }).catch((err) => {
          console.log(err);
        });
    }
    fetchAddress(); 
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(quote);

        await axios.post(`http://localhost:9000/quote`, quote).then((res) => {
            console.log("form data sent to server"); 
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
                    Suggested Price: <input name="gallonPrice" id="p" type="number" value={quote.gallonPrice} />
                    </label>
                    <br />
                    <label>
                        Total Price: <output name="total" for="g p"> 0.0$ </output>
                    </label><br />
                    <button type="submit">Confirm Quote</button>
                </form>
            </div>
        </div>
    )
}

export default FuelQuote
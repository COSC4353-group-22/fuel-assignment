import React from 'react';
import Checks from "../components/forms/Checks";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import fetch from 'node-fetch';


function AccountInfoSaved() {
    const [user, setUser] = React.useState({ username: "", password: "" });
    const [error, setError] = React.useState("");

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

    return (
        <div>
            <NavBar />
            <div className='info-display'>
                <Link to="/profile/edit" className='button welcome'>Edit Client Profile</Link>
                <h2>Account Information Saved:</h2>
            </div>
        </div>
    )
}

export default AccountInfoSaved;
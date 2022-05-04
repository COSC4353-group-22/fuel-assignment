import React from 'react';
import Checks from "../components/forms/Checks";
import axios, { Axios } from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';


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

    const fetchTable = async () => {
        var res = await axios.get(`http://localhost:9000/AccountInfoSaved`).then((res) => {
            setProfile(res.data[0]);
            console.log(profile);
          }).catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            console.log("User session: " + foundUser.username);
        }
        fetchTable();
    }, []);

    return (
        <div>
            <NavBar />
            <div className='info-display'>
                <Link to="/profile/edit" className='button welcome'>Edit Client Profile</Link>
                <h2>Account Information Saved:</h2>
                {(!profile) ? (
                    <div>
                        <p>No account information saved</p>
                    </div>
                ) : (
                    <div>
                        <p>First Name: { profile.first_name }</p>
                        <p>Last Name: { profile.last_name }</p>
                        <p>Address 1: { profile.address1 }</p>
                        <p>Address 2: { profile.address2 }</p>
                        <p>City: { profile.city }</p>
                        <p>State: { profile.state }</p>
                        <p>Zipcode: { profile.zipcode }</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AccountInfoSaved;
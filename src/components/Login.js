import React from 'react';
import LoginForm from './LoginForm';
import Checks from "../components/forms/Checks";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import NavBarSemi from './NavBarSemi';

function Login() {
    const [user, setUser] = React.useState({username: "", password: ""});
    const [error, setError] = React.useState("");

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const Login = async details => {
        console.log(details);
        if (Checks.checkLoginInput(details.username, details.password)) {
            console.log("Login details are valid input");
            var res = await axios.post('http://localhost:9000/login', {
                username: details.username, 
                password: details.password
            });
            if (res.status == 200) {
                setUser({
                    username: details.username,
                    password: details.password,
                });
                sessionStorage.setItem("user", JSON.stringify(user));
                console.log("Login successful");
            }
        } else {
            setError("Invalid Username or Password");
        }
    }
    const Logout = () => {
        setError("");
        setUser({ username:"", password: "" });
        sessionStorage.removeItem("user");
        sessionStorage.clear();
    }

    return (
        <div>
            {(sessionStorage.getItem("user")) ? (
                <div>
                    <NavBar />
                    <div className='logged-in'>
                        <div className='welcome'>
                            <h2>Welcome, <span>{user.username}</span></h2>
                            <button onClick={Logout}>Logout</button>
                        </div>
                        <div className='edit-info'>
                            <Link to="/profile" className='button'>Client Profile</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <NavBarSemi />
                    <div className='login'>
                        <LoginForm Login={Login} error={error} />
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;
import axios from "axios";
import React from 'react'
import { useState } from "react";
import Checks from "../components/forms/Checks";
import { Link } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");

    // const fetchTable = async () => {
    //     await axios.get(`http://localhost:9000/register`).then((res) => {
    //       setUser(res.data);
    //       console.log(res.data);
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    // }
    // fetchTable();

    const Register = user => {
        if (Checks.checkRegisterInput(user.username, user.password)) {
            console.log(user);
            //Post to DB
            setUser({
                username: user.username,
                password: user.password
            });
            return true;
        } else {
            setError("Username or Password cannot be empty!");
            return false;
        }
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        if (Register(user)){
            var resp = await axios.post('http://localhost:9000/register', {
                username: user.username, 
                password: user.password
            });
            console.log("Registering user:", user);
            if (resp.status == 201) {
                setError("User registered successfully!");
            }
            else if (resp.status == 202){
                setError("User already exists!");
            }
        }
        else {
            console.log("Error:", error);
        }
    }

    return (
        <div className='register'>
            <form className="form-login" onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Register</h2>
                    {(error != "" ) ? (<div className='error'>{error}</div>) : ""}
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' className="form-input" name="username" id="username" onChange={e => setUser({...user, username:e.target.value})} value={user.username} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className="form-input" name="password" id="password" onChange={e => setUser({...user, password:e.target.value})} value={user.password}/>
                    </div>
                    <input type="submit" className="form-input" value="Register" />
                    <Link to="/login" className='button-register'>Have an account? Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
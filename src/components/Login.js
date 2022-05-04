import React from 'react';
import LoginForm from './LoginForm';
import Checks from "../components/forms/Checks";
import axios from "axios";


function Login() {
    const [user, setUser] = React.useState({username: "", password: ""});
    const [error, setError] = React.useState("");

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
                    password: details.password
                });
                console.log("Login successful");
            }
        } else {
            setError("Invalid Username or Password");
        }
    }
    const Logout = () => {
        setError("");
        setUser({ username:"", password: "" });
    }

    return (
        <div className='login'>
            {(user.username != "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}
export default Login;
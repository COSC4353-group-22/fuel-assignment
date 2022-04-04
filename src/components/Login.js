import React from 'react';
import LoginForm from './LoginForm';
import Checks from "../components/forms/Checks";
import axios from "axios";

function Login() {
    // const adminUser = {
    //     username: "administrator",
    //     password: "admin123"
    // }
    var listUsers = [
        {username: "administrator", password: "admin123"},
        {username: "user1", password: "user1234"}

    ]
    const [user, setUser] = React.useState({username: "", password: ""});
    const [error, setError] = React.useState("");

    const Login = async details => {
        console.log(details);
        if (Checks.checkLoginInput(details.username, details.password)) {
            await axios.post('http://localhost:9000/login', {
                username: user.username, 
                password: user.password
            }).then((response) => {
                console.log("Log data sent to server");
            });
            console.log("Login Successful");
            setUser({
                username: details.username,
                password: details.password
            });
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
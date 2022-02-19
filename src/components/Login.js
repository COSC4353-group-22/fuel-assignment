import React from 'react';
import LoginForm from './LoginForm';

function Login() {
    const adminUser = {
        username: "admin",
        password: "admin123"
    }
    const [user, setUser] = React.useState({username: "", password: ""});
    const [error, setError] = React.useState("");

    const Login = details => {
        console.log(details);
        if (details.username === adminUser.username && details.password === adminUser.password) {
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
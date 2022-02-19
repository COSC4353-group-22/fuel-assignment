import React from 'react'

function Register() {
    const [user, setUser] = React.useState({name: "", password: ""});
    const [error, setError] = React.useState("");

    const Register = user => {
        console.log(user);
        if (user.username != "" && user.password != "") {
            console.log("Register Successful");
            setUser({
                username: user.username,
                password: user.password
            });
        } else {
            setError("Username or Password cannot be empty!");
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        Register(user);
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
                </div>
            </form>
        </div>
    );
}

export default Register;
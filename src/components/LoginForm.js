import React, { useState }from 'react';
import { Link } from 'react-router-dom';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form className="form-login" onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != "" ) ? (<div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                    <label>Username</label>
                    <input type='text' className="form-input" name="username" id="username" onChange={e => setDetails({...details, username:e.target.value})} value={details.username} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className="form-input" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" className="form-input" value="Login" />
                <Link to="/register" className='button-register'>Don't have an account? Register</Link>
            </div>
        </form>
    );
}

export default LoginForm;
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import NavBarSemi from './NavBarSemi';

function Home() {
    return (
        <div>
            {(sessionStorage.getItem("user")) ? (
                <div>
                    <NavBar />
                    <div className='homepage'>
                        <h1>Home</h1>
                    </div>
                </div>
            ) : (
                <div>
                    <NavBarSemi />
                    <div className='homepage'>
                        <h1>Home</h1>
                        <Link to="/login" className='button'>Login</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Home;
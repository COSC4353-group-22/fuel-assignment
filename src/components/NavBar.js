import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <ul className='nav'>
            <li>
                <Link to="/" className='nav-item'>Home</Link>
            </li>
            <li>
                <Link to="/login" className='nav-item'>Login</Link>
            </li>
            <li>
                <Link to="/profile" className='nav-item'>Client Profile</Link>
            </li>
            <li>
                <Link to="/quote" className='nav-item'>Quote Form</Link>
            </li>
            <li>
                <Link to="/history" className='nav-item'>Quote History</Link>
            </li>
        </ul>
    );
}

export default NavBar;

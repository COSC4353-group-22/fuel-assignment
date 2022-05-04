import React from 'react';
import { Link } from 'react-router-dom';

function NavBarSemi() {
    return (
        <ul className='nav'>
            <li>
                <Link to="/" className='nav-item'>Home</Link>
            </li>
            <li>
                <Link to="/login" className='nav-item'>Login</Link>
            </li>
        </ul>
    );
}

export default NavBarSemi;

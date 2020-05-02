import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <Link to="/about">About</Link>
            <span> / </span>
            <Link to="/login">Login</Link>
            <span> / </span>
            <Link to="/logout">Logout</Link>
        </header>
    );
}

export default Navbar;
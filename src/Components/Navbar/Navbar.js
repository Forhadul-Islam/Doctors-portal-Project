import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navBar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Our services</a>
                <a href="/reviews">Reviews</a>
                <a href="/blogs">Blogs</a>
                <a style={{ color: 'blue' }} href="/doctor">Doctor</a>
            </nav>
        </div>
    );
};

export default Navbar;
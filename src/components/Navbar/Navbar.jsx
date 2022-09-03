import React from 'react';
import logo from ".//logo.png";
import lock from ".//lock.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.contain}>
            <div className={classes.navigation}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>
                    <a href="">Help</a>
                </div>
                <div>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <div>
                <img src={lock} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
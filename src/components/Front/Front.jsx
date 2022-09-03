import React from 'react';
import classes from './Front.module.css';
import userPic from './/user.png';


const Front = () => {
    return (
        <div className={classes.contain}>
            <div>
                <h1>Want anything to be <br />
                easy with <span>LaslesVPN.</span></h1>
                <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> <br />
                dicsover interesting features from us.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img src={userPic} alt="" />
            </div>
        </div>
    );
};

export default Front;
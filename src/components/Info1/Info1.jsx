import React from 'react';
import classes from './Info1.module.css';
import {FaUserCircle} from 'react-icons/fa';

const Info1 = () => {
    return (
        <div className={classes.contain}>
            <div>
                <FaUserCircle size={'2em'} color={'#F53838'}/>
            </div>
            <div>
                <h2>90+</h2>
                <p>Users</p>
            </div>
        </div>
    );
};

export default Info1;
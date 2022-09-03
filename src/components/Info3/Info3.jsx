import React from 'react';
import classes from './Info3.module.css';
import { FaServer } from 'react-icons/fa';

const Info3 = () => {
    return (
        <div className={classes.contain}>
            <div>
                <FaServer size={'2em'} color={'#F53838'}/>
            </div>
            <div>
                <h2>50+</h2>
                <p>Servers</p>
            </div>
            
        </div>
    );
};

export default Info3;
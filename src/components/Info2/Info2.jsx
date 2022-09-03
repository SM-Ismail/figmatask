import React from 'react';
import classes from './Info2.module.css';
import { FaLocationArrow } from 'react-icons/fa';


const Info2 = () => {
    return (
        <div className={classes.contain}>
            <div>
                <FaLocationArrow size={'2em'} color={'#F53838'}/>
            </div>
            <div>
                <h2>30+</h2>
                <p>Locations</p>
            </div>
            
        </div>
    );
};

export default Info2;
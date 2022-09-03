import React from 'react';
import Info1 from '../Info1/Info1';
import Info2 from '../Info2/Info2';
import Info3 from '../Info3/Info3';

import classes from './Info.module.css';



const Info = () => {
    return (
        <div className={classes.contain}>
            <div>
                <Info1></Info1>
            </div>
            <div>
                <Info2></Info2>
            </div>
            <div>
                <Info3></Info3>
            </div>
           
        </div>
    );
};

export default Info;
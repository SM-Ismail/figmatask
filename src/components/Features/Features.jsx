import React from 'react';
import classes from './Features.module.css';
import user1 from './/user1.png';
import { FaCheck } from 'react-icons/fa';


const Features = () => {
    return (
        <div className={classes.contain}>
            <div>
                <img src={user1} alt="" />
            </div>
            <div>
                <h2>We Provide Many <br />
                    Features You Can Use
                </h2>
                <p>
                    You can explore the features we provide with fun and <br />
                    have their own functions with each feature.
                </p>
                <ul>
                    <li><span><FaCheck size={'1em'} color={'#FFFF'}/></span> Powerful online protection</li>
                    <li><span><FaCheck size={'1em'} color={'#FFFF'}/></span> Internet without borders </li>
                    <li><span><FaCheck size={'1em'} color={'#FFFF'}/></span> Supercharged VPN</li>
                    <li><span><FaCheck size={'1em'} color={'#FFFF'}/></span> No specific time limits</li>
                </ul>

            </div>
        </div>
    );
};

export default Features;
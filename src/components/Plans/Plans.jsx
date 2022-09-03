import React from 'react';
import classes from './Plans.module.css';
import gift from './/gift.png';
import { FaCheck } from 'react-icons/fa';

const Plans = () => {
    return (
        <div className={classes.container}>
            <div>
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for youand explore it happily and <br />
                   cheerfully.</p>
            </div>
            <div>
                <div>
                    <img src={gift} alt="" />
                    <h5>Free Plan</h5>
                    <p><span><FaCheck size={'1em'} color={'#2FAB73'}/></span> Unlimited Bandwith</p>
                    <p>Encrypted Connection</p>
                    <p>No Traffic Logs</p>
                    <p>Works On All Devices</p>
                    <h3>Free</h3>
                    <button>Select</button>
                </div>
                <div>
                    <img src={gift} alt="" />
                    <h5>Standard Plan</h5>
                    <p><span><FaCheck size={'1em'} color={'#2FAB73'}/></span>Unlimited Bandwith</p>
                    <p>Encrypted Connection</p>
                    <p>Yes Traffic Logs</p>
                    <p>Works On All Devices</p>
                    <p>Connect Anywhere</p>
                    <h3>$9 / mo</h3>
                    <button>Select</button>
                </div>
                <div>
                    <img src={gift} alt="" />
                    <h5>Premium Plan</h5>
                    <p><span><FaCheck size={'1em'} color={'#2FAB73'}/></span>Unlimited Bandwith</p>
                    <p>Encrypted Connection</p>
                    <p>Yes Traffic Logs</p>
                    <p>Works On All Devices</p>
                    <p>Connect Anywhere</p>
                    <p>Get New Features</p>
                    <h3>$12 / mo</h3>
                    <button>Select</button>
                </div>
            </div>
            
        </div>
    );
};

export default Plans;
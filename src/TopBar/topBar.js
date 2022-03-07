import React from "react";
import classes from './TopBar.module.css';

const TopBar = (props)=>{
    return(
        <nav className={classes.topBar}>
        <a href="https://www.amazon.in/ref=nav_logo" target='blank'>
        <img src="https://companyinsider986783874.files.wordpress.com/2021/08/amazon.jpg" alt="Amazon Logo" />        
        </a>        
        </nav> 
    );
}

export default TopBar;
import React from 'react';
import classes from "./Logo.module.css";
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="buger-builder logo" />
  </div>
)

export default Logo;
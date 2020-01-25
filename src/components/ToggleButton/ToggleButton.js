import React from 'react';
import classes from './ToggleButton.module.css';
import Logo from '../Logo/Logo';

const ToggleButton = props => (
  <div onClick={props.clicked} className={classes.ToggleButton}>
    <Logo />
  </div>
)

export default ToggleButton;
import React from 'react';
import classes from "./Toolbar.module.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../../ToggleButton/ToggleButton';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <ToggleButton clicked={props.menuClicked} />

    <div className={[classes.Logo, classes.DesktopOnly].join(' ')}>
      <Logo />
    </div>
    
    <nav className={[classes.Logo, classes.DesktopOnly].join(' ')}>
      <NavigationItems />
    </nav>
  </header>
)

export default Toolbar;
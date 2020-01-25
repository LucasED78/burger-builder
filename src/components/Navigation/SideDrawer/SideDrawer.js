import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
  const assignedClasses = [
    classes.SideDrawer,
    props.showBackdrop ? classes.Open : classes.Closed
  ].join(' ');

  return (
    <Aux>
      <Backdrop onClosed={props.menuClosed} show={props.showBackdrop}/>

      <div className={assignedClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer;
import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Home
      </NavigationItem>

      <NavigationItem link="/checkout">
        Checkout
      </NavigationItem>
    </ul>
)

export default NavigationItems;
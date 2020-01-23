import React from 'react';
import BurgerIngreditent from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngreditent type="bread-top" />
      <BurgerIngreditent type="cheese" />
      <BurgerIngreditent type="meat" />
      <BurgerIngreditent type="bread-bottom" />
    </div>
  )
}

export default Burger;
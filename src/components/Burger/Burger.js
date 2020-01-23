import React from 'react';
import BurgerIngreditent from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => [...new Array(props.ingredients[igKey])].map((_, i) =>
      <BurgerIngreditent key={igKey + i} type={igKey} />
    ))

  return (
    <div className={classes.Burger}>
      <BurgerIngreditent type="bread-top" />
      {transformedIngredients}
      <BurgerIngreditent type="bread-bottom" />
    </div>
  )
}

export default Burger;
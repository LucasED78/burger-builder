import React from 'react';
import Aux from '../../../hoc/Aux'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button';

const OrderSumary = props => {
  const ingredients = props.ingredients;

  const summary = Object.keys(ingredients)
    .map(igKey => (
      <li key={igKey}>
        <span>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    ))

  return (
    <Aux>
      <h1>Order Summary</h1>

      <p>A delicious burger with the following ingredients: </p>

      <ul>
        {summary}
      </ul>

      <p>
        <strong>Total price: {props.totalPrice}</strong>
      </p>

      <Button 
      type="Danger"
      clicked={props.purchaseCancelled}>
        Cancel
      </Button>

      <Button type="Success"
        clicked={props.purchaseContinued}>
        Order
      </Button>
    </Aux>
  )
}

export default OrderSumary;
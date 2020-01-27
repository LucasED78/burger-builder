import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuilderControls/BuilderControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import OrderService from '../../services/OrderService';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import api from '../../services/api';
import IngredientsService from '../../services/IngredientsService';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.4
}

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: true,
    purchasing: false,
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true })

    try {
      const ingredients = await IngredientsService.fetch();

      this.setState({ ingredients: ingredients.data, loading: false });
    } catch(e){
      this.setState({ loading: false });
    }
  }

  addIngredientHandler = type => {
    if(type !== null){
      let ingredients = {...this.state.ingredients};

      ingredients[type] += 1;
      const updatedPrice = INGREDIENTS_PRICE[type] + this.state.totalPrice

      this.setState(() => {
        return {
          ingredients: ingredients,
          totalPrice: updatedPrice
        }
      }, this.updatePurchasableState);
    }
  }

  removeIngredientHandler = type => {
    let ingredients = {...this.state.ingredients};

    if (ingredients[type] === 0) {
      return;
    }

    ingredients[type] -= 1;
    const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];

    this.setState(() => {
      return {
        ingredients: ingredients,
        totalPrice: updatedPrice
      }
    }, this.updatePurchasableState)
  }

  updatePurchasableState(){
    const ingredients = {...this.state.ingredients};

    const sum = Object.keys(ingredients)
    .map(igKey => ingredients[igKey])
    .reduce((arr, el) => arr + el)

    this.setState({ purchasable: sum === 0 })
    
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelledHandler = () => this.setState({ purchasing: false })

  purchaseContinuedHandler = async () => {
    this.setState({ loading: true});

    try {
      const response = await OrderService.save({
        ingredients: this.state.ingredients,
        totalPrice: this.state.totalPrice
      });

      this.setState({ loading: false, purchasing: false });
    }catch(e){
      this.setState({ loading: false, purchasing: false });
    }
  }


  render(){
    const disabledInfo = {...this.state.ingredients};

    if (this.state.ingredients) for (const ing in disabledInfo){
      disabledInfo[ing] = disabledInfo[ing] === 0
    }

    const orderSummary = !this.state.loading && this.state.ingredients ? <OrderSummary 
        ingredients={this.state.ingredients} 
        purchaseCancelled={this.purchaseCancelledHandler}
        purchaseContinued={this.purchaseContinuedHandler} 
        totalPrice={this.state.totalPrice.toFixed(2)} /> : <Spinner />

    const burger = !this.state.loading && this.state.ingredients ? (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>

        <div>
          <BuilderControls 
          moreClicked={this.addIngredientHandler} 
          lessClicked={this.removeIngredientHandler} 
          disabledInfo={disabledInfo} 
          currentPrice={this.state.totalPrice.toFixed(2)}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}/>
        </div>
      </Aux>
    ) : <Spinner />

    return (
      <Aux>
        <Modal show={this.state.purchasing} onModalClosed={this.purchaseCancelledHandler}>
          {orderSummary}
        </Modal>
        
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, api);
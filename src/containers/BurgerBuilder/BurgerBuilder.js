import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    meat: 1.3,
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7
}; 

class BurgerBuilder extends Component {   

state = {
    ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
}

updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
        .map(key => ingredients[key])
        .reduce((sum, el) => { return sum + el}, 0);

    this.setState({purchasable: sum > 0})
}


addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchasableState(updatedIngredients);
}

removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
        return;
    }
    const updatedCount = oldCount - 1;

    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    this.updatePurchasableState(updatedIngredients);
}

purchaseHandler = () => {
    this.setState({purchasing: true});
}

purchaseCancelHandler = () => {
    this.setState({purchasing: false});
}

purchaseContinueHandler = () => {
    alert("Purchase continue");
}

render() {
    const disabledInfo = {...this.state.ingredients};

    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
        <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            <OrderSummary 
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls 
        ingredientAdd={this.addIngredientsHandler}
        ingredientRemove={this.removeIngredientsHandler}
        disabled = {disabledInfo}
        price = {this.state.totalPrice}
        purchase={this.state.purchasable}
        showModal={this.purchaseHandler}
        />
        </Aux>
    );
};
};

export default BurgerBuilder;
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

state = {
    ingredients: {
        meat: 1,
        cheese: 2,
        salad: 3,
    }
}

render() {
    return (
        <Aux>
        <Burger ingredients = {this.state.ingredients}/>
        <div>Build Controls</div>
        </Aux>
    );
};
};

export default BurgerBuilder;
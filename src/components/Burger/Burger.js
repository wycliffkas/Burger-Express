import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ig => {
        return [...Array(props.ingredients[ig])].map((_, i) => {
            return <BurgerIngredients key={ig + i} type={ig}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default burger;
import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from '../BuildControl/BuildControl'
import classes from './BuildControls.module.css';

const controls = [ 
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const BuildControls = (props) => (
    <div className={styles.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
        <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdd(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
    ))}
    <button 
        className={classes.OrderButton}
        disabled={!props.purchase} 
        onClick={props.showModal}>ORDER NOW</button>
    </div>    
);

export default BuildControls;
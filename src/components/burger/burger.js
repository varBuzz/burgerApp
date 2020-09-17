import React from 'react'
import BurgerIngridients from './burgerIngridients/burgerIngridients'
import classes from './burger.css'

export default function Burger(props) {
    //console.log(props.ingridients.meat)
    let ingridients = Object.keys(props.ingridients)
    .map(igKey => {
        console.log(igKey)
        console.log(props.ingridients[igKey]);
        return [...Array(props.ingridients[igKey])].map((_, index) => {
          return <BurgerIngridients key={igKey + index} type={igKey} />;
        });
    })
    .reduce((arr, el) => arr.concat(el), []);
    console.log(ingridients)
    
    if( ingridients.length === 0) {
        ingridients = <p>Please add the ingridients</p>
    }

    return (
        <div className= {classes.Burger}> 
        <BurgerIngridients type= "bread-top" />
        {ingridients}
        <BurgerIngridients type = 'bread-bottom' />
        </div>
    )
}

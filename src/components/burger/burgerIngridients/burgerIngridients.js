import React from 'react'
import classes from './burgerIngridients.css'

export default function burgerIngridients(props) {
    let ingridient = null;
    switch (props.type) {

        case ('bread-bottom') : 
        ingridient = <div className = {classes.BreadBottom}></div>;
        break;
        case ('bread-top') :
            ingridient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                 </div>
        );
        break;

        case ('meat') : 
        ingridient = <div className= {classes.Meat}></div>
        break;

        case ('cheese') : 
        ingridient = <div className= {classes.Cheese} ></div>

        case('salad') : 
        ingridient = <div className= {classes.Salad}></div>

        case('bacon') :
        ingridient = <div className= {classes.bacon}></div>

        default: 
        ingridient= null; 

    }
    return (
        <div>
            {ingridient}
        </div>
    )
}

import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/BuildControls/BuildControls'

export default class BurgerBuilder extends Component {
    state = {
        ingridients : {
            salad : 3,
            bacon : 1,
            cheese : 2,
            meat : 1
        }
    }
    
    render() {
        return (
         <Aux>
            <Burger ingridients = {this.state.ingridients}/>
             <div><BuildControls /> </div>
         </Aux>
        )
    }
}

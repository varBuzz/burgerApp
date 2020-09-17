import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/burger/burger';

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
             <div>build controls</div>
         </Aux>
        )
    }
}

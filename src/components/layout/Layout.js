import React from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './layout.css'
export default function Layout(props) {
    return (
      <Aux>
        <div>toolbar, sidedrawer, backdrop </div>
          <main className = {classes.content}>{props.children}</main>
      </Aux>
    );
}

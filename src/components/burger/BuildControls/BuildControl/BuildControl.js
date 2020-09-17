import React from 'react';
import classes from './BuildControl.css'

export default function BuildControl(props) {
    return (
        <div className = {classes.BuildControl}>
            <div>{props.label}</div>
            <button className = {classes.button}>Less</button>
            <button className = {classes.button}>More</button>
            
        </div>
    )
}

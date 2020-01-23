import React from 'react';
import classes from './BuilderControl.module.css';

const BuilderControl = props => (
    <div className={classes.BuilderControl}>
      <div>{props.label}</div>
      <button onClick={() => props.moreClicked(props.type)}>More</button>
      <button 
      onClick={() => props.lessClicked(props.type)}
      disabled={props.disabled}>Less</button>
    </div>
)

export default BuilderControl;
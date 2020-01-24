import React from 'react';
import classes from './BuilderControls.module.css';
import BuilderControl from './BuilderControl/BuilderControl';
import Button from '../../UI/Button/Button';

const BuilderControls = props => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ]

  const renderedControls = controls.map((e, i) => {
    return <BuilderControl 
      label={e.label} 
      key={e.type} 
      type={e.type} 
      moreClicked={props.moreClicked} 
      lessClicked={() => props.lessClicked(e.type)} 
      disabled={props.disabledInfo[e.type]}/>
  });

  return (
    <div className={classes.BuilderControls}>
      <p className={classes.Price}>{`$${props.currentPrice}`}</p>
      {renderedControls}
      <Button 
      type="Brown"
      disabled={props.purchasable}
      clicked={props.ordered}>ORDER NOW</Button>
    </div>
  )
}

export default BuilderControls;
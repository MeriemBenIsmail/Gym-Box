import React from 'react';
import classes from './box.module.css';

export default function Box(props) {
  return (
      <div className={classes.box} style={{background:props.color,width:props.width,height:props.height}}></div>
  );
}

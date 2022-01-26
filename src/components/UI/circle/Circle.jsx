import React from 'react';
import classes from './circle.module.css';
export default function Circle(props) {
  return (
    <div className={classes.box} style={{width:props.width,height:props.height,transform:props.transform}}>

    </div>
    );
}

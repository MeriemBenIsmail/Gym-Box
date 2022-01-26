import React from 'react';
import classes from './detailBox.module.css';


export default function DetailBox(props) {
  return (
    
    <div className={classes.box}>
        <div className={classes.icon}>
            <i className={props.icon}></i>
        </div>
        <div className={classes.content}>
            <p>{props.content}</p>
        </div>

    </div>
    );
}

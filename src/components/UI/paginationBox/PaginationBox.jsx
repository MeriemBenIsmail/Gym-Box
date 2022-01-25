import React from 'react';
import classes from './paginationBox.module.css';

export default function PaginationBox(props) {
  

  return (
    <div  className={classes.box} style={{backgroundColor:props.color }}>
        <p>{props.content}</p>

    </div>
    );
}

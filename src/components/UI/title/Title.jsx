import React from 'react';
import classes from './title.module.css';

export default function Title(props) {
  
  const width = props.width;
 
        
      

 return <div>
     <div className={classes.title}>
      <h2>{props.title}</h2>
      <svg style={{width:width}}>
        <path d="M100,250 C100,250 310,251 311,251 Z" stroke="#DB8521"
              strokeWidth="6"
              fill="fill"/>
      </svg>
  </div>

 </div>
 ;
}

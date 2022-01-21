import React from 'react';
import classes from './button.module.css';
import { Link } from 'react-router-dom';
export default function Button(props) {
  return (
      
          <button><Link className={classes.link} to={props.link}>{props.content}</Link></button>
            
  );
}

import React from 'react';
import classes from './searchBox.module.css';

export default function SearchBox() {
 
   
  return (
    <div >
       <div className={classes.box}>
        <div className={classes.content}>
            <input type="text" placeholder='Search here ...' />
        </div>
        <div className={classes.icon}>
           <i class="fas fa-search"></i>
        </div>

        
    </div>
    </div>
   
  );
}

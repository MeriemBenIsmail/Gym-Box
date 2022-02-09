import React from 'react';
import classes from './header.module.css';

export default function Header() {
  return(
    <div className={classes.activities_header}>
        <div className={classes.time}></div>
        <div className={classes.spin}>Spinning</div>
        <div className={classes.fitness}>Fitness</div>
        <div className={classes.dance}>Dance</div>
        <div className={classes.wave}>Wave</div>
        <div className={classes.cross}>CrossTraining</div>
        <div className={classes.pool}>Pool</div>
  </div>
  );
}

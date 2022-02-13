import React from 'react';
import classes from './header.module.css';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden:{
    opacity:0,
    x:"200vh"
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      duration:1.5
    }
  }
}
export default function Header() {
  return(
    <motion.div variants={headerVariants} initial="hidden" animate="animate" className={classes.activities_header}>
        <div className={classes.time}></div>
        <div className={classes.spin}>Spinning</div>
        <div className={classes.fitness}>Fitness</div>
        <div className={classes.dance}>Dance</div>
        <div className={classes.wave}>Wave</div>
        <div className={classes.cross}>CrossTraining</div>
        <div className={classes.pool}>Pool</div>
  </motion.div>
  );
}

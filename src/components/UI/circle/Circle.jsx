import React from 'react';
import classes from './circle.module.css';
import { motion } from 'framer-motion';

const circleVariants = {
  animate:{
    opacity: ["0.5", "1"],
    transition: {
      type: "spring",
      duration: 2,
      yoyo: Infinity,
    },
  }
}
export default function Circle(props) {
  return (
    <motion.div variants={circleVariants} animate="animate" className={classes.box} style={{width:props.width,height:props.height,transform:props.transform,border:props.border}}>

    </motion.div>
    );
}

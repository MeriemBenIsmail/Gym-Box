import React from 'react';
import classes from './box.module.css';
import { motion } from 'framer-motion';

const boxVariants = {
  animate:{
    y: ["-5vh", "0vh"],
    transition: {
      type: "spring",
      duration: 2,
      yoyo: Infinity,
    },
  }
}

export default function Box(props) {
  return (
      <motion.div variants={boxVariants} animate="animate" className={classes.box} style={{background:props.color,width:props.width,height:props.height}}></motion.div>
  );
}

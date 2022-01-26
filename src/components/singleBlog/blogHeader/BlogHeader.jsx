import React from 'react';
import classes from './blogheader.module.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function BlogHeader(props) {
  
  const {ref, inView} = useInView({
    threshold: 0.2 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
      
        scale: 1.2,
        transition: {
          type: 'spring' , duration: 1.5,bounce: 0.6
        }
      });
    }
    if(!inView) {
      animation.start({scale:0.5,
      transition: {
        type: 'spring' , duration: 1.5,bounce: 0.6
      }
    })
    }
      
  },[inView]);

  return (
    <div className={classes.box}>
          <div ref={ref} className={classes.header}>
            <motion.h1 animate={animation} className={classes.title}>BLOGS</motion.h1>
          </div>
          <div className={classes.blog_box}>{props.title}</div>

    </div>
    
  );
}

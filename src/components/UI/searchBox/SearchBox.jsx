import React from 'react';
import classes from './searchBox.module.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function SearchBox() {
  const {ref, inView} = useInView({
    threshold: 0 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
      
        x:0,
        transition: {
          type: 'spring' , duration: 1.5,bounce: 0
        }
      });
    }
    if(!inView) {
      animation.start({x:"-100vw",
      transition: {
        type: 'spring' , duration: 1.5,bounce: 0
      }
    })
    }
      
  },[inView]);
  return (
    <div ref={ref}>
       <motion.div animate={animation} className={classes.box}>
        <div className={classes.content}>
            <input type="text" placeholder='Search here ...' />
        </div>
        <div className={classes.icon}>
           <i class="fas fa-search"></i>
        </div>

        
    </motion.div>
    </div>
   
  );
}

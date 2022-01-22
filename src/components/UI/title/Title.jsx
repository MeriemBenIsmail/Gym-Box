import React from 'react';
import classes from './title.module.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function Title(props) {
  
  const width = props.width;
  const {ref, inView} = useInView({
    threshold: 0.2 //20% should be visible
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

 return <div ref={ref}>
     <motion.div animate={animation} className={classes.title}>
      <h2>{props.title}</h2>
      <svg style={{width:width}}>
        <path d="M100,250 C100,250 310,251 311,251 Z" stroke="#DB8521"
              strokeWidth="6"
              fill="fill"/>
      </svg>
  </motion.div>

 </div>
 ;
}

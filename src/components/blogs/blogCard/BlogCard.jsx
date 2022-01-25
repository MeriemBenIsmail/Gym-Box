import React from 'react';
import classes from './blogCard.module.css';

import Button from '../../UI/button/Button';
import DateBox from '../dateBox/DateBox';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function BlogCard(props) {
  const {ref, inView} = useInView({
    threshold: 0.2//20% should be visible
  });
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
      
        x:0,
        scale: 1,
        transition: {
          type: 'spring' , duration: 1,bounce:-0.5
        }
      });
    }
    if(!inView) {
      animation.start({
      x:"100vw",
      scale: 0.3,
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView]);
  return (
    <div ref={ref}>
       <motion.div animate={animation} className={classes.card}>
        <div className={classes.img}>
          <div className={classes.date}>  <DateBox /></div>
         
          <img src={props.image} alt="" />

        </div>
        
        <div className={classes.content}>
          <h2 className={classes.title}>{props.title}</h2>
          <p className={classes.description}>{props.description}</p>

      
        
          <div className={classes.btn}>
            <Button content='Read More' link={"/blogs/"+props.link} />
          </div>

        </div>
        
       
      </motion.div>

    </div>
     
  );
}

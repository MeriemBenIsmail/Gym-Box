import React from 'react';
import classes from './blogCard.module.css';
import img from './gym7.jpg';
import Button from '../UI/button/Button';
import DateBox from '../dateBox/DateBox';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function BlogCard() {
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
         
          <img src={img} alt="" />

        </div>
        
        <div className={classes.content}>
          <h2 className={classes.title}>Lorem Lorem Lorem Lorem Lorem </h2>
          <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]</p>

      
        
          <div className={classes.btn}>
            <Button content='Read More' link="/blogs/blog1" />
          </div>

        </div>
        
       
      </motion.div>

    </div>
     
  );
}

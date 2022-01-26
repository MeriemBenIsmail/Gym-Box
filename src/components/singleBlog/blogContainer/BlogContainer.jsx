import React from 'react';
import Details from '../details/Details';
import classes from './blogContainer.module.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function BlogContainer(props) {
    const {ref, inView} = useInView({
        threshold: 0.2//20% should be visible
      });
      //ref : element that we want to monitor : when ref in view => inView =true , else false
      const animation = useAnimation();
      useEffect(() =>{
         
        // 3 hooks
        if(inView) {
          animation.start({
          
        
            scale: 1,
            transition: {
              type: 'spring' , duration: 1,bounce:-0.5
            }
          });
        }
        if(!inView) {
          animation.start({
         
          scale: 0.3,
          transition: {
            type: 'spring' , duration: 1,bounce: 0
          }
        })
        }
          
      },[inView]);
    
    
    return (
        <div ref={ref}>

        <motion.div animate={animation} className={classes.blog_container}>
            <div className={classes.img}>
                <img src={props.image} alt="" />
            </div>
            <div className={classes.details}>
                <Details date={props.date} owner={props.owner} cat={props.cat} />
                <hr />
            </div>
           
            <div className={classes.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores molestiae molestias deleniti odio temporibus quaerat delectus ullam dolore deserunt aut veniam voluptatum quis commodi quos, ea nobis eum in ipsam. Officia veritatis inventore iusto placeat recusandae in beatae iste aperiam adipisci. Corrupti quis consectetur ea ex ratione sit, fugiat dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur facere, eaque delectus exercitationem officiis sunt unde, repellendus possimus aspernatur rerum tempore est dolorum magnam optio amet inventore explicabo soluta. Soluta deleniti numquam corporis aliquam repudiandae! Laboriosam sapiente exercitationem debitis soluta expedita, quod tenetur voluptas, ea repellat molestias minus alias?</p>
                <hr />
            </div>
          
            <div className={classes.tags}>
                <h2>TAGS</h2>
                <p>{props.tags}</p>
            </div>
        </motion.div>
        </div>
    );
}

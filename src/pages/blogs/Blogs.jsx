import React from 'react';
import BlogCard from '../../components/blogCard/BlogCard';
import BlogHeader from '../../components/blogHeader/BlogHeader';
import Navbar from '../../components/layout/navbar/Navbar';
import classes from './blogs.module.css';
import Container from '../../components/layout/container/Container';
import SearchBox from '../../components/UI/searchBox/SearchBox';
import Title from '../../components/UI/title/Title';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function Blogs() {
  

  const {ref, inView} = useInView({
    threshold: 0//20% should be visible
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
   
      <Container>
         <div className={classes.blogs}>
          <Navbar />
            <BlogHeader />


            <div className={classes.section}>
              <div  style={{color:"white"}} className={classes.margin_section}>
                <div className={classes.search}>
                  <Title title="Search" width="200px" />
                  <SearchBox />

                </div>
                <div ref={ref} className={classes.search}>
                  <Title title="Catégories" width="260px"/>
                  <motion.div animate={animation}>
                    <h4 className={classes.cat}>Fitness</h4>
                    <hr />
                    <h4 className={classes.cat}>Gym</h4>

                  </motion.div>
                 

                </div>
                

              </div>
              <div className={classes.cards}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>

            </div>
            
           
          
      </div>

      </Container>
      

    
     
  );
}

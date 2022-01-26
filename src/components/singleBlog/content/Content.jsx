import classes from "./content.module.css";
import BlogContainer from "../blogContainer/BlogContainer";
import SearchBox from '../../UI/searchBox/SearchBox';
import Title from "../../UI/title/Title";
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Content = (props) => {
  
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
      x:"-100vw",
      scale: 0.3,
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView]);
  return (
    <div ref={ref} className={classes.contentContainer}>
      <motion.div animate={animation} className={classes.quote}>

          <div>
                  <Title title="Search" width="220px" />
                  <SearchBox />
          </div>
          <div>
                  <Title title="Catégories" width="290px"/>
                  <div>
                    <h4 className={classes.cat}>Fitness</h4>
                    <hr />
                    <h4 className={classes.cat}>Gym</h4>
                  </div>
          </div>
      </motion.div>
      <div>
        <BlogContainer tags={props.tags}  title={props.title} description={props.description} image={props.image} date={props.date} owner={props.owner} cat={props.cat} />

      </div>
      
    </div>
  );
};

export default Content;
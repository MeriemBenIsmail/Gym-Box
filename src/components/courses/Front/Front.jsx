import classes from "./Front.module.css";
import { motion } from "framer-motion";
import PhotoCollage from "../PhotoCollage/PhotoCollage";
const contentVariants = {
  hidden: {
      scale:0,zIndex:1,
  },
  visible:{
      scale:1,zIndex:1,
      transition: {
        type: "spring",
        bounce: 0.25,
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
  
  },
};
const Front = () => {
  return (
    <div className={classes.front}>
      <motion.div variants={contentVariants} initial="hidden" animate="visible" className={classes.content}>
        <motion.h1 variants={contentVariants}>We offer different courses</motion.h1>
        <motion.div variants={contentVariants} className={classes.details}>
          <motion.h3 variants={contentVariants}>Start swiping to see what we have to offer</motion.h3>
          <motion.ul variants={contentVariants}>
            <motion.li variants={contentVariants}>
            <i className="fas fa-solid fa-check"></i>
              <strong>13</strong> different courses
            </motion.li>
            <motion.li variants={contentVariants}>
            <i className="fas fa-solid fa-check"></i>
              <strong>13</strong> different courses
            </motion.li>
            <motion.li variants={contentVariants}>
            <i className="fas fa-solid fa-check"></i>
              <strong>13</strong> different courses
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <PhotoCollage></PhotoCollage>
    </div>
  );
};

export default Front;

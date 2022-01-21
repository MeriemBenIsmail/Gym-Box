
import classes from "./MainTitle.module.css"
import { motion } from "framer-motion";
const titleVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x:"0",
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
const MainTitle = (props) => {
  return <motion.h1 
  variants={titleVariants}
  initial="hidden"
  animate="visible"
  className={classes.mainTitle}>
      {props.children}
  </motion.h1>;
};

export default MainTitle;

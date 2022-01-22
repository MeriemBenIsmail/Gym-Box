import { motion } from "framer-motion";
import classes from "./MainParagraph.module.css";
const paragraphVariants = {
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
const MainParagraph = (props) => {
  return (
    <motion.p 
    variants={paragraphVariants}
    initial="hidden"
    animate="visible"
    className={classes.mainParagraph}>{props.children}</motion.p>
  );
};

export default MainParagraph;

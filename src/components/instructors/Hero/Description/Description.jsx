import classes from "./Description.module.css";
import { motion } from "framer-motion";
const descriptionVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const Description = () => {
  return (
    <div className={classes.heroDescriptionContainer}>
      <motion.div
        className={classes.heroDescription}
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={descriptionVariants}>
          Lorem ipsum dolor sit amet
        </motion.h1>
        <motion.p variants={descriptionVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Description;

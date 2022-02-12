import classes from "./Container.module.css";
import Circle from "../../UI/circle/Circle";
import Front from "../Front/Front";
import { motion } from "framer-motion";
import { useState } from "react";
const Container = () => {
  const [initial, setInitial] = useState("right");
  const [animate, setAnimate] = useState("left");
  const decorationVariants = {
    right: {
      x: "90vw",
      y:"10vh",
      rotate: -50,
    },
    left: {
      x: 0,
      rotate: 50,
      transition: {
        type: "spring",
        bounce: 0.25,
        stiffness: 100,
      },
    },
    top: {
      y: "-60vh",
      x: "5vh",
      rotate: 150,
      transition: {
        type: "spring",
        bounce: 0.25,
        stiffness: 100,
      },
    },
  };

  const handleScroll = (e) => {
    e.preventDefault();
    if (initial === "right") {
      setInitial("top");
      setAnimate("right");
    } else if (initial === "left") {
      setInitial("right");
      setAnimate("left");
    } else {
      setInitial("left");
      setAnimate("top");
    }
    e.preventDefault();
  };
  return (
    <div
      className={classes.courseContainer}
      onDragStart={(e) => {
        e.preventDefault();
      }}
      draggable="true"
      onDragStart={handleScroll}
    >
      <motion.div
        variants={decorationVariants}
        initial={animate}
        animate={initial}
        className={classes.decoration}
      >
        <Circle
          width="250px"
          border="10px solid #DB8521"
          height="300px"
        ></Circle>
      </motion.div>
      <Front></Front>
    </div>
  );
};

export default Container;

import classes from "./InstructorCard.module.css";
import { motion } from "framer-motion";
const InsructorCard = (props) => {
  const instructor = props.instructor;
  return (
    /*<div className={classes.instructorCard}>
      <div className={classes.blurCard}></div>
      <img src={"/assets/images/" + instructor.image} alt="" />

      <div className={classes.cardDescription}></div>
    </div>*/
    <div className={classes["flip-card"]}>
      <div className={classes["flip-card-inner"]}>
        <div className={classes["flip-card-front"]}>
          <img src={"/assets/images/" + instructor.image} alt="" />
          <div className={classes.cardDescription}>
            <div>
              <h3>{instructor.name}</h3>
              <p>{instructor.post}</p>
            </div>
          </div>
        </div>
        <div className={classes["flip-card-back"]}>
          <div className={classes.blurCard}></div>
          <img src={"/assets/images/" + instructor.image} alt="" />
          <div className={classes.cardDescription}>
            <h3>{instructor.name}</h3>
            <p>{instructor.post}</p>
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsructorCard;

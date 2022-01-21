import classes from "./InstructorCard.module.css";
const InsructorCard = (props) => {
    const instructor=props.instructor;
  return <div className={classes.instructorCard}>
      <div className={classes.blurCard}></div>
      <img src={"/assets/images/" +instructor.image} alt="" />
  </div>;
};

export default InsructorCard;

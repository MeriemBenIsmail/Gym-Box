import classes from "./ContentContainer.module.css";
import Instructors from "../Instructors/Instructors";
const ContentContainer = () => {
  return (
    <div className={classes.contentContainer}>
      <div className={classes.quote}>
        <p>
          “Les sites dont on vient de parler ne remplace pas Les sites dont on
          vient de parler ne remplace pas“
        </p>
      </div>
      <Instructors></Instructors>
    </div>
  );
};

export default ContentContainer;

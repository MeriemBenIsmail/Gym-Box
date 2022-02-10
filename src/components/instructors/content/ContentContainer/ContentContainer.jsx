import classes from "./ContentContainer.module.css";
import Instructors from "../Instructors/Instructors";
import { useState } from "react";
const ContentContainer = () => {
  const [hideQuote, setHideQuote] = useState(false);
  return (
    <div className={classes.contentContainer}>
      <div className={classes.quote}>
        {!hideQuote && (
          <p>
            “Les sites dont on vient de parler ne remplace pas Les sites dont on
            vient de parler ne remplace pas“
          </p>
        )}
      </div>
      <Instructors setHideQuote={setHideQuote}></Instructors>
    </div>
  );
};

export default ContentContainer;

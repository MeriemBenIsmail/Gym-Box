import classes from "./Instructors.module.css";
import InsructorCard from "../InstructorCard/InstructorCard";
const Instructors = (props) => {
    
  const instructors = [
      {
          id:"1",
          name:"Nawres Ncib",
          post:"Membre actif",
          phone:"97782808",
          description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
            ,image:"DSC00209.JPG"
      },{
        id:"2",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC_8675.JPG"
    },{
        id:"3",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC00126.JPG"
    },{
        id:"4",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC00209.JPG"
    },{
        id:"5",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC_8675.JPG"},{
        id:"6",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC00126.JPG"
    },{
        id:"7",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC00209.JPG"
    },{
        id:"8",
        name:"Nawres Ncib",
        post:"Membre actif",
        phone:"97782808",
        description:"Les sites dont on vient de parler ne remplace pas Les sites dont on vient de parler ne remplace pas"
          ,image:"DSC_8675.JPG"
    }];
  return <div className={classes.instructors}>
      {instructors.map(instructor=>{
          return <InsructorCard key={instructor.id} instructor={instructor} setHideQuote={props.setHideQuote}></InsructorCard>
      })}
  </div>;
};

export default Instructors;

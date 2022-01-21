import classes from "./Picture.module.css";
const Picture = (props) => {
  return (
    <div className={classes.picture}>
      <img src={props.src} alt="img" />
    </div>
  );
};

export default Picture;

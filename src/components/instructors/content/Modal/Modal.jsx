import classes from "./Modal.module.css";
const Modal = (props) => {
  const instructor = props.instructor;
  const showModal = props.showModal;
  return (
    <div
      onClick={props.hideHandler}
      className={`${showModal ? classes.modalContainer : classes.hiddenModal}`}
    >
      <div className={classes.space}>
          <p>About me</p>
          <p>Contact</p>
          <p>More</p>
      </div>
      <div className={classes.modal}>
        <div className={classes.details}>
          <div className={classes.head}>
            <h1>{instructor.name}</h1>
            <h2>{instructor.post}</h2>
          </div>
          <div className={classes.body}>
            <div className={classes.infos}>
              <p>{instructor.description}</p>
              <p>{instructor.phone}</p>
              <p>blablablablabal</p>
            </div>
          </div>
        </div>
        <div className={classes.image}>
        <img src={"/assets/images/" + instructor.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

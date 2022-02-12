import classes from "./InstructorCard.module.css";
import { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
const InsructorCard = (props) => {
  const instructor = props.instructor;
  const [showModal, setShowModal] = useState(null);
  const showHandler = () => {
    setShowModal(true);
    props.setHideQuote(true);
    document.body.style = "overflow:hidden;";
  };
  const hideHandler = () => {
    setShowModal(false);
    props.setHideQuote(false);
    document.body.style = "overflow:auto;";
  };
  return (
    /*
    Create another component for the modal and the backdrop 
    and make it so the click open a modal with the clicked instructor passes here in props
    {open && <Modal instructor={instructor}></Modal>}
    */

    <Fragment>
      <div className={classes["flip-card"]} onClick={showHandler}>
        {!showModal && (
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
        )}
      </div>
     {showModal!=null && <Modal
        showModal={showModal}
        hideHandler={hideHandler}
        instructor={instructor}
      ></Modal>}
    </Fragment>
  );
};

export default InsructorCard;

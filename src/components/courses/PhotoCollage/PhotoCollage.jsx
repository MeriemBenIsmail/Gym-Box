import { motion } from "framer-motion";
import classes from "./PhotoCollage.module.css";
const PhotoCollage = () => {
    const imageVariants = {
        hidden: {
            scale:0,zIndex:1,
        },
        visible:{
            scale:1,zIndex:1,
            transition: {
              type: "spring",
              bounce: 0.25,
              stiffness: 100,
              when: "beforeChildren",
              staggerChildren: 0.5,
            },
        
        },
      };
  return (
    <div className={classes.photoCollage}>
      <motion.div variants={imageVariants} animate="visible" initial="hidden" className={classes.images}>
        <motion.img variants={imageVariants} className={classes.img1} src="/assets/images/gym9.gif" alt="" />
        <motion.img variants={imageVariants}  className={classes.img2} src="/assets/images/gym10.jpg" alt="" />
        <motion.img variants={imageVariants}className={classes.img3} src="/assets/images/acceuil.gif" alt="" />
        <motion.img variants={imageVariants} className={classes.img4} src="/assets/images/gym1.jpg" alt="" />
        <motion.img variants={imageVariants}  className={classes.img5} src="/assets/images/gym11.jpg" alt="" />
      </motion.div>
    </div>
  );
};

export default PhotoCollage;

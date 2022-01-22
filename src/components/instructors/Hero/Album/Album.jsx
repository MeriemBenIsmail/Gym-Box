import classes from "./Album.module.css";
import Picture from "../Picture/Picture";
import { motion } from "framer-motion";
import { useState } from "react";
const albumVariants = {
  hover: {
    x: ["0vw", "-100vw","-100vw","0vw","0vw"],
    y: ["0vh", "-90vh","0vh","-90vh","0vh"],
    transition: {
      type: "spring",
      dampness:300,
      duration: 10,
      yoyo: Infinity,
    },
  },
};
const Album = () => {
  const pictures = ["DSC_8675.JPG", "DSC00126.JPG", "DSC00209.JPG"];
  var album = [];
  var album1 = [];
  var album2 = [];
  var album3 = [];
  var album4 = [];
  let i;
  for (i = 0; i < 80 / pictures.length; i++) {
    album = [...album, ...pictures];
  }
  for (i = 0; i < (80 % pictures.length) + 1; i++) {
    album = [...album, pictures[i]];
  }
  for (i = 0; i < (80 % pictures.length) + 1; i++) {
    album = [...album, pictures[i]];
  }
  for (i = 0; i < album.length + 1; i++) {
    if (i < 20) {
      album1 = [...album1, album[i]];
    } else if (i < 40) {
      album2 = [...album2, album[i]];
    } else if (i < 60) {
      album3 = [...album3, album[i]];
    } else if (i < 80) {
      album4 = [...album4, album[i]];
    }
  }
  const showAlbum = (album) => {
    return album.map((album) => {
      return <Picture src={"/assets/images/" + album}></Picture>;
    });
  };
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classes.hoverControl}
    >
      <motion.div
        animate={isHovered ? "hover" : ""}
        className={classes.albums}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{type:"tween",duration:1}}
        exit={{ opacity: 0 }}
      >
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album}
        >
          {showAlbum(album1)}
        </motion.div>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album+" "+classes.second}
        >
          {showAlbum(album2)}
        </motion.div>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album}
        >
          {showAlbum(album3)}
        </motion.div>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album+" "+classes.second}
        >
          {showAlbum(album4)}
        </motion.div>
      </motion.div>
      <motion.div animate={isHovered ? "hover" : ""} className={classes.albums}>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album}
        >
          {showAlbum(album1)}
        </motion.div>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album+" "+classes.second}
        >
          {showAlbum(album2)}
        </motion.div>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album}
        >
          {showAlbum(album3)}
        </motion.div>
        <motion.div
          variants={albumVariants}
          animate={isHovered ? "hover" : ""}
          className={classes.album+" "+classes.second}
        >
          {showAlbum(album4)}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Album;

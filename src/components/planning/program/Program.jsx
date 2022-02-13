import React from 'react';
import classes from './program.module.css';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const containerVariants = {
    hidden:{
        opacity:0,
        x:"100vw"

    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            type:"spring",
            mass:0.4,
            damping:8,
            when:"beforeChildren",
            staggerChildren:0.4,
            delay:0.8
        }

    },

}
const childrenVariants = {
    hidden:{
        opacity:0,
        scale:0.8
    },
    animate:{
        opacity:1,
        scale:1
    },
   
}
const boxVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
          duration: 0.3,
          yoyo: Infinity
        }
      }
}

export default function Program(props) {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('animate');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

    return(
    <div className={classes.content}>

        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="animate"  className={classes.row}>
                <motion.div exit={{x:"-100vw"}} variants={childrenVariants} className={classes.col_time}>{props.prog}</motion.div>
                <motion.div variants={childrenVariants} className={classes.col} style={{background:"#FB4570"}}>
                    <motion.div variants={boxVariants} whileHover="hover" className={classes.col} style={{background:"#FB4570"}}>
                        <div className={classes.icon}><i className={ props.getProg(props.prog,"spinning",props.jour)[1]}></i> </div>
                        <div className={classes.activity}>{ props.getProg(props.prog,"spinning",props.jour)[0]}</div>
                    </motion.div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#DB8521"}}>
                    <motion.div variants={boxVariants} whileHover="hover" className={classes.col} style={{background:"#DB8521"}} >
                        <div className={classes.icon}><i className={ props.getProg(props.prog,"fitness",props.jour)[1]}></i> </div>
                        <div className={classes.activity}>{ props.getProg(props.prog,"fitness",props.jour)[0]}</div>
                    </motion.div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#D8A7B1"}}>
                   <motion.div variants={boxVariants} whileHover="hover"  className={classes.col} style={{background:"#D8A7B1"}} >
                        <div className={classes.icon}><i className={ props.getProg(props.prog,"dance",props.jour)[1]}></i> </div>
                        <div className={classes.activity}>{ props.getProg(props.prog,"dance",props.jour)[0]}</div>
                    </motion.div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#EF7C8E"}}>
                    <motion.div variants={boxVariants} whileHover="hover" className={classes.col} style={{background:"#EF7C8E"}} >
                        <div className={classes.icon}><i className={ props.getProg(props.prog,"wave",props.jour)[1]}></i> </div>
                        <div className={classes.activity}>{ props.getProg(props.prog,"wave",props.jour)[0]}</div>
                    </motion.div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#75E6DA"}}>
                    <motion.div variants={boxVariants} whileHover="hover" className={classes.col} style={{background:"#75E6DA"}} >
                        <div className={classes.icon}><i className={ props.getProg(props.prog,"cross",props.jour)[1]}></i> </div>
                        <div className={classes.activity}>{ props.getProg(props.prog,"cross",props.jour)[0]}</div>
                    </motion.div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#189AB4"}}>
                    <motion.div variants={boxVariants} whileHover="hover" className={classes.col} style={{background:"#189AB4"}}>
                        <div className={classes.icon}><i className={ props.getProg(props.prog,"pool",props.jour)[1]}></i> </div>
                        <div className={classes.activity}>{ props.getProg(props.prog,"pool",props.jour)[0]}</div>
                    </motion.div>
                </motion.div>
                
            </motion.div>
        </AnimatePresence>
    </div>
   
  );
}

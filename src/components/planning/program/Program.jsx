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
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#FB4570"}}>
                    
                    <div className={classes.icon}>
                         
                 </div>
                    <div className={classes.activity}>{ props.getProg(props.prog,"spinning",props.jour)}</div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#DB8521"}}>
                <svg style={{width:"30px",height:"30px",margin:"7px 0 6px 3px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path style={{fill:"#1b1b1e"}} d="M25 26h14v4H25zM23 20h-3v16h3zM15 23v10h3V23zM10 26h3v4h-3z"/><path d="M57 7H7a5.006 5.006 0 0 0-5 5v32a5.006 5.006 0 0 0 5 5h17.546l6.702 7.658a.999.999 0 0 0 1.504 0L39.454 49H57a5.006 5.006 0 0 0 5-5V12a5.006 5.006 0 0 0-5-5zm-1 24a1 1 0 0 1-1 1h-4v2a1 1 0 0 1-1 1h-4v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5H25v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2h-4a1 1 0 0 1-1-1v-2H9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4v-2a1 1 0 0 1 1-1h4v-2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5h14v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1z" style={{fill:"#1b1b1e"}}/><path d="M44 20h-3v16h3V20zM51 26h3v4h-3zM49 23h-3v10h3z" style={{fill:"#1b1b1e"}}/></svg>
                    <div className={classes.activity}>{ props.getProg(props.prog,"fitness",props.jour)}</div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#D8A7B1"}}>
                    <div className={classes.icon}>i</div>
                    <div className={classes.activity}>{ props.getProg(props.prog,"dance",props.jour)}</div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#EF7C8E"}}>
                    <div className={classes.icon}>i</div>
                    <div className={classes.activity}>{ props.getProg(props.prog,"wave",props.jour)}</div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#75E6DA"}}>
                    <div className={classes.icon}>i</div>
                    <div className={classes.activity}>{ props.getProg(props.prog,"cross",props.jour)}</div>
                </motion.div>
                <motion.div variants={childrenVariants}  className={classes.col} style={{background:"#189AB4"}}>
                    <div className={classes.icon}>i</div>
                    <div className={classes.activity}>{ props.getProg(props.prog,"pool",props.jour)}</div>
                </motion.div>
                
            </motion.div>
        </AnimatePresence>
    </div>
   
  );
}

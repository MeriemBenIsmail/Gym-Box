import React from 'react';
import classes from './program.module.css';
import { motion } from 'framer-motion';


export default function Program(props) {
  return(
    <div  className={classes.content}>
            <div  className={classes.row}>
            <div className={classes.col_time}>{props.prog}</div>
            <div className={classes.col} style={{background:"#FB4570"}}>
                
                <div className={classes.icon}>i</div>
                <div className={classes.activity}>{ props.getProg(props.prog,"spinning")}</div>
            </div>
            <div className={classes.col} style={{background:"#DB8521"}}>
                <div className={classes.icon}>i</div>
                <div className={classes.activity}>{ props.getProg(props.prog,"fitness")}</div>
            </div>
            <div className={classes.col} style={{background:"#D8A7B1"}}>
                <div className={classes.icon}>i</div>
                <div className={classes.activity}>{ props.getProg(props.prog,"dance")}</div>
            </div>
            <div className={classes.col} style={{background:"#EF7C8E"}}>
                <div className={classes.icon}>i</div>
                <div className={classes.activity}>{ props.getProg(props.prog,"wave")}</div>
            </div>
            <div className={classes.col} style={{background:"#75E6DA"}}>
                <div className={classes.icon}>i</div>
                <div className={classes.activity}>{ props.getProg(props.prog,"cross")}</div>
            </div>
            <div className={classes.col} style={{background:"#189AB4"}}>
                <div className={classes.icon}>i</div>
                <div className={classes.activity}>{ props.getProg(props.prog,"pool")}</div>
            </div>
        </div>
    </div>
   
  );
}
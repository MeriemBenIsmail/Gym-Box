import React from 'react';
import classes from './container.module.css';
import { useState } from 'react';
import  lundi  from '../../../dummyData/planningLundi.json';
import Header from '../header/Header';
import Program from '../program/Program';
export default function Container() {
 

  const timeTable1 = ["08:30","09:30","10:30","11:30","12:30","13:30","14:30"]
  const timeTable2 = ["15:30","16:30","17:30","18:30","19:30","20:30"]
  const [isToggled, setIsToggled] = useState(true);
 
  const getProg = (time,cat) => {

    const prog = lundi.filter((prog) => {
      return prog.time === time && prog.category === cat
    })
    if (prog[0]) {
      return prog[0].name
    } else return ""
  }
 
  return (
        <div className={classes.planning_container}>
          <div className={classes.date}>
            <h2>Lundi</h2> 
            <div className={classes.jour}>
            <p>2022</p>
            <p> Février</p>
            <p>07</p>
            </div>
          </div>
          <div className={classes.planning}>
            <Header />
            <div className={classes.content} >
              {
                isToggled ?
                  timeTable1.map((prog) => {
                    return (
                     <Program prog={prog} getProg={getProg}/>

                    )  
                }) : 
                 timeTable2.map((prog) => {
                  return (
                      <Program prog={prog} getProg={getProg}/>

                  )  
              })
              
              }
 
            </div>
            <div onClick={ () => setIsToggled(!isToggled) }>scroll</div>
          </div>
        </div>
    );
}

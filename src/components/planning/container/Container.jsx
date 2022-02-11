import React from 'react';
import classes from './container.module.css';
import { useState } from 'react';
import  lundi  from '../../../dummyData/planningLundi.json';
import  mardi  from '../../../dummyData/planningMardi.json';
import  mercredi from '../../../dummyData/planningMardi.json';
import  jeudi  from '../../../dummyData/planningMardi.json';
import  vendredi  from '../../../dummyData/planningMardi.json';
import  samedi  from '../../../dummyData/planningMardi.json';
import  dimanche  from '../../../dummyData/planningMardi.json';
import Header from '../header/Header';
import Program from '../program/Program';
export default function Container() {
 

  const timeTable1 = ["08:30","09:30","10:30","11:30","12:30","13:30","14:30"];
  const timeTable2 = ["15:30","16:30","17:30","18:30","19:30","20:30"];
  const semaine = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  const semaineTable = [lundi,mardi,mercredi,jeudi,vendredi,samedi,dimanche];
  const [isToggled, setIsToggled] = useState(true);
  const [jour,setJour] = useState("Lundi");
  const [progTable,setProgTable] = useState(lundi);

  const nextDay = () => {
    if ( semaine.indexOf(jour) === 6) {
      setJour(semaine[0]);
      setProgTable(semaineTable[0]);
    } else {
      setJour(semaine[semaine.indexOf(jour) + 1]);
      setProgTable(semaineTable[semaineTable.indexOf(progTable) + 1])
    }
    
  }
  const getProg = (time,cat,jourj) => {

    const prog = jourj.filter((prog) => {
      return prog.time === time && prog.category === cat
    })
    if (prog[0]) {
      return prog[0].name
    } else return ""
  }
 
 
  return (
        <div className={classes.planning_container}>
          
          <div className={classes.date}>
          
            <div className={classes.jour}>
            <h2>{jour}</h2> 
            
            <div>
              <p>2022</p>
              <p>Février</p>
              <p>07</p>
            </div>
            </div>
          </div>
          <div className={classes.planning}>
            <Header />
            <div className={classes.content} >
              {
                isToggled ?
                  timeTable1.map((prog) => {
                    return (
                     <Program jour={progTable} prog={prog} getProg={getProg}/>

                    )  
                }) : 
                 timeTable2.map((prog) => {
                  return (
                      <Program jour={progTable} prog={prog} getProg={getProg}/>
                  )  
              })
              
              }
 
            </div>
            <div onClick={ () => setIsToggled(!isToggled) }>scroll</div>
            <div onClick={nextDay}>next day</div>
          </div>
        </div>
    );
}

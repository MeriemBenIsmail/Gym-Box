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
  const [planning1,setPlanning1] = useState(true);
  const [planning2,setPlanning2] = useState(false);
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
  const previousDay = () => {
    if ( semaine.indexOf(jour) === 0) {
      setJour(semaine[6]);
      setProgTable(semaineTable[6]);
    } else {
      setJour(semaine[semaine.indexOf(jour) - 1]);
      setProgTable(semaineTable[semaineTable.indexOf(progTable) - 1])
    }
  }
  const handleClick = () => {
    if(planning1) {
      setPlanning1(false);
      setPlanning2(true);
    } else {
      setPlanning1(true);
      setPlanning2(false);
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
          <div onClick={previousDay}><i className="fas fa-arrow-alt-up"></i></div>
            <div className={classes.jour}>
                
                <h2>{jour}</h2> 

                <div className={classes.detail_date}>
                  <p>7</p>
                  <p>Février</p>
                  <p>2022</p>
                </div>
                
                
            </div>
            <div onClick={nextDay} ><i className="fas fa-arrow-alt-down"></i></div>
            
          </div>
          <div className={classes.planning}>
            <Header />
            <div 
              
            className={classes.content} >
              {
                planning1 &&
                  timeTable1.map((prog) => {
                    return (
                    
                        <Program jour={progTable} prog={prog} getProg={getProg}/>
                     
                     
                     

                    )  
                })  }
                { planning2 &&  
                 timeTable2.map((prog) => {
                  return (
                   
                      <Program jour={progTable} prog={prog} getProg={getProg}/>
                  
                  )  
              })
              
              }
 
            </div>

            <div onClick={handleClick} className={classes.scrolldown}>
              <span></span>
              <span></span>
              <span></span>
            </div>
           </div>
            
        </div>
    );
}

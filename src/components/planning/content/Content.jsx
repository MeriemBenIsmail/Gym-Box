import React from 'react';
import Box from '../../UI/box/Box';
import Circle from '../../UI/circle/Circle';
import classes from './content.module.css';
import Container from '../container/Container';
export default function Content() {
  
  return (
    <div className={classes.content_container}>
        <div className={classes.deco1}>
            <div className={classes.circle1}>
                <Circle width="153px" height="181.87px" transform="rotate(23.59deg)" />
            </div>
            <div className={classes.box1}>
                <Box color="#DEC09D" width="42px" height="42px"/>
            </div>
        </div>
        <div className={classes.planning_container}>
            <Container />
        </div>
        <div className={classes.circle2}>
            <Circle width="216px" height="192.53px" transform="matrix(-0.92, -0.4, -0.4, 0.92, 0, 0)" />
        </div>
       
        

     
    </div>
    );
}

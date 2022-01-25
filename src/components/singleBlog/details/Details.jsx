import React from 'react';
import classes from './details.module.css';
import DetailBox from '../detailBox/DetailBox';

export default function Details(props) {
  return (
    <div className={classes.box_container}>
         <DetailBox icon="fas fa-calendar-week" content = {props.date} />
         <DetailBox icon="fas fa-user-alt" content = {props.owner} /> 
         <DetailBox icon="fad fa-window" content = {props.cat} />
         <DetailBox icon="fas fa-comments" content = "Comments" />

    </div>
    );
}

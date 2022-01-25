import React from 'react';
import classes from './pagination.module.css';
import PaginationBox from '../paginationBox/PaginationBox';
export default function Pagination(props) {
  return (
    <div className={classes.box_container}>
       <PaginationBox click={props.open1} color="#8E8E8E" content="1"/>
       <PaginationBox click={props.open2} color="#DB8521" content="2"/>
       <PaginationBox click={props.open3} color="#DB8521" content="3"/>
       <PaginationBox  color="#DB8521" content=">>"/>

    </div>
     );
}

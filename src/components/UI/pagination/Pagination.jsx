import React from 'react';
import classes from './pagination.module.css';
import PaginationBox from '../paginationBox/PaginationBox';
export default function Pagination() {
  return (
    <div className={classes.box_container}>
       <PaginationBox color="#8E8E8E" content="1"/>
       <PaginationBox color="#DB8521" content="2"/>
       <PaginationBox color="#DB8521" content="3"/>
       <PaginationBox color="#DB8521" content=">>"/>

    </div>
     );
}

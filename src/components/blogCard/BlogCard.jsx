import React from 'react';
import classes from './blogCard.module.css';
import img from './gym7.jpg';
import Button from '../button/Button';
import DateBox from '../dateBox/DateBox';

export default function BlogCard() {
  return (
      <div className={classes.card}>
        <div className={classes.img}>
          <div className={classes.date}>  <DateBox /></div>
         
         <img src={img} alt="" />

        </div>
        
        <div className={classes.content}>
          <h2 className={classes.title}>Lorem Lorem Lorem Lorem Lorem </h2>
          <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]</p>

      
        
          <div className={classes.btn}>
            <Button content='Read More' link="/blogs/blog1" />
          </div>

        </div>
        
       
      </div>
  );
}

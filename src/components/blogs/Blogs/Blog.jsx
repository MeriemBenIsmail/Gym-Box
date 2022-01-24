import React, { useEffect } from 'react';
import BlogCard from '../blogCard/BlogCard';
import classes from './blog.module.css';
import img1 from '../../../pages/blogs/gym7.jpg';
import img2 from '../../../pages/blogs/gym8.jpg';
import img3 from '../../../pages/blogs/gym9.gif';
import img4 from '../../../pages/blogs/gym10.jpg';
import Pagination from '../../UI/pagination/Pagination';
import PaginationBox from '../../UI/paginationBox/PaginationBox';
import { useState } from 'react';
export default function Blog() {

      const [blog1IsOpen,setBlog1IsOpen] = useState(true);
      const [blog2IsOpen,setBlog2IsOpen] = useState(false);
      const [blog3IsOpen,setBlog3IsOpen] = useState(false);
      const colorActive = "#DB8521";
      const colorNormal = "#8E8E8E";
      const [color1,setColor1] = useState(colorActive);
      const [color2,setColor2] = useState(colorNormal);
      const [color3,setColor3] = useState(colorNormal);

      const handleClick1 = () => {
        setBlog1IsOpen(true);
        setColor1(colorActive);
        setBlog2IsOpen(false);
        setColor2(colorNormal);
        setBlog3IsOpen(false);
        setColor3(colorNormal);
        window.scroll(0,690);
        
        

      }
      const handleClick2 = () => {
        setBlog2IsOpen(true);
        setColor2(colorActive);
        setBlog1IsOpen(false);
        setColor1(colorNormal);
        setBlog3IsOpen(false);
        setColor3(colorNormal);
        window.scroll(0,690);
        
      }
      const handleClick3 = () => {
        setBlog3IsOpen(true);
        setColor3(colorActive);
        setBlog2IsOpen(false);
        setColor2(colorNormal);
        setBlog1IsOpen(false);
        setColor1(colorNormal);
        window.scroll(0,680);
        
      }

      const blogs1 = [
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img1
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img2
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img3
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img4
        }
      ]
      const blogs2 = [
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img4
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img1
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img2
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img3
        }
      ]
      const blogs3 = [
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img2
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img1
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img4
        },
        {
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img3
        }
      ]
     
    

    return (
    <div className={classes.blog_container}>

       <div className={classes.cards}>
     
                {  (blog1IsOpen) && blogs1.map((val,key) =>{
                  return(
                    <BlogCard title={val.title} description={val.description} image={val.image}/>
                  )
                }) }
                 {  (blog2IsOpen) && blogs2.map((val,key) =>{
                  return(
                    <BlogCard title={val.title} description={val.description} image={val.image}/>
                  )
                }) }
                 {  (blog3IsOpen) && blogs3.map((val,key) =>{
                  return(
                    <BlogCard title={val.title} description={val.description} image={val.image}/>
                  )
                }) }
             
              
            
      </div>
      <div className={classes.pagination}>
        <div className={classes.box_container}>
          <div onClick={handleClick1}><PaginationBox  color={color1} content="1"/></div>
          <div onClick={handleClick2}><PaginationBox  color={color2} content="2"/></div>
          <div onClick={handleClick3}><PaginationBox  color={color3} content="3"/></div>
          <div><PaginationBox  color="#DB8521" content=">>"/></div>
        

        </div>

      </div>
     
    </div>
   
    );
}

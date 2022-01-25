import React from 'react';
import BlogCard from '../blogCard/BlogCard';
import classes from './blog.module.css';
import img1 from '../../../pages/blogs/gym7.jpg';
import img2 from '../../../pages/blogs/gym8.jpg';
import img3 from '../../../pages/blogs/gym9.gif';
import img4 from '../../../pages/blogs/gym10.jpg';
import Pagination from '../../UI/pagination/Pagination';
export default function Blog() {
    const blogs = [
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
  
    return (
    <div className={classes.blog_container}>
       <div className={classes.cards}>
                { blogs.map((val,key) =>{
                  return(
                    <BlogCard title={val.title} description={val.description} image={val.image}/>
                  )
                }) }
            
      </div>
      <div className={classes.pagination}><Pagination /></div>
    </div>
   
    );
}

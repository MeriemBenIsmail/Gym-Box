import React from 'react';
import BlogHeader from '../../components/blogs/blogHeader/BlogHeader';
import Navbar from '../../components/layout/navbar/Navbar';
import classes from './blogs.module.css';
import Container from '../../components/layout/container/Container';
import Content from '../../components/blogs/content/Content';
import CustomCursor from "../../components/UI/customCursor/CustomCursor";
import CustomCursorManager from "../../components/UI/customCursor/context/manager.tsx";
export default function Blogs() {


  return (
   
      <Container>
         <div className={classes.blogs}>
          <Navbar />
          <BlogHeader />  
          <Content /> 
         
          
         </div>

      </Container>
      

    
     
  );
}

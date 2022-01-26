import React from 'react';
import BlogHeader from '../../components/blogs/blogHeader/BlogHeader';
import Navbar from '../../components/layout/navbar/Navbar';
import Container from '../../components/layout/container/Container';
import Content from '../../components/blogs/content/Content';

export default function Blogs() {


  return (
   
      <Container>
         <div>
         <Navbar logo_color="#ffff" background="#000" link_color="#ffff" />
          <BlogHeader />  
          <Content /> 
         
          
         </div>

      </Container>
      

    
     
  );
}

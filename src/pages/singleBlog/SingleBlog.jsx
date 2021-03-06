import React from 'react';
import { useParams } from "react-router";
import img1 from '../blogs/gym7.jpg'
import img2 from '../blogs/gym8.jpg';
import img3 from '../blogs/gym9.gif';
import img4 from '../blogs/gym10.jpg';
import Content from '../../components/singleBlog/content/Content';
import Container from '../../components/layout/container/Container';
import Navbar from '../../components/layout/navbar/Navbar';
import BlogHeader from '../../components/singleBlog/blogHeader/BlogHeader';

export default function SingleBlog() {
    
      const blogs1 = [
        {
          id:1,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img1,
          date:"June 5 , 2021",
          owner:"FoulenX",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        },
        {
          id:2,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img2,
          date:"July 20 , 2021",
          owner:"FoulenY",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        },
        {
          id:3,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img3,
          date:"June 14 , 2022",
          owner:"FoulenZ",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        },
        {
          id:4,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img4,
          date:"January 5 , 2021",
          owner:"FoulenT",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        }
      ]
      const blogs2 = [
        {
          id:5,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img4,
          date:"June 5 , 2021",
          owner:"FoulenX",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        },
        {
          id:6,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img1,
          date:"June 5 , 2021",
          owner:"FoulenX",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        },
        {
          id:7,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img2,
          date:"June 5 , 2021",
          owner:"FoulenX",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        },
        {
          id:8,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img3,
          date:"June 5 , 2021",
          owner:"FoulenX",
          cat:"Fitness,Gym",
          tags:"Piscine,Natation",
          subject:"Bénifices de la natation , coach , entraineur blablabla"
        }
      ]
      const blogs3 = [
        {
          id:9,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img2
        },
        {
          id:10,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img1
        },
        {
          id:11,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img4
        },
        {
          id:12,
          title:"Lorem Lorem Lorem Lorem Lorem",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi explicabo molestias perferendis rerum vitae earum fugiat consequuntur nostrum consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit. Non nobis at eligendi quis totam voluptas eum aspernatur sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos magni a consequatur officia distinctio laborum molestiae debitis sint quidem. [...]",
          image:img3
        }
      ]
      const { id } = useParams();
      let blog = {};
      const getBlog = () => {
        if(id <= 4) {
            blog = blogs1[id-1];
        } else if (4 < id <=8) {
            blog = blogs2[id-5];
        } else if (id > 8) {
            blog = blogs3[id-9];
        }
      }
       {getBlog()}

       window.scroll(0,0);
      
  
    return <div>
      <Container>
         <div>
         <Navbar logo_color="#ffff" background="#000" link_color="#ffff" />
            <BlogHeader title={blog.subject} />
            <Content tags={blog.tags} date={blog.date} owner={blog.owner} cat={blog.cat}  title={blog.title} description={blog.description} image={blog.image} link={blog.id}/>  
         </div>
      </Container>
      
      
    </div>;
}

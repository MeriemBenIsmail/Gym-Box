import React from 'react';
import BlogCard from '../../components/blogCard/BlogCard';
import BlogHeader from '../../components/blogHeader/BlogHeader';
import Navbar from '../../components/navbar/Navbar';
import classes from './blogs.module.css';

export default function Blogs() {
  return (
      <div>
          <Navbar />
          <BlogHeader />
          <BlogCard />

      </div>
  );
}

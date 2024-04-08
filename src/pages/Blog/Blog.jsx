import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../../config/data';

const Blog = () => {
 const {id}= useParams();
 const [blog,setBlog]=useState(null);
 useEffect(()=>{
  const newblog=blogList.find(blog=>blog.id===parseInt(id));
  if(blog){
    setBlog(newblog)
  }
 },[blog]);
  return (
    <div>Blog</div>
  )
}

export default Blog
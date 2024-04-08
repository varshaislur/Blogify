import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import './Blog.css'
import Chip from '../../components/Chip/Chip';

const Blog = () => {
 const {id}= useParams();
 const [blog,setBlog]=useState(null);
 useEffect(()=>{
  const newblog=blogList.find(blog=>blog.id===parseInt(id));
  if(newblog){
    setBlog(newblog);
  }
 },[id]);
  return (
    <div className='blog-wrap'>


   
   {blog ?(
   <div>
    <header >
      {blog.title}
    </header>
    <span>
    {blog.subCategory.map((subCategory,index)=><div><Chip key={index} label={subCategory} /></div>)}
    </span>
    <span>
    <img src={blog.cover} />
    </span>
    <p>
      {blog.description}
    </p>
   
   </div>)
   : null}
    </div>
    
  )
}

export default Blog
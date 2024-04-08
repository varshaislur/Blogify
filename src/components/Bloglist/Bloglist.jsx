import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './Bloglist.css'

const Bloglist = ({blogs}) => {
  return (
    <div className='blogList-wrap'>
        {blogs.map((blog)=>
        <BlogItem blog={blog} key={blog.id}/>)}
    </div>
  )
}

export default Bloglist
import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import Bloglist from '../../components/Bloglist/Bloglist'
import { blogList } from '../../config/data'

const HomePage = () => {
  return (
    <div >
        <Header/>
        <SearchBar value=""/>
        <Bloglist blogs={blogList}/>
    </div>
  )
}

export default HomePage
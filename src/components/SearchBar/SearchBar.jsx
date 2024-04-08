import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleSubmit,value,handleSearchKey,clearSearch}) => {
  return (
    <div className='search-wrapper'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='search blogs' value={value} onChange={handleSearchKey}/>
            {value ? <span onClick={clearSearch}>X</span> : null}

            <button>search</button>

        </form>
    </div>
  )
}

export default SearchBar
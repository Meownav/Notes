import React from 'react'

const SearchBar = ({ handleSearch }) => {
  return (
    <div className='SearchBar flex mx-8  py-12'>
      <input className='searchbar w-full rounded-full py-2 text-center bg-slate-100' type="text" placeholder='Type to search...'
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
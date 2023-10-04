import React from 'react'

const SearchBar = () => {
  return (
      <form className='mt-10'>
          <input
              type="text"
              name="name"
              placeholder='Search...'
              className="p-3 bg-[#171717] border border-[#C0A080] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0A080] focus:border-[#C0A080] transition-colors"
          />
    </form>
  )
}

export default SearchBar
'use client'

import SearchBar from "./SearchBar"

import React, { useEffect, useState } from 'react';


const NavBar = () => {


  //   const [allLocations, setAllLocations] = useState([])


  // const useEffect(() => {
    
  // }, [])

  return (
      <div className=" grid justify-items-center">
          <h1 className='font-sans text-3xl text-[#C0A080] pt-2 font-normal'>Establishments</h1>
          <SearchBar />
    </div>
  )
}

export default NavBar
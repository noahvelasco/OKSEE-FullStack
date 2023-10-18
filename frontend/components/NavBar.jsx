"use client";

import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import LocationList from "./LocationList";

const NavBar = ({ locations, pressedPizza, pressedBurger, pressedCoffee }) => {
  const [searchValue, setSearchValue] = useState(""); //used when user is using searchbar along with the other button filters

  return (
    <div className="flex flex-col max-h-screen  items-center">
      <h1 className="font-sans text-3xl text-[#C0A080] pt-2 font-normal">
        Establishments
      </h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <LocationList
        locations={locations}
        searchValue={searchValue}
        pressedPizza={pressedPizza}
        pressedBurger={pressedBurger}
        pressedCoffee={pressedCoffee}
      />
    </div>
  );
};

export default NavBar;

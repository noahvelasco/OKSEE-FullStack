'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LocationItem from './LocationItem';
import SelectedLocationModal from './SelectedLocationModal'


const LocationItemMemo = React.memo(LocationItem);

const LocationList = ({
  locations,
  searchValue,
  pressedPizza,
  pressedBurger,
  pressedCoffee
}) => {

  //used for filtering mechanism based on props
  const [filters, setFilters] = useState({
    pizzaFilter: pressedPizza,
    burgersFilter: pressedBurger,
    cafeFilter: pressedCoffee,
  });

  //
  useEffect(() => {
    setFilters({
      pizzaFilter: pressedPizza,
      burgersFilter: pressedBurger,
      cafeFilter: pressedCoffee,
    });
  }, [pressedPizza, pressedBurger, pressedCoffee, searchValue]);

  //used for 'birds eye view'
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedLocName, setSelectedLocName] = useState("");
  const [selectedLocRating, setSelectedLocRating] = useState("");
  const [selectedLocAddress, setSelectedLocAddress] = useState("");


  const [selectedLocLat, setSelectedLocLat] = useState(35.4676);
  const [selectedLocLng, setSelectedLocLng] = useState(-97.5164);

  const setFiltersArray = useMemo(() => {
    return Object.keys(filters).filter((key) => filters[key] === true);
  }, [filters]);

  const renderItem = useCallback(
    (item) => {
      if (
        setFiltersArray.includes(item.associatedFilter) &&
        (searchValue === "" ||
          item.title.substring(0, searchValue.length).toLowerCase() ===
            searchValue.toLowerCase())
      ) {
        return (
          <LocationItemMemo
            key={item.id}
            category={item.category}
            title={item.title}
            rating={item.rating}
            hours={item.hours}
            
            address={item.address}
            serviceOptions={item.serviceOptions}
            thumbnail={item.thumbnail}

            setSelectedLocLat={setSelectedLocLat}
            setSelectedLocLng={setSelectedLocLng}
            lat={item.latitude}
            lng={item.longitude}
            
            setSelectedLocName={setSelectedLocName}
            setSelectedLocRating={setSelectedLocRating}
            setSelectedLocAddress={setSelectedLocAddress}
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
          />
        );
      }
      return null; // Ensure to return null if condition is not met
    },
    [searchValue, setFiltersArray, modalVisibility]
  );

  return (
    <div className='location-list'>
      {locations.map((item) => renderItem(item))}


      
        <SelectedLocationModal
        title={selectedLocName}
        rating={selectedLocRating}
        address={selectedLocAddress}
        coords={[selectedLocLat, selectedLocLng]}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}        
/>

    </div>

  );
};

export default LocationList;

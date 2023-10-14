'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LocationItem from './LocationItem';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocCoords, setSelectedLocCoords] = useState([]);
  const [selectedLocName, setSelectedLocName] = useState("");
  const [selectedLocRating, setSelectedLocRating] = useState("");
  const [selectedLocAddress, setSelectedLocAddress] = useState("");

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
            coords={[item.latitude,item.longitude]}
            address={item.address}
            serviceOptions={item.serviceOptions}
            thumbnail={item.thumbnail}
            setSelectedLocCoords={setSelectedLocCoords}
            setSelectedLocName={setSelectedLocName}
            setSelectedLocRating={setSelectedLocRating}
            setSelectedLocAddress={setSelectedLocAddress}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        );
      }
      return null; // Ensure to return null if condition is not met
    },
    [searchValue, setFiltersArray, modalVisible]
  );

  return (
    <div className='location-list'>
      {locations.map((item) => renderItem(item))}
    </div>
  );
};

export default LocationList;

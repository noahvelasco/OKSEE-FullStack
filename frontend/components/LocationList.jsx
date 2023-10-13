'use client'

import React, {useState} from 'react'

import LocationItem from './LocationItem'

const LocationList = ({
    locations,
    searchValue,
    pressedPizza,
    pressedBurger,
    pressedCoffee

}) => {


  return (
      <div className='location-list'>
        {locations.map(item => (
            <div key={item.id}>

        
            <LocationItem
              category={item.category}
              title={item.title}
              rating={item.rating}
              hours={item.hours}
              coords={[item.latitude, item.longitude]}
              address={item.address}
              setSelectedLocName={"setSelectedLocName"}
              setSelectedLocCoords={"setSelectedLocCoords"}
              setSelectedLocRating={"setSelectedLocRating"}
              setSelectedLocAdress={"setSelectedLocAdress"}
              serviceOptions={item.serviceOptions}
              thumbnail={item.thumbnail}
              setModalVisible={"setModalVisible"}
                />
                
            </div>
        ))
          }
          
    </div>
  )
}

export default LocationList
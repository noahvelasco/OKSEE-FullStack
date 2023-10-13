import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faStarHalfStroke, faClock, faBellConcierge, faEye } from '@fortawesome/free-solid-svg-icons'


const LocationItem = ({
    category,
  title,
  rating,
  hours,
    lat,
  lng,
  address,
  setSelectedLocName,
  setSelectedLocCoords,
  setSelectedLocRating,
  setSelectedLocAdress,
  serviceOptions,
  thumbnail,
  setModalVisible,
}) => {
  return (
      <div className='location-item'>
          <Image
              className='self-center rounded'
                src={thumbnail}
                width={200}
                height={200}
                alt={title + " thumbnail"}
            />
          
          <div className='location-title-section'>
            <h1 className='location-title'>{title}</h1>
            <h2 className='location-category'>{category}</h2>
        </div>

        <div className='midSection'>
            <div className='midSectionTextWrapper'>
                <div className='midSectionTextRating'>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#D0DF00' />
                {" " + rating}
                  </div>
                  
                  <div className='midSectionTextHours'>
                  <FontAwesomeIcon icon={faClock} color='white'/>
                      {" " + hours}
                  </div>

                  <div className='midSectionTextSO'>
                  <FontAwesomeIcon icon={faBellConcierge} color='gray' />
                      {" " + serviceOptions}
                  </div>
            </div>
        </div>

        <button
        className='bird-view-button'
        onPress={() => {
            setModalVisible(true);
            setSelectedLocName(title);
            setSelectedLocCoords([lat, lng]);
            setSelectedLocRating(rating);
            setSelectedLocAdress(address);
        }}
        >
            <h1 className='bird-view-text'>
                {"Bird's \t"}
                <FontAwesomeIcon icon={faEye} />
            </h1>
        </button>
  
      
    </div>
);
};
export default LocationItem
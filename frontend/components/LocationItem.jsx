import React from 'react'
import Image from 'next/image'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faStarHalfStroke, faClock, faBellConcierge, faEye } from '@fortawesome/free-solid-svg-icons'


const LocationItem = ({
    category,
    thumbnail,
    title,
    rating,
    hours,
    lat,
    lng,
    address,
    modalVisibility,
    setModalVisibility,
    setSelectedLocName,
    setSelectedLocLat,
    setSelectedLocLng,
    setSelectedLocRating,
    setSelectedLocAddress,
    serviceOptions,
}) => {
  return (
      <div className='location-item'>
          <Image
              className='self-center rounded w-3/4 h-auto'
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
              onClick={() => {
                  setModalVisibility((prevState) => !prevState);
                  setSelectedLocName(title);
                  setSelectedLocLat(lat);
                  setSelectedLocLng(lng);
                  setSelectedLocRating(rating);
                  setSelectedLocAddress(address);
                  console.log("MODAL VISIBILITY: ", modalVisibility)
              }
            }
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
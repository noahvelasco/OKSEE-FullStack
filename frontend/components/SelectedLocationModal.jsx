'use client'
import { GoogleMap, LoadScript, Marker, MarkerF } from "@react-google-maps/api";


import React, { useState, useEffect} from "react";

const SelectedLocationModal = ({
    title,
    rating,
    address,
    coords,
    modalVisibility,
    setModalVisibility,
}) => {

const [satelliteView, setSatelliteView] = useState(false);

  //animation to circle map
  const [heading, setHeading] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setHeading((prevHeading) => (prevHeading + 0.1) % 360); // Increment heading, and reset to 0 after reaching 360
//     }, 10);

//     return () => clearInterval(intervalId); // Clear the interval when component is unmounted
//   }, []);
    
  //custom map style
  const locOfInterest = {
    latitude: coords[0],
    longitude: coords[1],
  };

  return (
    <div className={`modal ${modalVisibility ? 'visible' : 'hidden'}`}>
      <div className="modal-container">

      <h2 className="modal-title">{title}</h2>
      <p className= "modal-rating">{rating}</p>
      <p className="modal-address">{address}</p>              

    <div className="m-2 overflow-hidden self-center border-2 border-[#C0A080] rounded rounder-xl">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        mapIds={['2c19ea471d766e59']}//this is for the map styling - must get from google map style management
      >
        <GoogleMap
          mapContainerStyle={{
            width: "45vw",
            height: "45vh",
          }}
          center={{ lat: locOfInterest.latitude, lng: locOfInterest.longitude}}
          zoom={18}
          options={{
            mapId: '2c19ea471d766e59',//this is for the map styling - must get from google map style management
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: true,
          }} 
        >

        <Marker
            position={{ lat: locOfInterest.latitude, lng: locOfInterest.longitude}}
            title="Title"
            icon={{
              url: '/assets/images/marker.png',
              scaledSize:{
                width:50,
                height:50
              },
            }}
          />

        </GoogleMap>
      </LoadScript>
    </div>





              <button
                  className="modal-close-button"
                  onClick={() => setModalVisibility(false)}>
                  Close
              </button>
              
    </div>
  </div>
  )
}

export default SelectedLocationModal
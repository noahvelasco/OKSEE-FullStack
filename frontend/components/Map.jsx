"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const Map = () => {
  //custom map style
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  }
  const startingCoord = {lat: 35.4676 , lng: -97.5164}
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        mapIds={['2c19ea471d766e59']}//this is for the map styling
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={startingCoord}
          zoom={13}
          options={{
            mapId: '2c19ea471d766e59',//this is for the map styling
            disableDefaultUI: true,
            clickableIcons: false,
            scrollwheel: true,
          }} 
        >

          <Marker>
          </Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  )

} 

export default Map;

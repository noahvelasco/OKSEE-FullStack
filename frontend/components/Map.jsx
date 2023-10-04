"use client";
import Image from "next/image";

import { GoogleMap, LoadScript, Marker, MarkerF } from "@react-google-maps/api";
import React from "react";

const Map = () => {
  //custom map style
  const mapContainerStyle = {
    width: "70vw",
    height: "100vh",
  }
  const startingCoord = {lat: 35.4676 , lng: -97.5164}
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        mapIds={['2c19ea471d766e59']}//this is for the map styling - must get from google map style management
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={startingCoord}
          zoom={13}
          options={{
            mapId: '2c19ea471d766e59',//this is for the map styling - must get from google map style management
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: true,
          }} 
        >
          <Marker
            position={startingCoord}
            label={"Label"}
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
  )

} 

export default Map;

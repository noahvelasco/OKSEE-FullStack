"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const SelectedLocationModal = ({
  title,
  rating,
  address,
  coords,
  modalVisibility,
  setModalVisibility,
}) => {
  //custom map style
  const locOfInterest = {
    latitude: coords[0],
    longitude: coords[1],
  };

  return (
    <div className={`modal ${modalVisibility ? "visible" : "hidden"}`}>
      <div className="modal-container">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-rating">
          <FontAwesomeIcon icon={faStarHalfStroke} color="#D0DF00" />{" "}
          {" " + rating}
        </p>
        <p className="modal-address">{address}</p>

        <div className="flex mt-5 justify-center items-center ">
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            mapIds={["2c19ea471d766e59"]} //this is for the map styling - must get from google map style management
          >
            <GoogleMap
              mapContainerStyle={{
                width: "45vw",
                height: "45vh",
                borderRadius: "2%",
                borderWidth: 2,
                borderColor: "#C0A080",
              }}
              center={{
                lat: locOfInterest.latitude,
                lng: locOfInterest.longitude,
              }}
              zoom={18.75}
              options={{
                mapId: "2c19ea471d766e59", //this is for the map styling - must get from google map style management
                draggable: false,
                disableDefaultUI: true,
                clickableIcons: false,
                scrollwheel: false,
                keyboardShortcuts: false,
                disableDoubleClickZoom: false,
                mapTypeControl: false,
                heading: 0,
                tilt: 45,
                mapTypeId: "satellite",
              }}
            >
              <Marker
                position={{
                  lat: locOfInterest.latitude,
                  lng: locOfInterest.longitude,
                }}
                title="Title"
                icon={{
                  url: "/assets/images/marker.png",
                  scaledSize: {
                    width: 50,
                    height: 50,
                  },
                }}
              />
            </GoogleMap>
          </LoadScript>
        </div>

        <button
          className="modal-close-button"
          onClick={() => setModalVisibility(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SelectedLocationModal;

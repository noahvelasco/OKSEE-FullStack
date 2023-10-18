"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ locations, pressedPizza, pressedBurger, pressedCoffee }) => {
  const okcCoord = { lat: 35.4676, lng: -97.5164 }; //this is the default view for initial map rendering

  const showMarkers = () => {
    //map the locations at render/rerender
    return locations.map((item, index) => {
      //if pizza button pressed then show its markers
      if (pressedPizza && item.category == "pizza") {
        return (
          <Marker
            key={item.id}
            index={index}
            label={item.title}
            position={{ lat: item.latitude, lng: item.longitude }}
            icon={{
              url: "/assets/images/marker_pizza.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
        );
      }
      if (pressedBurger && item.category == "burger") {
        return (
          <Marker
            key={item.id}
            index={index}
            label={item.title}
            position={{ lat: item.latitude, lng: item.longitude }}
            icon={{
              url: "/assets/images/marker_burger.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
        );
      }
      if (pressedCoffee && item.category == "coffee") {
        return (
          <Marker
            key={item.id}
            index={index}
            position={{ lat: item.latitude, lng: item.longitude }}
            label={item.title}
            icon={{
              url: "/assets/images/marker_coffee.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
        );
      }
    });
  };

  return (
    <div className="">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        mapIds={["2c19ea471d766e59"]} //this is for the map styling - must get from google map style management
      >
        <GoogleMap
          mapContainerStyle={{
            width: "80vw",
            height: "100vh",
          }}
          center={okcCoord}
          zoom={13}
          options={{
            mapId: "2c19ea471d766e59", //this is for the map styling - must get from google map style management
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: true,
          }}
        >
          {/* Show all the markers based on the states of the buttons */}
          {showMarkers()}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;

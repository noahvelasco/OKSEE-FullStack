"use client";

import { useState, useEffect } from "react";

import Map from "@/components/Map";
import MapFilterButtons from "@/components/MapFilterButtons";
import NavBar from "@/components/NavBar";
import WeatherOverlay from "@/components/WeatherOverlay";

const Home = () => {
  const [pressedPizza, setPizza] = useState(true);
  const [pressedBurger, setBurger] = useState(true);
  const [pressedCoffee, setCoffee] = useState(true);
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      //Get the location data from the backend
      const res = await fetch("http://localhost:8080/api/est");
      const data = await res.json();
      setLocations(data);
    } catch (e) {
      setError("Could not fetch location data for eateries.");
    } finally {
      console.log("Fetched backend location data successfully.");
    }
  };

  useEffect(() => {
    (async () => {
      await fetchLocations();
    })();
  }, []);

  return (
    <div className="flex flex-row overflow-hidden">
      <div className="w-1/4 bg-[#171717] bg-[url('/assets/icons/splash.png')] bg-no-repeat bg-contain	bg-center">
        <NavBar
          locations={locations}
          pressedPizza={pressedPizza}
          pressedBurger={pressedBurger}
          pressedCoffee={pressedCoffee}
        />
      </div>

      <div className="max-h-screen">
        <WeatherOverlay />
        <MapFilterButtons
          pressedPizza={pressedPizza}
          setPizza={setPizza}
          pressedBurger={pressedBurger}
          setBurger={setBurger}
          pressedCoffee={pressedCoffee}
          setCoffee={setCoffee}
        />

        <Map
          locations={locations}
          pressedPizza={pressedPizza}
          pressedBurger={pressedBurger}
          pressedCoffee={pressedCoffee}
        />
      </div>
    </div>
  );
};

export default Home;

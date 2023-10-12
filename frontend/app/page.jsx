"use client"

import { useState } from "react"

import Map from "@/components/Map"
import MapFilterButtons from "@/components/MapFilterButtons"
import NavBar from "@/components/NavBar"
import WeatherOverlay from "@/components/WeatherOverlay"

const Home = () => {
  
  const [pressedPizza, setPizza] = useState(false);
  const [pressedBurger, setBurger] = useState(false);
  const [pressedCoffee, setCoffee] = useState(false);

  return ( 
    <div className="flex flex-row">

      <div className="flex-1 bg-[#171717] bg-[url('/assets/icons/splash.png')] bg-no-repeat bg-contain	bg-center">
        <NavBar />
      </div>
    
      <div className="flex-1">  
        <WeatherOverlay />
        <MapFilterButtons
          pressedPizza={pressedPizza}
          setPizza={ setPizza}
          pressedBurger={pressedBurger }
          setBurger={ setBurger}
          pressedCoffee={ pressedCoffee}
          setCoffee={setCoffee}
        />
        <Map />
      </div>
    </div>

    
  )
}

export default Home
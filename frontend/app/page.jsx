import Map from "@/components/Map"
import MapFilterButtons from "@/components/MapFilterButtons"
import NavBar from "@/components/NavBar"
import WeatherOverlay from "@/components/WeatherOverlay"

const Home = () => {

  return ( 
    <div className="flex flex-row">

      <div className="flex-1 bg-[#171717] bg-[url('/assets/icons/splash.png')] bg-no-repeat bg-contain	bg-center">
        <NavBar />
      </div>
    
      <div className="flex-1">  
        <WeatherOverlay />
        <MapFilterButtons />
        <Map />
      </div>
    </div>

    
  )
}

export default Home
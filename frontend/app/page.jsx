import Map from "@/components/Map"
import MapFilterButtons from "@/components/MapFilterButtons"

const Home = () => {

  return ( 
    <div className="relative h-screen">
      <MapFilterButtons />
      <Map />
    </div>
  )
}

export default Home
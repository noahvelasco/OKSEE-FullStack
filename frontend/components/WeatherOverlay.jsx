import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const WeatherOverlay = () => {
  return (
    <div className="map-overlay">
        
        <div>
        <FontAwesomeIcon icon={faCloud} />
        </div>
        <div>
            <h1>94°</h1>
            <h1>Partly Cloudy</h1>
        </div>
          
    </div>
  )
}

export default WeatherOverlay
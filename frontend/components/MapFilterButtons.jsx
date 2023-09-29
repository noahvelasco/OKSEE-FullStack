"use client"

const MapFilterButtons = () => {
return (
<div className="map-buttons">
  <button className="button" onClick={()=>{console.log("Pizza")}}>Pizza Button</button>
  <button className="button" onClick={()=>{console.log("Burger")}}>Burger Button</button>
    <button className="button" onClick={() => { console.log("Cafe") }}>Cafe Button</button>
</div>
);
};

export default MapFilterButtons;
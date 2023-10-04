"use client"

const MapFilterButtons = () => {
return (
<div className="map-buttons">
  <button className="button" onClick={()=>{console.log("Pizza")}}>△ Pizza</button>
  <button className="button" onClick={()=>{console.log("Burger")}}>≡ Burger</button>
  <button className="button" onClick={() => { console.log("Cafe") }}>◎ Cafe</button>
</div>
);
};

export default MapFilterButtons;
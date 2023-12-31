"use client"

const MapFilterButtons = ({
  pressedPizza,
  setPizza,
  pressedBurger,
  setBurger,
  pressedCoffee,
  setCoffee
}) => {


return (
  <div className="map-buttons">
    
    <button className={pressedPizza ? "button-pressed-pizza" : "button-unpressed"} onClick={
      () => {
      setPizza((prevState) => !prevState);
      }
    }>△ Pizza</button>

    <button className={pressedBurger ? "button-pressed-burger" : "button-unpressed"} onClick={
      () => {
        setBurger((prevState) => !prevState);
      }
    }>≡ Burger</button>
    

    <button className={pressedCoffee ? "button-pressed-coffee" : "button-unpressed"} onClick={
      () => {
        setCoffee((prevState) => !prevState);
      }
    }>◎ Cafe</button>
    

</div>
);
};

export default MapFilterButtons;
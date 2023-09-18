import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from './components/Header/Header'
import Widgets from "./components/Widgets/Widgets";
function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayers, setAddPlayers] = useState([]);
  const [price, setPrice] = useState(0)
  const [costRemaining, setCostRemaining] = useState(20000)
  const handleBuy = (player) => {
    const addNewPlayers = [...addPlayers, player]
    setAddPlayers(addNewPlayers)
  }
  // handle total price
  const handleTotalCost = (playerPrice) => {
    const newTotalPrice = price + playerPrice;
    setPrice(newTotalPrice)
  }
  const handleTotalCostRemaining = (playerPrice) => {
    const newTotalPrice = costRemaining - playerPrice;
    setCostRemaining(newTotalPrice)
  }
  useEffect(()=> {
    fetch('cricketer.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  return (
    <>
      <Header></Header>
      <div className="flex">
      <Cards players={players} handleBuy ={handleBuy} handleTotalCost={handleTotalCost} handleTotalCostRemaining={handleTotalCostRemaining}></Cards>
      <Widgets addPlayers={addPlayers} price={price} costRemaining={costRemaining}></Widgets>
      </div>
    </>
  );
}

export default App;

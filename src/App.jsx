import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import toast, { Toaster } from 'react-hot-toast';
import Cards from "./components/Cards/Cards";
import Header from './components/Header/Header'
import Widgets from "./components/Widgets/Widgets";
function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayers, setAddPlayers] = useState([]);
  const [price, setPrice] = useState(0)
  const [costRemaining, setCostRemaining] = useState(20000)
  const handleBuy = (player) => {
    const buyingPrice = player.price;
    
    const addNewPlayers = [...addPlayers, player]
    if(buyingPrice > 20000){
      console.log('hi');
    }
    setAddPlayers(addNewPlayers)
  }
  // handle total price
  const handleTotalCost = (playerPrice) => {
    const newTotalPrice = price + playerPrice;
    if(newTotalPrice > 20000){
      toast.error('Your cannot cross your budget of 20000 USD')
      return
    } else{
      
      setPrice(newTotalPrice)
    }
    
  }
  const handleTotalCostRemaining = (playerPrice) => {
    const newTotalPrice = costRemaining - playerPrice;
    if(newTotalPrice < 0){
      toast.error("You don't have enough money")
      return
    } else {
      setCostRemaining(newTotalPrice)
    }
    
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
      <Toaster  position="top-bottom" />
      </div>
    </>
  );
}

export default App;

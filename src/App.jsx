import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from './components/Header/Header'
import Widgets from "./components/Widgets/Widgets";
function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayers, setAddPlayers] = useState([])
  const handleBuy = (player) => {
    const addNewPlayers = [...addPlayers, player]
    setAddPlayers(addNewPlayers)
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
      <Cards players={players} handleBuy ={handleBuy}></Cards>
      <Widgets addPlayers={addPlayers}></Widgets>
      </div>
    </>
  );
}

export default App;

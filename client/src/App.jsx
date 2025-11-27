import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from "react";
import { fetchItems } from "./api/items";;
import Hero from "./components/Hero";
import GameList from "./components/GameList";
import ConsoleList from "./components/ConsoleList";
import ConsoleCarousel from "./components/ConsoleCarousel";
import GameCarousel from "./components/GameCarousel";




function App() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://retro-bros.onrender.com/api/items") // tu endpoint
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Hero />

      {/* <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Juegos</h2>
        <GameList items={items} />
      </section> */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <GameCarousel items={items} />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <ConsoleCarousel items={items} />
      </section>

      {/* <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Consolas</h2>
        <ConsoleList items={items} />
      </section> */}

      
    </>
  )
}

export default App

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from "react";
import { fetchItems } from "./api/items";
import ItemsList from "./components/ItemsList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RetroCard from "./components/RetroCard";
import GameList from "./components/GameList";
import ConsoleList from "./components/ConsoleList";



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
      <Header />
      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Juegos</h2>
        <GameList items={items} />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Consolas</h2>
        <ConsoleList items={items} />
      </section>

      <Footer />
      
    </>
  )
}

export default App

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



function App() {
  


  return (
    <>
      
      <Header />
      <Hero />

    
      <ItemsList />

      <Footer />
      
    </>
  )
}

export default App

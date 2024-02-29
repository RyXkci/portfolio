import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Hero />
     <About />
     <Projects />
     <Socials />
     </BrowserRouter>
    </>
  )
}

export default App

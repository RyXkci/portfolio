import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Techs from "./components/Techs";
import Contact from "./components/Contact";

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Hero />
     <About />
     <Projects />
     <Socials />
     <Techs />
     <Contact />
     </BrowserRouter>
    </>
  )
}

export default App

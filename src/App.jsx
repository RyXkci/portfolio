import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Socials from "./sections/Socials";
import Techs from "./sections/Techs";
import Contact from "./sections/Contact";

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

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Hero />
     <About />
     <Projects />
     </BrowserRouter>
    </>
  )
}

export default App

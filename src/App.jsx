import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Hero from './components/Hero';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Hero />
     </BrowserRouter>
    </>
  )
}

export default App

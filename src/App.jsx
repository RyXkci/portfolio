import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";
import Navbar from "./components/Navbar";

import scrollToHashElement from "./utils/ScrollToHashElement";
import ScrollToHashElement from "./utils/ScrollToHashElement";

function App() {
  

  return (
    <>
     <BrowserRouter>
     <ScrollToHashElement />
     <Navbar />
     <Routes>
      <Route
      path="/"
      element= {<Home />}/>

      <Route 
      path="/projects/:title"
      element={<SingleProject />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

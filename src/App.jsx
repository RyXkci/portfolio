import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// COMPONENTS //
import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";

function App() {
  

  return (
    <>
     <BrowserRouter>
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

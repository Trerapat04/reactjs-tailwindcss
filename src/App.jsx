// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/about";
import InfoOne from "./components/InfoOne";
import InfoTwo from "./components/InfoTwo";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Bar from "./components/Bar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/"element={<>
      <Home />
      <About />
      <InfoOne />
      <InfoTwo />
      <CTA />
      <Testimonials/> 
      <Bar/>
      </>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;

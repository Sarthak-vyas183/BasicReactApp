import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Homes from './component/Homes';
import About from './component/About';
import Dish from './component/Dish';
import Cart from './component/Cart';
import Login from './component/login';
import Singup from './component/singup';
import Footer from './component/footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Lunch from './component/Lunch';
import LDinner from './component/LDinner';
import Snacks from './component/Snacks';
import Dinner from './component/Dinner';

function App() {
  return (   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Homes" />} />
        <Route path="/Homes" element={<Homes />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dish" element={<Dish />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/singup" element={<Singup />} />
        
      <Route path='/Snacks' element={<Snacks/>} />
      <Route path='/Lunch' element={<Lunch/>} />
      <Route path='/Dinner' element={<Dinner/>} />
      <Route path='/LDinner' element={<LDinner/>} />
    
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

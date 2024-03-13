import React from 'react';
import '../App.css';

import { Routes, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function Dish() {
  
  return (
    <>
    
    <div className='dish-content' id='content'>
        <main className="dish-main">
            <li><Link  to='/Snacks'><h2>Snacks</h2></Link></li>
            <li><Link  to='/Lunch'><h2>Lunch</h2></Link></li>
            <li><Link  to='/Dinner'><h2>Dinner</h2></Link></li>
            <li><Link  to='/LDinner'><h2>Late night Dinner</h2></Link></li>
       </main>
    </div>
    </>
  )
}

export default Dish

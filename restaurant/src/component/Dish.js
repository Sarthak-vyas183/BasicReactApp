import React from 'react';
import '../App.css';

import { Routes, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function Dish() {
  
  return (
    <>
    
    <div className='dish-content' id='content'>
        <main className="dish-main">
            <li><Link  to='/Snacks'>Snacks</Link></li>
            <li><Link  to='/Lunch'>Lunch</Link></li>
            <li><Link  to='/Dinner'>Dinner</Link></li>
            <li><Link  to='/LDinner'>Late night Dinner</Link></li>
           
        </main>
    </div>
    </>
  )
}

export default Dish

// import React from 'react'
import Dish  from './Dish'
import React, { useState } from 'react';


function Snacks() {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };
  return (
    <div className='D-container'>
     
       <div className="D-main">
          <div className="S-card">
             <img src="/SnacksImg/Veg-pakora.jpg" alt="" /> 
           <div className="S-contant">
             <h2>Vegetable Pakora</h2>
             <p>Just Rupees - 59rs  :  100gm</p>
             <span>⭐⭐⭐⭐ 220 ratings · 25min in Delivery </span>
             <p>Vegetable Pakora recipe made with mixed vegetables, spices, herbs and gram flour. Chai Pakora is a match made in the heaven & we love the crunchy pakora all-round the year, with our Chai.... </p>
             
             <span id="ingredients">
              <p  onClick={(e) => { e.preventDefault(); toggleRecipe(); }}>Ingredients 🔽</p>
              {showRecipe && (
                <div className="recipe-dropdown">
                  <h3>Product </h3>
                  <ul>
                    <li>1 cup Cabbage</li>
                    <li>1 Carrot, medium</li>
                    <li>2 tbsp Mint</li>
                    <li>2 tbsp Mint</li>
                    <li>1 Onion, medium</li>
                    <li>1 cup Spinach</li>

                  
                  </ul>
                </div>
              )}
            </span>
            <button className='btn'>Add To card</button> 
             
          </div>
           </div> 
          <div className="S-card"> </div> 
          <div className="S-card"> </div> 
          <div className="S-card"> </div> 
          <div className="S-card"> </div>   
       </div>
    </div>
  )
}

export default Snacks

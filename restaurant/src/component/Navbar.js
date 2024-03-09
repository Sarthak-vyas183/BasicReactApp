import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
   <>
    <nav>
        <div className='Left'>
        <img src="/restorent.jpg" alt="loading"/> 
            <h3>Restaurant</h3>
        </div>
        <div className='right'>
        <ul>
            <li><Link className='li' to='/Homes'>Home</Link></li>
            <li><Link className='li' to='/Dish'>Dish</Link></li>
            <li><Link className='li' to='/About'>About</Link></li>
            <li><Link className='li' to='/login'>login</Link></li>
            <li><Link className='li' to='/Cart'>Add-to-Cart</Link></li>
           
           
        </ul>    
         </div>
    </nav>
   </>
  )
}

export default Navbar;
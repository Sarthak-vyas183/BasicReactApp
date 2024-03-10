import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Homes() {
  return (
  <>
    <div className='main'>
     <div className='content'>
      <h2>Delicious Food ! <br /> <span>Delivered In 30 Min.</span></h2>
      <button><Link className='li' to='/Dish'>Menu</Link></button>
     </div>
      <video className='titleVdo' src='/video.MP4' controls autoPlay></video>     


      </div>
  
  </>
  )
}

export default Homes

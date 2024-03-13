import React , {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [ Color, setColor] = useState('white');
   
 
    const location = useLocation();

    React.useEffect(()=>{
        if(location.pathname === '/Homes') {
            setBackgroundColor('transparent');
            setColor('white');
           
        } else {
            setBackgroundColor('rgb(255, 255, 255)'); 
            setColor('black');
        }
    },[location])
 


  return (
   <>
    <nav style={{backgroundColor : backgroundColor , color : Color}}>
        <div className='Left'>
            
            <h3>Restaurant</h3>
        </div>
        <div className='right'>
        <ul> 
            <li><Link style={{color : Color}} className='li' to='/Homes'>Home</Link></li>
            <li><Link style={{color : Color}} className='li' to='/Dish'>Menu</Link></li>
            <li><Link style={{color : Color}} className='li' to='/About'>About</Link></li>
            <li><Link style={{color : Color}} className='li' to='/Cart'>Cart</Link></li>
            <li><Link style={{color : Color}} className='li' to='/login'>log-in</Link></li>
           
           
           
        </ul>    
         </div>
    </nav>
   </>
  )
}

export default Navbar;
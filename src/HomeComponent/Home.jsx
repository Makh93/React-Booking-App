
import { Outlet,NavLink } from 'react-router-dom';
import { FaHeadset } from "react-icons/fa";



export default function Home() {
 
  return (
    <div className='Home'>





<div className='Navbar'>
        <h1>🌄 Sahara</h1>
        
<NavLink className='links' to ='main'>Home</NavLink>
<NavLink className='links'    to='room'>Rooms</NavLink>
<NavLink  className='links'     to= 'destination'>Destination</NavLink>
<NavLink className='links'     to= 'services'>Services</NavLink>
<NavLink className='links'     to='contact'>Contact</NavLink>
<NavLink className='links'  to= 'aboutus'  >About </NavLink>

 <p> <FaHeadset/> Call : +0123-456-789    </p>
 
    </div>
<Outlet/>


    </div>
  )
}

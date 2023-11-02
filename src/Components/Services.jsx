import React, {useContext} from 'react'
import Footer from './Footer'
import {MdFoodBank, MdAirportShuttle, MdOutlineBreakfastDining} from "react-icons/md";
 import {FaSwimmingPool} from 'react-icons/fa'
 import { TbMassage } from "react-icons/tb";
 import {GrGamepad} from "react-icons/gr"
 import MyContext from './context';
export default function Services() {
  const pic= useContext(MyContext)
  return (
    <div>

<img  style= {{height:'700px'}}src={pic.resort}alt="view" />
<h4 style={{color:'rgb(10, 77, 63)', fontWeight: '300' }}>Our Services</h4>

<h1 style={{display: 'flex', justifyContent : 'center', fontSize: '50px' ,color: 'rgb(10, 77, 63)'}}>What We Offer For You</h1>


<div className='service1' style={{width: '900px', display: 'flex', justifyContent: 'space-evenly', justifyItems: 'center', marginLeft: '33rem', marginTop: '50px'}}>
 <div >
<h1><MdFoodBank style={{color: 'rgb(10, 77, 63)'}}/></h1>
<h2 style={{color: 'rgb(10, 77, 63)', fontSize: '30px'}} >Delicious Food</h2>
<p style={{fontWeight: '300', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
 </div>
 <div ><h1><FaSwimmingPool    style={{color: 'rgb(10, 77, 63)'}} /></h1>
 <h2   style={{color: 'rgb(10, 77, 63)', fontSize: '30px'}}>Swimming Pool</h2>
 <p style={{fontWeight: '300', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
 </div>
 <div >
  <h1><TbMassage    style={{color: 'rgb(10, 77, 63)'}}/></h1>
  <h2  style={{color: 'rgb(10, 77, 63)', fontSize: '30px'}}>Spa Saloon</h2>
  <p style={{fontWeight: '300', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
 </div>
  </div>



  <div className='service2' style={{width: '900px', display: 'flex', justifyContent: 'space-evenly', justifyItems: 'center', marginLeft: '33rem', marginTop: '50px',marginBottom: '50px'}} >
<div >
  <h1><GrGamepad  style={{color: 'rgb(10, 77, 63)'}} /></h1>
  <h2   style={{color: 'rgb(10, 77, 63)', fontSize: '30px'}}>Gaming Room</h2>
  <p style={{fontWeight: '300', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
</div>
<div><h1><MdAirportShuttle  style={{color: 'rgb(10, 77, 63)'}}  /></h1>
<h2   style={{color: 'rgb(10, 77, 63)', fontSize: '30px'}}>Airport Taxi</h2>
<p style={{fontWeight: '300', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p></div>
<div>

<h1><MdOutlineBreakfastDining style={{color: 'rgb(10, 77, 63)'}}    /></h1>
<h2  style={{color: 'rgb(10, 77, 63)', fontSize: '30px'}}>Breakfast</h2>
<p   style={{fontWeight: '300', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

</div>
  </div>



<Footer/>

    </div>
  )
}

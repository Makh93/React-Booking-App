import React from 'react'
import {FaFacebookF, FaGooglePlusG,FaTwitter, FaInstagram, FaPeriscope,FaMobileAlt,FaEnvelopeOpen} from "react-icons/fa";


export default function Footer({pic}) {
  return (
    <div className='footer'>
    <div className='icon'>

    <h1>🌄 Sahara</h1>
    <ul>
   
      <li ><FaFacebookF/></li>
      <li><FaGooglePlusG/></li>
      <li><FaTwitter/></li>
      <li><FaInstagram/></li>
    </ul></div>



    <div className='important'>
<div className='contact'>
<h4>Contact</h4>


<ul>

<li>  <FaPeriscope />{' '}address: 012365478</li>
<li><FaMobileAlt/> {' '}  012365478</li>
<li><FaEnvelopeOpen/> {' '}  www.sahara@email.com</li>

</ul>



  
</div>


<div className='news' >

<label htmlFor=""  style= {{color: 'azure'}}>NewsLetter</label>
<input type="text" placeholder='Enter your E-mail'/>
<button>Subscribe </button>

</div>
</div>

<div className='policy'>

<ul>
  <li>Privacy PolicyTerms & ConditionCookies</li>
  <li>© 2023 Sahara. All rights reserved</li>
</ul>

</div>

    </div>






  )
}

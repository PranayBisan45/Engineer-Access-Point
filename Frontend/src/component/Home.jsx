import React from 'react'
import EAP from "../assets/Engineer Access Portal.jpg"
import logo from "../assets/Logo.jpg"
import "./css/Home.css"
function Home() {
  return (
    <div className='homeImage'>
      <div className='logo'>
      <img src={logo} alt='logo image'/>
      </div>
        <h1>Home</h1>
         <div>
    <img src={EAP} alt='Engineer Access Portal image'/>
    </div>
    
    </div>
  )
}

export default Home
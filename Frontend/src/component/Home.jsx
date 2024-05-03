import React from 'react'
import EAP from "../assets/Engineer Access Portal.jpg"
import "./css/Home.css"
function Home() {
  return (
    <div className='homeImage'>
        <h1>Home</h1>
         <div>
    <img src={EAP} alt='Engineer Access Portal image'/>
    </div>
    
    </div>
  )
}

export default Home
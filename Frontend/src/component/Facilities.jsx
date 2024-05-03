import React from 'react'
// import EAP from "../assets/Engineer Access Portal.jpg"
import project from "../assets/Project Planning.jpg"
import Estimation from "../assets/Estimation.jpg"
import Supervision from "../assets/Site Supervision.jpg"
import Layout from "../assets/Layout Planning.jpg"
import SA from "../assets/Structural Design and Analysis.jpg"
import './css/Facilities.css'
function Facilities() {
  return (
  <div className='image'>
    <div className='projectName'> Project Planning
<img src={project} alt='Project Planning image'/>
</div>
<div className='projectName'> Estimation
    <img src={Estimation} alt='Estimation image'/>
</div>
<div className='projectName'> Site Supervision
    <img src={Supervision} alt='Site Supervision image'/>
</div>
<div className='projectName'> Layout Planning
    <img src={Layout} alt='Layout Planning image'/>
</div>
<div className='projectName'> Structural Design and Analysis
    <img src={SA} alt='Structural Design and Analysis image'/>
</div>
</div>
  )
}

export default Facilities
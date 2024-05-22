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
        <img className="image-1" src={project} alt='Project Planning image'/>
    </div>
    <div className='projectName'> Estimation
        <img className="image-1" src={Estimation} alt='Estimation image'/>
    </div>
    <div className='projectName'> Site Supervision
        <img className="image-1" src={Supervision} alt='Site Supervision image'/>
    </div>
    <div className='projectName'> Layout Planning
        <img className="image-1" src={Layout} alt='Layout Planning image'/>
    </div>
    <div className='projectName'> Structural Design and Analysis
        <img className="image-1" src={SA} alt='Structural Design and Analysis image'/>
    </div>
    </div>
)
}

export default Facilities
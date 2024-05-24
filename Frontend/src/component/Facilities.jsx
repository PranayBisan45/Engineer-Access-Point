import project from "../assets/Project Planning.jpg"
import Estimation from "../assets/Estimation.jpg"
import Supervision from "../assets/Site Supervision.jpg"
import Layout from "../assets/Layout Planning.jpg"
import SA from "../assets/Structural Design and Analysis.jpg"

function Facilities() {
return (
    <div className='flex mx-32 flex-wrap'>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Project Planning
                <img className="w-[560px] h-[560px] mr-7 mt-2 rounded-xl hover:w-[580px] hover:h-[580px]" src={project} alt='Project Planning image'/>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Estimation
                <img className="w-[560px] h-[560px] rounded-xl mt-2 ml-7 hover:w-[580px] hover:h-[580px]" src={Estimation} alt='Estimation image'/>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Site Supervision
                <img className="w-[560px] h-[560px] mr-7 mt-2 rounded-xl hover:w-[580px] hover:h-[580px]" src={Supervision} alt='Site Supervision image'/>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Layout Planning
                <img className="w-[560px] h-[560px] mt-2 rounded-xl ml-7 hover:w-[580px] hover:h-[580px]" src={Layout} alt='Layout Planning image'/>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Structural Design and Analysis
                <img className="w-[560px] h-[560px] mr-7 mt-2 rounded-xl hover:w-[580px] hover:h-[580px]" src={SA} alt='Structural Design and Analysis image'/>
            </div>
        </div>
    </div>
)
}

export default Facilities
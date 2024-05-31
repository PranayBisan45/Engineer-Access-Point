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
                <div className="w-[560px] h-[560px] mr-7 mt-2 rounded-2xl overflow-hidden">
                    <img className="rounded-2xl transform transition-transform duration-300 hover:scale-110" src={project} alt='Project Planning image'/>
                </div>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Estimation
                <div className="w-[560px] h-[560px] mr-7 mt-2 ml-7 rounded-2xl overflow-hidden">
                    <img className="rounded-2xl transform transition-transform duration-300 hover:scale-110" src={Estimation} alt='Estimation image'/>
                </div>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Site Supervision
                <div className="w-[560px] h-[560px] mr-7 mt-2 rounded-2xl overflow-hidden">
                    <img className="rounded-2xl transform transition-transform duration-300 hover:scale-110" src={Supervision} alt='Site Supervision image'/>
                </div>
            </div>
        </div>
        <div className="w-[600px] h-[600px] mb-14">
            <div className='text-lg text-center font-bold'> Layout Planning
                <div className="w-[560px] h-[560px] mr-7 mt-2 ml-7 rounded-2xl overflow-hidden">
                    <img className="rounded-2xl transform transition-transform duration-300 hover:scale-110" src={Layout} alt='Layout Planning image'/>
                </div>
            </div>
        </div>
        <div className="w-[600px] h-[600px]">
            <div className='text-lg text-center font-bold'> Structural Design and Analysis
                <div className="w-[560px] h-[560px] mr-7 mt-2 rounded-2xl overflow-hidden">
                    <img className="rounded-2xl transform transition-transform duration-300 hover:scale-110" src={SA} alt='Structural Design and Analysis image'/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Facilities
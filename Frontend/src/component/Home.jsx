import Image from "../assets/HomeImage.webp"
import Calendar from "./Calender"

function Home() {
  return (
    <div className="mb-14">
      <div className="flex ml-40">
        <h1 className="text-black text-5xl w-[2050px] font-bold">Schedule
        <br/><span className="text-blue-800"> appointments </span> <br/> 
        online directly <br/> from your website
        <h4 className="text-lg mt-10 font-normal">Appointlet makes it easy for your customers to <br/> book appointments with you, right from your <br/> website.</h4>
        </h1> 
        <div className="mr-52">
          <img src={Image} alt='Background image'/>
        </div>
      </div>
      <div className="flex">
        <span className="w-1/3 ml-40"><Calendar/> </span>
        <h1 className="text-3xl text-blue-900 font-bold w-2/3 ml-48 mt-28">Make your work meetings a success <br/> with online scheduling</h1>
      </div>
    </div>
  )
}

export default Home
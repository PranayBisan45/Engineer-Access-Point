import Image from "../assets/HomeImage.webp"
import Calendar from "./Calender"
import button from '../assets/button.png'
import { useState } from 'react';
import appointment from '../assets/homeappointment.jfif'
import schedule from "../assets/setAppointment.jfif"
import booking from "../assets/booking.jfif"
import { useLogin } from "./Context";

function Home() {
  const [message, setMessage] = useState('');
  const {LoggedIn,checkLogin } = useLogin()

  const handleChange = () => {
    if(sessionStorage.getItem("username")==null && sessionStorage.getItem("usertype")==null) {
      sessionStorage.setItem('username','guest');
      sessionStorage.setItem('usertype','user');

      setMessage('You are logged in as a guest');
      checkLogin(true)
      setTimeout(() => {
        setMessage(''); 
      }, 4000);
    }
    else {
    setMessage('You are already logged in!!');
    
      setTimeout(() => {
        setMessage('');
      }, 4000);  
    }
  }
  
  return (
    <div className="mb-14">
      <div className="flex ml-40 bg-sky-50">
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
        <div className="w-2/3 ml-48 mt-28">
          <h1 className="text-3xl text-blue-900 font-bold">Make your work meetings a success <br/> with online scheduling</h1>
          <div className='flex relative mx-auto mt-8'>  
            <img src={button} className='w-48'/>
            <button className='text-black font-semibold absolute top-[46px] left-12' onClick={handleChange}>Guest User?</button>
          </div>
          {message && <p className="text-red-700 font-bold">{message}</p>}
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl mt-32 text-blue-950 font-bold">Quick to setup and book an appointment</h1>
        <div className="w-[900px] h-72 ml-[280px] my-20 flex">
          <div className="mr-20">
            <img src={appointment}  className="rounded-2xl"/>
            <h1 className="text-xl text-blue-950 font-bold mt-6 mb-2">Check for the Facility</h1>
            <p className="text-blue-800">Dive into the site, search for the facilities you want from the Engineer.</p>
          </div>
          <div className="mr-20">
            <img src={schedule} className="rounded-2xl"/>
            <h1 className="text-xl text-blue-950 font-bold mt-6 mb-2">Set your availability</h1>
            <p className="text-blue-800">Define your schedule, connect your calender and the right times will show on your bookin page</p>
          </div>
          <div>.                    
            <img src={booking} className="rounded-2xl -mt-6"/>
            <h1 className="text-xl text-blue-950 font-bold mt-6 mb-2">Watch the bookings fly in</h1>
            <p className="text-blue-800">As people start scheduling time with you, EAP provides a dashboard to manage your booking.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
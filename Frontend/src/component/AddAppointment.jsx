import { useState } from 'react'
import { IoLogIn } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddAppointment() {
  const [formData,setFormData] = useState({
    username: '',
    name: '',
    number: '',
    purpose: '',    
    date: null
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name ,value} = e.target;
    setFormData({...formData,[name]:value});
  };

  const handleSubmit = async(e)=>{
      e.preventDefault();

        const url = 'http://localhost:8080/Appointment/Add';
        try {
          const response = await axios.post(url,formData);
          console.log('Data successfully posted:', response.data);
          setFormData({
            username: '',
            name: '',
            number: '',
            purpose: '',
            date: ''
          });
          navigate('/');
        }
        catch (error) {
          console.error('Error while fetching data:', error.message);
        }
  };

  return (
    <div className="w-full items-center m-auto justify-center flex bg-[url('src/assets/Add_Appointment.jpg')]">
      <div className="px-10 my-8 py-5 pr-0 w-96 rounded-xl bg-sky-200 bg-opacity-70">
        <div className="pl-[80px] font-bold mb-2 mt-1">Add Appointment</div>
        <IoLogIn className='text-slate-800 w-72 h-8'/>
        <br/>
        <form onSubmit={handleSubmit}>
          <div className='text-center'>
            <div>
      <lable htmlFor="username" className="mr-16 mb-2" >User Name</lable> <br/>
      <input type='text'
      name='username'
      id='username'
      value={formData.username}
      onChange={handleChange}
      placeholder='username'
      required
      className='rounded-lg w-72 h-8 mr-12 mt-1 mb-4'
      />
    </div>
    <div>
      <lable htmlFor="name" className="mr-16 mb-2">Full Name</lable> <br/>
      <input type='text'
      name='name'
      id='name'
      value={formData.name}
      onChange={handleChange}
      placeholder='Full Name'
      required
      className='rounded-lg w-72 h-8 mr-12 mt-1 mb-4'
      />
    </div>
    <div>
      <lable htmlFor="number" className="mr-16 mb-2">Mobile Number</lable> <br/>
      <input type='number'
      name='number'
      id='number'
      value={formData.number}
      onChange={handleChange}
      placeholder='Mobile Number'
      required
      className='rounded-lg w-72 h-8 mr-12 mt-1 mb-4'
      />
    </div>
    <div>
      <lable htmlFor="purpose" className="mr-16 mb-2">Purpose</lable> <br/>
      <select
      id='purpose'
      name='purpose'
      value={formData.purpose}
      onChange={handleChange}
      required
      className='rounded-lg w-72 h-8 mr-12 mt-1 mb-4'>
        <option>Select option</option>
        <option>Project Planning</option>
        <option>Estimation</option>
        <option>Site Supervision</option>
        <option>Layout Planning</option>
        <option>Structural Design and Analysis</option>
        </select>
    </div>


<div>
      <lable htmlFor="date" className="mr-16 mb-2">Date for Appointment</lable> <br/>
      <input type='date'
      name='date'
      id='date'
      value={formData.date}
      onChange={handleChange}
      required
      className='rounded-lg w-72 h-8 mr-12 mt-1 mb-4'
      />
    </div>
    <div>
      <button type='submit' className='rounded-lg w-72 h-8 mt-2 mr-12 mb-4 bg-sky-50 hover:bg-sky-500'>Submit</button>
      </div>
      </div>
    </form>
    </div>
    </div>
  )
}

export default AddAppointment
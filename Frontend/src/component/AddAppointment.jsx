import React, { useState } from 'react'
import './css/AddAppointment.css'
import { IoLogIn } from "react-icons/io5";
import axios from 'axios';
function AddAppointment() {
  const [formData,setFormData] = useState({
    username: '',
    name: '',
    number: '',
    purpose: '',    
    date: null
  });

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
        }
        catch (error) {
          console.error('Error while fetching data:', error.message);
        }
  };

  return (
    <div className='Container'>
    <div className="text">Add Appointment</div>
    <div style={{ fontSize: '30px' }}>
    <IoLogIn />
    </div>
    <br/>
    <br/> 
    <form onSubmit={handleSubmit}>
    <div className='add-container'>
    <div>
      <lable htmlFor="username" className="text" >User Name</lable>
      <input type='text'
      name='username'
      id='username'
      value={formData.username}
      onChange={handleChange}
      placeholder='username'
      required
      />
    </div>
    <div>
      <lable htmlFor="name" className="text">Full Name</lable>
      <input type='text'
      name='name'
      id='name'
      value={formData.name}
      onChange={handleChange}
      placeholder='Full Name'
      required
      />
    </div>
    <div>
      <lable htmlFor="number" className="text">Mobile Number</lable>
      <input type='number'
      name='number'
      id='number'
      value={formData.number}
      onChange={handleChange}
      placeholder='Mobile Number'
      required
      />
    </div>
    <div>
      <lable htmlFor="purpose" className="text">Purpose</lable>
      <select
      id='purpose'
      name='purpose'
      value={formData.purpose}
      onChange={handleChange}
      required>
        <option>Select option</option>
        <option>Project Planning</option>
        <option>Estimation</option>
        <option>Site Supervision</option>
        <option>Layout Planning</option>
        <option>Structural Design and Analysis</option>
        </select>
    </div>


<div>
      <lable htmlFor="date" className="text">Date for Appointment</lable>
      <input type='date'
      name='date'
      id='date'
      value={formData.date}
      onChange={handleChange}
      required
      />
    </div>
    <div>
      <button type='submit'>Submit</button>
      </div>
      </div>
    </form>
    </div>
  )
}

export default AddAppointment
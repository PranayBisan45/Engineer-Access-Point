import React from 'react'
import AppointmentImage from "../assets/Appointment.jpg"
import Delete from "../assets/Delete Appointment.jpg"
import Update from "../assets/Update Appointment.jpg"
import All from "../assets/All Appointment.jpg"
import './css/Facilities.css'
import { GiClick } from "react-icons/gi";
import './css/Appointment.css'
import { NavLink } from 'react-router-dom'
function Appointment() {
  return (
    <div className='image'>
     <div className='projectName'>
     <NavLink to="/AddAppointment">
      Add Appointment
      </NavLink>
      <div className="imageContainer">
        <NavLink to="/AddAppointment">
        <img src={AppointmentImage} alt='Add Appointment Image' />
        <GiClick className="icon" />
        </NavLink>
      </div>
    </div>
    <div className='projectName'>
      Delete Appointment
      <div className="imageContainer">
        <img src={Delete} alt='Delete Appointment Image' />
        <GiClick className="icon" />
      </div>
    </div>
    <div className='projectName'>
      Update Appointment
      <div className="imageContainer">
        <img src={Update} alt='Delete Appointment Image' />
        <GiClick className="icon" />
      </div>
    </div>
    <div className='projectName'>
      All Appointments
      <div className="imageContainer">
        <img src={All} alt='All Appointment Image' />
        <GiClick className="icon" />
      </div>
    </div>
    </div>
  )
}

export default Appointment
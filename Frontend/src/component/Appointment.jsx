import AppointmentImage from "../assets/Appointment.jpg"
import Delete from "../assets/Delete Appointment.jpg"
import Update from "../assets/Update_Appointment.jpg"
import All from "../assets/All Appointment.jpg"
import { NavLink } from 'react-router-dom'
function Appointment() {
  const username = sessionStorage.getItem('username');
  const usertype = sessionStorage.getItem('usertype');
  return (
    <div className='flex flex-wrap mx-32'>
      <div className='w-[600px] h-[600px] mb-14'>
        {
          username==null || usertype==null ?
          <NavLink to="/Login" className='text-lg ml-52 font-bold'>
            Add Appointment
          </NavLink> :
          <NavLink to="/AddAppointment" className='text-lg ml-52 font-bold'>
          Add Appointment
          </NavLink>
        }
        <div className="w-[560px] h-[560px] mr-7 mt-2 rounded-2xl overflow-hidden">
          {
            username==null || usertype==null ?
            <NavLink to="/Login">
              <img src={AppointmentImage} className="rounded-2xl transform transition-transform duration-300 hover:scale-110" alt='Add Appointment Image' />
            </NavLink> :
            <NavLink to="/AddAppointment">
              <img src={AppointmentImage} className="rounded-2xl transform transition-transform duration-300 hover:scale-110" alt='Add Appointment Image' />
            </NavLink>
          }
        </div>
      </div>
    <div className='w-[600px] h-[600px] mb-14 ml-14'>
      {
        username==null || usertype==null ?
        <NavLink to="/Login" className='text-lg ml-52 font-bold'>
          Delete Appointment
        </NavLink> :
        <NavLink to="/DeleteAppointment" className='text-lg ml-52 font-bold'>
          Delete Appointment
        </NavLink>
      }
      <div className="w-[560px] h-[560px] mr-7 mt-2 overflow-hidden">
        {
          username==null || usertype==null ?
          <NavLink to="/Login">
            <img src={Delete} className="transform transition-transform duration-300 hover:scale-110" alt='Delete Appointment Image' />
          </NavLink> :
          <NavLink to="/DeleteAppointment">
            <img src={Delete} className="transform transition-transform duration-300 hover:scale-110" alt='Delete Appointment Image' />
          </NavLink>
        }
      </div>
    </div>
    <div className='w-[600px] h-[600px] mb-14'>
      {
        username==null || usertype==null ?
        <NavLink to="/Login" className='text-lg ml-52 font-bold'>
          Update Appointment
        </NavLink> :
        <NavLink to="/UpdateAppointment" className='text-lg ml-52 font-bold'>
          Update Appointment
        </NavLink>
      }
      <div className="w-[560px] h-[560px] mr-7 mt-2 rounded-2xl overflow-hidden">
      {
        username==null || usertype==null ?
        <NavLink to="/Login">
          <img src={Update} className="rounded-2xl transform transition-transform duration-300 hover:scale-110" alt='Update Appointment Image'/>
        </NavLink> :
        <NavLink to="/UpdateAppointment">
          <img src={Update} className="rounded-2xl transform transition-transform duration-300 hover:scale-110" alt='Update Appointment Image'/>
        </NavLink>
      }
      </div>
    </div>
    <div className='w-[600px] h-[600px] ml-14'>
    {
      username==null || usertype==null ?
      <NavLink to="/Login" className='text-lg ml-52 font-bold'>
        All Appointments
      </NavLink> :
      <NavLink to="/AllAppointment" className='text-lg ml-52 font-bold'>
        All Appointments
      </NavLink>
    }
    <div className="w-[560px] h-[560px] mr-7 mt-2 rounded-2xl overflow-hidden">
    {
      username==null || usertype==null ?
      <NavLink to="/Login">
        <img src={All} className="rounded-2xl transform transition-transform duration-300 hover:scale-110" alt='All Appointment Image' />
      </NavLink> :
      <NavLink to="/AllAppointment">
        <img src={All} className="rounded-2xl transform transition-transform duration-300 hover:scale-110" alt='All Appointment Image' />
      </NavLink>
    }
    </div>
    </div>
    </div>
  )
}

export default Appointment
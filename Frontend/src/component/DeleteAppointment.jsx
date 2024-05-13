import React, { useEffect, useState } from 'react'
import './css/AllAppointment.css'
import axios from 'axios'
function DeleteAppointment() {
  const [Appointment,setAppointment] = useState([]);

  const fetchAppointment = async ()=> {
    try {
    const url = "http://localhost:8080/Appointment/DummyData";
    const response = await axios.get(url);
    setAppointment(response.data);
    }
    catch (error) {
      console.error("Error fetching appointment data:", error);
    }
  }

  const deleteHandler = async(aid) => {
    try {
      const url = `http://localhost:8080/Appointment/Delete/${aid}`;
      const response = await axios.delete(url);
      fetchAppointment();
    }
    catch (error) {
      console.error("Error fetching appointment data:", error);
    }
  }

  useEffect(()=>{
      fetchAppointment(); 
  },[]);


  return (
    <div>
        <h1 className='heading'>Delete Appointment</h1>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Mob. Number</th>
              <th>Date of Appointment</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              Appointment.map((data,index) => (
              <tr key={index + 1}>                  
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.number}</td>
              <td>{data.date}</td>
              <td>{data.purpose}</td>
              <td>{data.status}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={()=>deleteHandler(data.aid)} >
                    Delete
                  </button>
              </td>
              </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default DeleteAppointment
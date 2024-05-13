import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/AllAppointment.css'
function AllAppointment() {
  const [appointmentData, setAppointmentData] = useState([]);

  const fetchAppointment = async () => {
    try {
      const url = "http://localhost:8080/Appointment/DummyData";
      const response = await axios.get(url);
      setAppointmentData(response.data);
    } catch (error) {
      console.error("Error fetching appointment data:", error);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []); 
  
  return (
    <div>
      <h1 className='heading'>All Appointments</h1>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Mob. Number</th>
            <th>Date of Appointment</th>
            <th>Purpose</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
          appointmentData.map((data, index) => (
            <tr key={index + 1}>
              <th scope="row">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.number}</td>
              <td>{data.date}</td>
              <td>{data.purpose}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllAppointment;

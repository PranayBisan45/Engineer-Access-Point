import { useEffect, useState } from 'react';
import axios from 'axios';

function AllAppointment() {
  const [appointmentData, setAppointmentData] = useState([]);

  const fetchAppointment = async () => {
    const username = sessionStorage.getItem('username');
    const usertype = sessionStorage.getItem('usertype');

    try {
      const url = `http://localhost:8080/Appointment/GetAll/${username}/${usertype}`;
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
      <h1 className='text-center font-bold mb-5 text-3xl'>All Appointments</h1>

      <table className="table table-hover ml-6">
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

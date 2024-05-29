import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosLock } from "react-icons/io";

const UpdateAppointment = () => {
  const [Appointment,setAppointment] = useState([]);
  const navigate = useNavigate();

  const username = sessionStorage.getItem('username');
  const usertype = sessionStorage.getItem('usertype');

  const fetchAppointment = async ()=> {
    
    try {
    const url = `http://localhost:8080/Appointment/GetAll/${username}/${usertype}`;
    const response = await axios.get(url);
    setAppointment(response.data);
    }
    catch (error) {
      console.error("Error fetching appointment data:", error);
    }
  }

  const updateHandler = async(aid,name,username,number,date,purpose) => {
    navigate("/Update", {
      state: {aid,name,username,number,date,purpose}
    })
  }

  useEffect(()=>{
      fetchAppointment(); 
  },[]);

  return (
    <div>
      <h1 className='text-center font-bold mb-5 text-3xl'>All Appointment</h1>
      <table className='table table-hover ml-6'>
        <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Mob. Number</th>
              <th>Date of Appointment</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Update</th>
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
              {
                usertype==='user' && data.status==='Approved' ||usertype==='user' && data.status==='Rejected' 
                ?  <td> <IoIosLock  className="ml-6 text-xl"/> </td>  :
                <td>
                  <button
                    className='btn btn-warning'
                    onClick={()=>updateHandler(data.aid,data.name,data.username,data.number,data.date,data.purpose)} >
                      Update
                    </button>
                </td>
              }
              </tr>
              ))
            }
          </tbody>
      </table>
    </div>
  )
}

export default UpdateAppointment
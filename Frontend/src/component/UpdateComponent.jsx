import axios from "axios";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";

const UpdateComponent = () => {
    const location = useLocation();
    const { aid, name, username, number, date, purpose, status } = location.state;
    const navigate = useNavigate();

    const usertype = sessionStorage.getItem('usertype');

    const [formData, setFormData] = useState({
        aid,
        name,
        username,
        number,
        date,
        purpose,
        status
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const userUrl = 'http://localhost:8080/Appointment/UpdateUser';
        const adminUrl = 'http://localhost:8080/Appointment/UpdateAdmin';
        let response;
        if(usertype==='engineer') {
            response = await axios.post(adminUrl,formData);
        } else {
            response = await axios.post(userUrl,formData);
        }
        
        if (response.status === 200) {
            navigate('/UpdateAppointment');
        } else {
            console.error("Failed to update appointment");
        }
    }
    catch (error) {
        console.error("Error fetching appointment data:", error);
    }
    };

    return (
        <div className="w-full items-center m-auto justify-center flex bg-[url('src/assets/Update_Appointment.jpg')]">
            <div className="px-10 my-8 py-5 pr-0 w-96 rounded-xl bg-yellow-900 bg-opacity-70">
                <h1 className='pl-[80px] font-bold mb-1 mt-1 text-white'>Update Component</h1>
                <GrDocumentUpdate className='text-white w-5 ml-[140px] h-8' />
                <br/>
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <div>
                            <label htmlFor="name" className='mr-16 mb-2 text-white'>Name </label> <br/>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='rounded-lg w-72 h-8 mr-12 mb-4'
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="mr-16 mb-2 text-white">Username </label>
                            <input
                                type='text'
                                name='username'
                                id='username'
                                value={formData.username}
                                onChange={handleChange}
                                className='rounded-lg w-72 h-8 mr-12 mb-4'
                            />
                        </div>
                        <div>
            <label htmlFor="number" className="mr-16 mb-2 text-white">Mobile No. </label>
            <input
            type='number'
            name='number'
            id='number'
            value={formData.number}
            onChange={handleChange}
            className='rounded-lg w-72 h-8 mr-12 mb-4'
        />
        </div>
        <div>
            <label htmlFor="date" className="mr-16 mb-2 text-white">Date of Appointment </label>
            <input
            type='date'
            name='date'
            id='date'
            value={formData.date}
            onChange={handleChange}
            className='rounded-lg w-72 h-8 mr-12 mb-4'
        />
        </div>
        <div>
            <label htmlFor="purpose" className="mr-16 mb-2 text-white">Purpose </label>
            <select
            id='purpose'
            name='purpose'
            value={formData.purpose}
            onChange={handleChange}
            className='rounded-lg w-72 h-8 mr-12 mb-4'
        >
            <option>Select option</option>
            <option>Project Planning</option>
            <option>Estimation</option>
            <option>Site Supervision</option>
            <option>Layout Planning</option>
            <option>Structural Design and Analysis</option>
        </select>
        </div>
        {usertype==='engineer' && (
        <div>
            <label htmlFor="status" className="mr-16 mb-2 text-white">Status </label>
            <select
                id='status'
                name='status'
                value={formData.status}
                onChange={handleChange}
                className='rounded-lg w-72 h-8 mr-12 mb-4'
            >
                <option>Select option</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Pending</option>
            </select>
        </div>
        )}
        <button type="submit" className='rounded-lg w-72 h-8 mr-12 mb-4 mt-4 bg-sky-50 hover:bg-yellow-800'>Update</button>
            </div>
        </form>
    </div>
    </div>
);
};

export default UpdateComponent;

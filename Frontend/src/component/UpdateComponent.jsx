import axios from "axios";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import './css/UpdateAppointment.css'
import { GrDocumentUpdate } from "react-icons/gr";

const UpdateComponent = () => {
    const location = useLocation();
    const { aid, name, username, number, date, purpose } = location.state;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        aid,
        name,
        username,
        number,
        date,
        purpose,
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
        const url = 'http://localhost:8080/Appointment/Update';
        const response = await axios.post(url,formData);
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
    <div className="container-update">
        <h5 className='text-update'>Update Component</h5>
        <div style={{ fontSize: '26px'}}>
        <GrDocumentUpdate />
        </div>
        <br/>
        <form onSubmit={handleSubmit}>
        <div className="add-update">
        <div>
            <label htmlFor="name" className="text">Name </label>
            <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
        />
        </div>
        <div>
            <label htmlFor="username" className="text">Username </label>
            <input
            type='text'
            name='username'
            id='username'
            value={formData.username}
            onChange={handleChange}
        />
        </div>
        <div>
            <label htmlFor="number" className="text">Mobile No. </label>
            <input
            type='number'
            name='number'
            id='number'
            value={formData.number}
            onChange={handleChange}
        />
        </div>
        <div>
            <label htmlFor="date" className="text">Date of Appointment </label>
            <input
            type='date'
            name='date'
            id='date'
            value={formData.date}
            onChange={handleChange}
        />
        </div>
        <div>
            <label htmlFor="purpose" className="text">Purpose </label>
            <select
            id='purpose'
            name='purpose'
            value={formData.purpose}
            onChange={handleChange}
        >
            <option>Select option</option>
            <option>Project Planning</option>
            <option>Estimation</option>
            <option>Site Supervision</option>
            <option>Layout Planning</option>
            <option>Structural Design and Analysis</option>
        </select>
        </div>
        <button type="submit">Update</button>
        </div>
        </form>
    </div>
);
};

export default UpdateComponent;

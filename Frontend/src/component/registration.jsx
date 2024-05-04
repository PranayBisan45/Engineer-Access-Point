import React, { useState } from 'react';
import './css/registration.css';
import logo from '../assets/Logo.jpg'
import { MdOutlineAppRegistration } from "react-icons/md";
function Registration() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        usertype: '',
        dob: '',
        username: '',
        password: '',
        mobile: '',
        address: '',
        zipcode: '',
        state: '',
        country: ''
    });

    const [warning, setWarning] = useState(false);
    const [userId, setUserId] = useState("");
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

      
      console.log("formBody:", formData);

            const URL = formData.usertype==="engineer" ? "http://localhost:8080/Engineer/Registration" : "http://localhost:8080/User/Registration"
            fetch(URL, {
                     method: "POST",
                     headers: {
                     "Content-Type": "application/json",
    },
                    body: JSON.stringify(formData),
})

            
            .then((response)=> response.text())
            .then((data)=> {
                if(data.startsWith("Registration_Failed!!")) {
                    setError(data);
                    setUserId("");
                    setWarning(true);
                    setTimeout(() => {
                    setWarning(false);
          }, 2000);
                } else {
                    setError("");
                    setUserId(data);
                  }
            })
            .catch((error) => {
                console.error("Error:", error);
                setError("An error occurred while processing your request.");
                setUserId("");
              });
        
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                usertype: '',
                dob: '',
                username: '',
                password: '',
                mobile: '',
                address: '',
                zipcode: '',
                state: '',
                country: ''
            });
    };

    return (
        <div className='screen'>
            <div className="content-container">
            <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="form-container">
            {/* <div className='logo'>
                <img src={logo} alt='Logo' />
            </div> */}
            <div>
               <div className='title'> 
                <h2>Sign Up</h2>
               </div>
               <div style={{ fontSize: '36px', color: 'darkslategray' }}>
               <MdOutlineAppRegistration />
               </div>
                
            </div>
            <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usertype">User Type</label>
          <select
            id="usertype"
            name="usertype"
            value={formData.usertype}
            onChange={handleChange}
            required
          >
            <option value="User Type">Select User Type</option>
            <option value="user">User</option>
            <option value="engineer">Engineer</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
                </div>
                </div>
                <div className="form-group">
                <div>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    minLength={6}
                />
            </div>
            </div>
            </div>
            <div className="form-row">
        <div className="form-group">
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{6,}$"
                    title="Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and have a minimum length of 6 characters."
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                />
            </div>
            </div>
            <div className="form-group">
            <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
            </div>
            </div>
            </div>
            <div className="form-row">
        <div className="form-group">
            <div>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            </div>
            <div className="form-group">
            <div>
                <label htmlFor="zipcode">Zip Code</label>
                <input
                    type="number"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    required
                    minLength={6}
                />
            </div>
            </div>
            </div>
            <div className="form-row">
            <div className="form-group">
            <div>
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />
            </div>
            </div>
            <div className="form-group">
            <div>
                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
            </div>
            </div>
            </div>
            <br></br>
            <button type="submit">Register</button>
        </form>
        </div>
        </div>
    );
}

export default Registration;

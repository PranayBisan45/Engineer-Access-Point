import React, { useState } from 'react';
import './css/Login.css'; 
import {NavLink} from 'react-router-dom';
import logo from '../assets/Logo.jpg'
// import login from '../assets/login.jpg'
import { IoPersonCircleSharp } from "react-icons/io5";
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    usertype: '',
    password: ''
  });

  const [ecode, setECode] = useState(false);
  const [edata, setEData] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handleSetEcode = (e) => {
    if (e.target.value === "engineer") {
      setECode(true);
    } else {
      setECode(false);
      setEData("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "ecode") {
      setEData(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = formData.usertype === "engineer" && edata === "Engg@Ok"
        ? `http://localhost:8080/Engineer/Login?username=${formData.username}&password=${formData.password}&usertype=${formData.usertype}`
        : `http://localhost:8080/User/Login?username=${formData.username}&password=${formData.password}&usertype=${formData.usertype}`;

      const data = await fetch(url);
      const response = await data.text();
      console.log(response);
      console.log(formData);

      if (response === "Login Successful") {
        localStorage.setItem("userid", formData.username);
        setFormData({
          username: '',
          usertype: '',
          password: ''
        });
        setEData('');
      } else {
        setInvalid(true);
        setTimeout(() => {
          setInvalid(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className='logo'>
        <img src={logo} alt='Logo'/>
      </div>
      {/* <img src={login} className='login' alt='login'/> */}
      <div style={{ fontSize: '36px', color: 'darkslategray' }}>
  <IoPersonCircleSharp />
      </div>
      <div className="title"><h2>Log In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username' className='whiteText'>User Name</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='usertype' className='whiteText'>User Type</label>
          <select
            id='usertype'
            name='usertype'
            value={formData.usertype}
            onChange={(e) => { handleChange(e); handleSetEcode(e) }}
            required
          >
            <option>Select User Type</option>
            <option value="user">User</option>
            <option value="engineer">Engineer</option>
          </select>
        </div>
        {ecode && (
          <div>
            <label htmlFor="ecode" className='whiteText'>Engg Secret Code</label>
            <input
              type='password'
              id='ecode'
              name='ecode'
              value={edata}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="password" className='whiteText'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{6,}$"
            title="Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and have a minimum length of 6 characters."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
      {invalid ? (
        <h4 className="error-message">Invalid Credentials</h4>
      ) : (
        ""
      )}
      <div>
        <br/> <br/>
        <div>
          <NavLink to="/registration">Registration</NavLink>
        </div>
        <div>
          <NavLink to="/ForgotPassword">Forgot Password</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;

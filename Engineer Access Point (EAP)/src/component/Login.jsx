import React, { useState } from 'react';
import './css/Login.css'; // Import external CSS file

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
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>User Name</label>
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
          <label htmlFor='usertype'>User Type</label>
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
            <label htmlFor="ecode">Engg Secret Code</label>
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
          <label htmlFor="password">Password</label>
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
        <button type='submit'>Log In</button>
      </form>
      {invalid ? (
        <h4 className="error-message">Invalid Credentials</h4>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;

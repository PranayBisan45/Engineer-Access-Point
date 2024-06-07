import  { useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import { useLogin } from './Context';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    usertype: '',
    password: ''
  });

  const [ecode, setECode] = useState(false);
  const [edata, setEData] = useState('');
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();
  const {LoggedIn,checkLogin} = useLogin()
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

      if (response === "Login Successful") {
        sessionStorage.setItem("username", formData.username);
      
        sessionStorage.setItem("usertype", formData.usertype);
        setFormData({
          username: '',
          usertype: '',
          password: ''
        });
        setEData('');
        checkLogin(true);
        console.log(LoggedIn)
        navigate('/');
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
    <div className="w-full items-center m-auto justify-center flex bg-[url('src/assets/Login.jpg')]">
      <div className="px-10 my-8 py-5 pr-0 w-96 rounded-xl bg-sky-200 bg-opacity-70">
      <IoPersonCircleSharp  className='text-slate-800 w-72 h-8'/>
      <h2 className="pl-[120px] font-bold mb-4 mt-1">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className='text-center'>
        <div>
          <label htmlFor='username' className='mr-16 mb-2'>User Name</label> <br/>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
            className='rounded-lg w-72 h-8 mr-12 mb-4'
          />
        </div>
        <div>
          <label htmlFor='usertype' className='mr-16 mb-2'>User Type</label> <br/>
          <select
            id='usertype'
            name='usertype'
            value={formData.usertype}
            onChange={(e) => { handleChange(e); handleSetEcode(e) }}
            required
            className='rounded-lg w-72 h-8 mr-12 mb-4'
          >
            <option>Select User Type</option>
            <option value="user">User</option>
            <option value="engineer">Engineer</option>
          </select>
        </div>
        {ecode && (
          <div>
            <label htmlFor="ecode" className='mr-16 mb-2'>Engg Secret Code</label>
            <input
              type='password'
              id='ecode'
              name='ecode'
              value={edata}
              onChange={handleChange}
              required
              className='rounded-lg w-72 h-8 mr-12 mb-4'
            />
          </div>
        )}
        <div>
          <label htmlFor="password" className='mr-16 mb-2'>Password</label> <br/>
          <input
            type='password'
            name='password'
            id='password'
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{6,}$"
            title="Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and have a minimum length of 6 characters."
            value={formData.password}
            onChange={handleChange}
            required
            className='rounded-lg w-72 h-8 mr-12 mb-4'
          />
        </div>
        <br />
        <button type='submit' className='rounded-lg w-72 h-8 mr-12 mb-4 bg-sky-50 hover:bg-sky-500'>Submit</button>
        </div>
      </form>
      {invalid ? (
        <h4 className="error-message text-red-900">Invalid Credentials</h4>
      ) : (
        ""
      )}
      <div>
        <br/>
        <div className='text-center mr-12'> New User?
          <NavLink to="/registration" className='text-blue-900 font-bold'> Registration</NavLink>
        </div>
        <div className='text-center mr-12'>
          <NavLink to="/ForgotPassword" className='text-blue-900 font-bold'>Forgot Password</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;

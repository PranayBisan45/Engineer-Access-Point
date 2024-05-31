import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpg';
import image from '../assets/Profile.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Profile from './Profile';

const Navbar = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const profileRef = useRef(null);

  const handleProfileClick = () => {
    setProfileVisible(true);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      setProfileVisible(false);
    }, 10000);
    setTimer(newTimer);
  };

  // const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileVisible(false);
      if (timer) {
        clearTimeout(timer);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  const usertype = sessionStorage.getItem('usertype');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (usertype != null) {
      setLoggedIn(true);
    }
  }, [usertype]);

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('usertype');

      setLoggedIn(false);

      // navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleLogin = async () => {
    setLoggedIn(false);
  };

  return (
    <div className="position-relative">
      <div className='flex fixed bg-white z-10 w-full'>
        <a className="" href="/">
          <img src={Logo} className='mr-44 ml-3 my-2 h-20 w-20 rounded-3xl' alt="Logo" loading="lazy" />
        </a>
        <a className="mr-10 my-8 text-lg font-bold text-blue-700" href="Home">
          Home 
        </a>
        <a className="mr-10 text-lg my-8 font-bold text-blue-700" href="Facilities">
          Facilities
        </a>
        <a className="mr-10 text-lg my-8 font-bold text-blue-700" href="Appointment">
          Appointment
        </a>
        {
          loggedIn ? (
            <button className="mr-auto text-lg mb-[12px] font-bold text-blue-700" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <a className="mr-auto text-lg my-8 font-bold text-blue-700" href="Login" onClick={handleLogin}>
              Login
            </a>
          )
        }
        
        <div className="position-relative">
          <img src={image} className="h-10 my-8 ml-[800px] rounded-3xl mr-20 cursor-pointer" loading="lazy" onClick={handleProfileClick}/>
          {profileVisible && (
            <div ref={profileRef} className="position-absolute rounded mt-2 p-2 shadow" style={{ right: 0 }}>
              <Profile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

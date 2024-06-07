import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpg';
import image from '../assets/Profile.png';
import { useNavigate, NavLink } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import Profile from './Profile';
import { useLogin } from './Context';

const Navbar = () => {
  const navigate = useNavigate();
  const {LoggedIn,checkLogin} = useLogin()
  const [showProfile,checkShowProfile] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = () => {
    sessionStorage.removeItem('usertype');
    sessionStorage.removeItem('username');

    checkLogin(false);
    navigate("/");
  }

  const handleProfile =() => {
    checkShowProfile(!showProfile)
  }

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      checkShowProfile(false);
    }
  };

  if(sessionStorage.getItem("username")==null && sessionStorage.getItem("usertype")==null) {
    checkLogin(false)
  }
  else {
    checkLogin(true)
  }

  useEffect(() => {
    if (showProfile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfile]);

  return (
    <div className="position-relative">
      <div className='flex fixed bg-white z-10 w-full'>
        <NavLink to="/Home">
          <img src={Logo} className='mr-44 ml-3 my-2 h-20 w-20 rounded-3xl' alt="Logo"  />
        </NavLink>
        <NavLink to="/Home">
          <div className="mr-10 my-8 text-lg font-bold text-blue-700">
            Home 
          </div>
        </NavLink>
        <NavLink to="/Facilities">
          <div className="mr-10 text-lg my-8 font-bold text-blue-700">
            Facilities
          </div>
        </NavLink>
        <NavLink to="/Appointment">
          <div className="mr-10 text-lg my-8 font-bold text-blue-700">
            Appointment
          </div>
        </NavLink>
        {
          LoggedIn ? (
            <button className="mr-auto text-lg mb-[12px] font-bold text-blue-700" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/Login">
              <div className="mr-auto text-lg my-8 font-bold text-blue-700">
                Login
              </div>
            </NavLink>
          )
        }

        <div className="position-relative" ref={profileRef}>
          <img src={image} className="h-10 my-8 ml-[800px] rounded-3xl mr-20 cursor-pointer" onClick={handleProfile}/>
            <div className="position-absolute rounded mt-2 p-2 shadow" style={{ right: 0 }}>
              { showProfile && <Profile /> }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

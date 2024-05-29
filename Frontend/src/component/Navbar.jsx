import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpg';
import image from '../assets/image.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  // const navigate = useNavigate();
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
  }
  
  return (
    <div className='flex fixed bg-white z-10'>
      <a className="" href="/">
        <img src={Logo} className='mr-44 ml-3 my-2 h-20 w-20' alt="Logo" loading="lazy" />
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
      
      <a className="" href="#">
        <img src={image} className="h-10 my-8 ml-[800px] rounded-3xl mr-20" loading="lazy"/>
        <h1>{sessionStorage.getItem('username')}</h1>
        <h1>{sessionStorage.getItem('usertype')}</h1>
      </a>
    </div>
  );
};

export default Navbar;
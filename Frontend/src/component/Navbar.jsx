import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpg';
import image from '../assets/image.png';

const Navbar = () => {
  return (
    <div className='flex fixed bg-white'>
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
      <a className="mr-[800px] my-8 text-lg font-bold text-blue-700" href="Login">
        Login
      </a>
      <a className="" href="#">
        <img src={image} className="h-10 my-8 rounded-3xl" loading="lazy"/>
      </a>
    </div>
  );
};

export default Navbar;
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.jpg';
import image from '../assets/image.png';

const Navbar = () => {
  const usertype = sessionStorage.getItem('usertype');

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
        usertype ? (
          <a className="mr-auto text-lg my-8 font-bold text-blue-700" href="Logout">
            Logout
          </a>
        ) : (
          <a className="mr-auto text-lg my-8 font-bold text-blue-700" href="Login">
            Login
          </a>
        )
      }
      
      <a className="" href="#">
        <img src={image} className="h-10 my-8 ml-[800px] rounded-3xl mr-20" loading="lazy"/>
      </a>
    </div>
  );
};

export default Navbar;
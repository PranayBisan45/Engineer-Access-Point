import  { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

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
                    navigate("/");
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
      <div className="w-full items-center m-auto justify-center flex bg-[url('src/assets/Registration.jpg')]">
        <div className="px-4 my-8 py-5 pr-0 w-96 rounded-xl bg-amber-950 bg-opacity-60">
          <form onSubmit={handleSubmit} className="form-container">
            <div className='text-center mr-12'> 
              <h2 className='pl-8 text-white font-bold'>Sign Up</h2>
              <div>
              <MdOutlineAppRegistration className='text-white mt-2 mb-4 pl-7 w-72 h-8'/>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="firstname" className='ml-10 mb-1 text-white'>First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
              <div>
                <label htmlFor="lastname" className='ml-10 mb-1 text-white'>Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="email" className='ml-14 mb-1 text-white'>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
              <div>
                <label htmlFor="usertype" className='ml-10 mb-1 text-white'>User Type</label>
                  <select
                    id="usertype"
                    name="usertype"
                    value={formData.usertype}
                    onChange={handleChange}
                    required
                    className='rounded-lg w-40 h-7 mb-3'
                  >
                    <option value="User Type">Select User Type</option>
                    <option value="user">User</option>
                    <option value="engineer">Engineer</option>
                  </select>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="dob" className='ml-9 mb-1 text-white'>Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
              <div>
                <label htmlFor="username" className='ml-10 mb-1 text-white'>User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="password" className='ml-12 mb-1 text-white'>Password</label>
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
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
              <div>
                <label htmlFor="mobile" className='ml-6 mb-1 text-white'>Mobile Number</label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="address" className='ml-12 mb-1 text-white'>Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
              <div>
                <label htmlFor="zipcode" className='ml-12 mb-1 text-white'>Zip Code</label>
                <input
                  type="number"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="state" className='ml-14 mb-1 text-white'>State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
              <div>
                <label htmlFor="country" className='ml-12 mb-1 text-white'>Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className='rounded-lg w-40 h-7 mb-3'
                />
              </div>
            </div>
            <br/>
            <button type="submit" className='rounded-lg w-72 h-8 mr-12 ml-6  mb-4 bg-sky-50 hover:bg-amber-900'>Register</button>
            <div className='text-center'>
          already a user?  
          <NavLink to= "/login" className='text-white font-bold'> Login </NavLink>
        </div>
        </form>
        </div>
      </div>
    );
}

export default Registration;

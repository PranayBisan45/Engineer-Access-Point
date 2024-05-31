import axios from "axios";
import { useState } from "react";
import { BsUnlockFill } from "react-icons/bs";
import { useNavigate} from 'react-router-dom';

const NewPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        password: '',
        username: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        var username = formData.username;
        var password = formData.password;

        try {
            const url = `http://localhost:8080/User/NewPassword/${password}/${username}`;
            const response = await axios.put(url);

            if(response) {
                setFormData({
                    password: '',
                    username: ''
                })
                navigate('/Login');
            }
        }
        catch (error) {
            console.error('Fetch error:', error);
        }
    }

return (
    <div className="w-full items-center min-h-screen m-auto flex justify-center bg-[url('src/assets/Forgot_Password.jfif')]">
        <div className='bg-yellow-800 bg-opacity-70 text-center mx-[600px] px-10 py-5 pr-0 w-96 rounded-xl'>
            <form onSubmit={handleSubmit}>
                <BsUnlockFill className='mb-1 text-2xl ml-[114px]' />
                <h1 className="font-bold text-xl mr-12 mb-5">Reset Password</h1>
                <lable htmlFor="password" className='font-bold mr-12'> New Password</lable> <br/>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className='rounded-lg w-64 h-8 mt-2 mb-4 mr-10'
                    required
                />
                <lable htmlFor="username" className='font-bold mr-12'>Username</lable> <br/>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    className='rounded-lg w-64 h-8 mt-2 mr-10'
                    required
                />
                <button type='submit' className='bg-sky-50 mt-5 px-3 py-1 mr-10 rounded-lg hover:bg-yellow-500'>Submit</button>
            </form>
        </div>
    </div>
)
}

export default NewPassword
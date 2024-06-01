import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {
    const username = sessionStorage.getItem('username');
    const usertype = sessionStorage.getItem('usertype');

    const [formData,setFormData] = useState({
        username:'',
        mobile:'',
        email:'',
        address:'',
        dob:''
    })
    const fetchProfile = async () => {
    try {
        let url =''

        if(username === 'guest') {
            setFormData({
                username:'Guest',
                mobile:'1234567890',
                email:'guest@gmail.com',
                address:'India',
                dob:'01/01/2001'
            }) 
        } else {
        if(usertype==='engineer'){
            url = "http://localhost:8080/Engineer/Profile";
        }
        else {
            url = "http://localhost:8080/User/Profile";
        }

        const response = await axios.get(url, {
            params: { username }
        });
        setFormData(response.data);
    }  } catch (error) {
        console.error("Error fetching appointment data:", error);
    }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

return (
    <div className='bg-sky-400 text-left w-80 rounded-xl items-end  px-4 py-4'>
        <span className='font-bold'>Username : </span> {formData.username} <br/>
        <span className='font-bold'>Mobile No. : </span> {formData.mobile} <br/>
        <span className='font-bold'>Email : </span> {formData.email} <br/>
        <span className='font-bold'>Address : </span> {formData.address} <br/>
        <span className='font-bold'>DOB : </span> {formData.dob}
    </div>
)
}

export default Profile
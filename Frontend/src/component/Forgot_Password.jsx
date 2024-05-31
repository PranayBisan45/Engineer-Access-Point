// import axios from 'axios';
// import { useState } from 'react'
// import { useNavigate} from 'react-router-dom';
// import emailjs from 'emailjs-com';
// import { IoIosLock } from "react-icons/io";

// const Forgot_Password = () => {
//     const navigate = useNavigate();
//     var OTP = null;
//     const [formData, setFormData] = useState ({
//         username: '',
//         email: ''
//     });

//     const [invalid, setInvalid] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     }
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/User/ForgotPassword"
//             const response = await axios.get(url, {
//                 params: {
//                     username: formData.username,
//                     email: formData.email
//                 }
//             });

//             if(response) {
//                 OTP = Math.floor(1000 + Math.random() * 9000);

//                 const verify = "http://localhost:8080/User/Verify"
//                 await axios.post(verify,OTP)

//                 const emailParams = {
//                     username: formData.username,
//                     email: formData.email,
//                     OTP: OTP
//                 };

//                 emailjs.send(
//                     'service_9r3wusg', 
//                     'template_mue1eyl',
//                     emailParams,
//                     'vL_jIrElYHf8yJfsp'
//                 ).then((result) => {
//                     console.log(result.text);
//                     alert('OTP sent successfully!');
//                     setFormData({
//                         uername: '',
//                         email: '',
//                     });
//                 }, (error) => {
//                     console.log(error.text);
//                     alert('Failed to send OTP.');
//                 });

//                 navigate('/OTP');
//                 console.log(OTP)
//             }
//             else {
//                 setInvalid(true);
//                 setTimeout(() => {
//                 setInvalid(false);
//                 }, 3000);
//             }
//         }
//         catch (error) {
//             console.error('Fetch error:', error);
//             setInvalid(true);
//             setTimeout(() => {
//             setInvalid(false);
//             }, 3000);
//         }
//     }

//     return (
//         <div className="w-full items-center min-h-screen m-auto flex justify-center bg-[url('src/assets/Forgot_Password.jfif')]">
//             <div className='bg-yellow-800 bg-opacity-70 text-center mx-[600px] px-10 py-5 pr-0 w-96 rounded-xl'>
//                 <form className='mr-8' onSubmit={handleSubmit}>
//                     <IoIosLock className='mb-1 text-2xl ml-28' />
//                     <h1 className='font-bold text-xl mb-4'>Forgot Password</h1>
//                     <div>
//                     <lable htmlFor="username" className='font-bold'>Username</lable> <br/>
//                     <input 
//                         type='text'
//                         name='username'
//                         id='username'
//                         onChange={handleChange}
//                         className='rounded-lg w-64 mt-2 h-8 mb-4'
//                         required
//                     />
//                     </div>
//                     <div>
//                     <lable htmlFor="email" className='font-bold'>Email</lable> <br/>
//                     <input 
//                         type='email'
//                         name='email'
//                         id='email'
//                         onChange={handleChange}
//                         className='mt-2 rounded-lg h-8 w-64'
//                         required
//                     />
//                     </div>
//                     <button type='submit' className='bg-sky-50 mt-5 px-2 py-1 rounded-lg hover:bg-yellow-500'>Send OTP</button>
//                 </form>
//                 {invalid ? (
//                     <h4 className="error-message text-white mt-2 mr-6">Invalid Credentials</h4>
//                     ) : (
//                     ""
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Forgot_Password










// import axios from 'axios';
// import { useState } from 'react'
// import { useNavigate} from 'react-router-dom';
// // import emailjs from 'emailjs-com';
// import { IoIosLock } from "react-icons/io";

// const Forgot_Password = () => {
//     const navigate = useNavigate();
//     var OTP = null;
//     const [formData, setFormData] = useState ({
//         username: '',
//         email: ''
//     });

//     const [invalid, setInvalid] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     }
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/User/ForgotPassword"
//             const response = await axios.get(url, {
//                 params: {
//                     username: formData.username,
//                     email: formData.email
//                 }
//             });

//             if(response) {
//                 OTP = Math.floor(1000 + Math.random() * 9000);

//                 const verify = "http://localhost:8080/User/Verify"
//                 await axios.post(verify,OTP)

//                 const emailParams = {
//                     Messages: [
//                         {
//                             From: {
//                                 Email: 'pranaybisann@gmail.com',
//                                 Name: 'Pranay Bisan'
//                             },
//                             To: [
//                                 {
//                                     Email: formData.email
//                                 }
//                             ],
//                             Subject: 'OTP for Password Reset',
//                             TextPart: `Your OTP is ${OTP}.`
//                         }
//                     ]
//                 };

//                 const mailjetApiKey = 'f924148abbf94a6c5b73919e674155e1';
//                 const mailjetApiSecret = '167b3f8b83cd11f8b19413fa395cca65';

//                 await axios.post('https://api.mailjet.com/v3.1/send', emailParams, {
//                     auth: {
//                         username: mailjetApiKey,
//                         password: mailjetApiSecret
//                     }
//                 });

//                 alert('OTP sent successfully!');
//                 setFormData({
//                     username: '',
//                     email: '',
//                 });

//                 navigate('/OTP');
//             } else {
//                 setInvalid(true);
//                 setTimeout(() => {
//                     setInvalid(false);
//                 }, 3000);
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//             setInvalid(true);
//             setTimeout(() => {
//                 setInvalid(false);
//             }, 3000);
//         }
//     }

//     return (
//         <div className="w-full items-center min-h-screen m-auto flex justify-center bg-[url('src/assets/Forgot_Password.jfif')]">
//             <div className='bg-yellow-800 bg-opacity-70 text-center mx-[600px] px-10 py-5 pr-0 w-96 rounded-xl'>
//                 <form className='mr-8' onSubmit={handleSubmit}>
//                     <IoIosLock className='mb-1 text-2xl ml-28' />
//                     <h1 className='font-bold text-xl mb-4'>Forgot Password</h1>
//                     <div>
//                     <lable htmlFor="username" className='font-bold'>Username</lable> <br/>
//                     <input 
//                         type='text'
//                         name='username'
//                         id='username'
//                         onChange={handleChange}
//                         className='rounded-lg w-64 mt-2 h-8 mb-4'
//                         required
//                     />
//                     </div>
//                     <div>
//                     <lable htmlFor="email" className='font-bold'>Email</lable> <br/>
//                     <input 
//                         type='email'
//                         name='email'
//                         id='email'
//                         onChange={handleChange}
//                         className='mt-2 rounded-lg h-8 w-64'
//                         required
//                     />
//                     </div>
//                     <button type='submit' className='bg-sky-50 mt-5 px-2 py-1 rounded-lg hover:bg-yellow-500'>Send OTP</button>
//                 </form>
//                 {invalid ? (
//                     <h4 className="error-message text-white mt-2 mr-6">Invalid Credentials</h4>
//                     ) : (
//                     ""
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Forgot_Password





import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosLock } from "react-icons/io";

const Forgot_Password = () => {
    const navigate = useNavigate();
    var OTP = null;
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    const [invalid, setInvalid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/User/ForgotPassword"
            const response = await axios.get(url, {
                params: {
                    username: formData.username,
                    email: formData.email
                }
            });

            if (response.data) {
                OTP = Math.floor(1000 + Math.random() * 9000);

                const verifyUrl = "http://localhost:8080/User/Verify";
                await axios.post(verifyUrl, { otp: OTP, username: formData.username });

                const emailParams = {
                    Messages: [
                        {
                            From: {
                                Email: 'pranaybisann@gmail.com',
                                Name: 'Pranay Bisan'
                            },
                            To: [
                                {
                                    Email: formData.email
                                }
                            ],
                            Subject: 'OTP for Password Reset',
                            TextPart: `Your OTP is ${OTP}.`
                        }
                    ]
                };

                const mailjetApiKey = 'f924148abbf94a6c5b73919e674155e1';
                const mailjetApiSecret = '167b3f8b83cd11f8b19413fa395cca65';

                await axios.post('https://api.mailjet.com/v3.1/send', emailParams, {
                    auth: {
                        username: mailjetApiKey,
                        password: mailjetApiSecret
                    }
                });

                alert('OTP sent successfully!');
                setFormData({
                    username: '',
                    email: '',
                });

                navigate('/OTP');
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
    }

    return (
        <div className="w-full items-center min-h-screen m-auto flex justify-center bg-[url('src/assets/Forgot_Password.jfif')]">
            <div className='bg-yellow-800 bg-opacity-70 text-center mx-[600px] px-10 py-5 pr-0 w-96 rounded-xl'>
                <form className='mr-8' onSubmit={handleSubmit}>
                    <IoIosLock className='mb-1 text-2xl ml-28' />
                    <h1 className='font-bold text-xl mb-4'>Forgot Password</h1>
                    <div>
                        <label htmlFor="username" className='font-bold'>Username</label> <br />
                        <input
                            type='text'
                            name='username'
                            id='username'
                            onChange={handleChange}
                            className='rounded-lg w-64 mt-2 h-8 mb-4'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='font-bold'>Email</label> <br />
                        <input
                            type='email'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            className='mt-2 rounded-lg h-8 w-64'
                            required
                        />
                    </div>
                    <button type='submit' className='bg-sky-50 mt-5 px-2 py-1 rounded-lg hover:bg-yellow-500'>Send OTP</button>
                </form>
                {invalid ? (
                    <h4 className="error-message text-white mt-2 mr-6">Invalid Credentials</h4>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default Forgot_Password;

import axios from "axios";
import { useState } from "react";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router";

const OTP = () => {
    let navigate = useNavigate();

    const [invalid, setInvalid] = useState(false);

    const [formData, setFormData] = useState({
        num1: '',
        num2: '',
        num3: '',
        num4: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let otp = formData.num1 + formData.num2 + formData.num3 + formData.num4;

        const url = "http://localhost:8080/User/OTP";
        try {
            const response = await axios.post(url,otp);
            console.log("response is " +response.data)
            if (response.data == true) {
                setFormData({
                    num1: '',
                    num2: '',
                    num3: '',
                    num4: ''
                });

                navigate("/NewPassword");
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="w-full items-center min-h-screen m-auto flex justify-center bg-[url('src/assets/Forgot_Password.jfif')]">
            <div className="bg-yellow-800 bg-opacity-70 text-center mx-[600px] px-10 py-5 pr-0 w-96 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <IoIosLock className='mb-1 text-2xl ml-[104px]' />
                    <h1 className="font-bold text-xl mr-12 mb-5">OTP</h1>
                    <input 
                        type="text"
                        name="num1"
                        id="num1"
                        maxLength={1}
                        minLength={1}
                        value={formData.num1}
                        onChange={handleChange}
                        className="w-10 h-10 mr-4 rounded-lg -ml-7 text-center"
                        required
                    />
                    <input 
                        type="text"
                        name="num2"
                        id="num2"
                        maxLength={1}
                        minLength={1}
                        value={formData.num2}
                        onChange={handleChange}
                        className="w-10 h-10 mr-4 rounded-lg text-center"
                        required
                    />
                    <input 
                        type="text"
                        name="num3"
                        id="num3"
                        maxLength={1}
                        minLength={1}
                        value={formData.num3}
                        onChange={handleChange}
                        className="w-10 h-10 mr-4 rounded-lg text-center"
                        required
                    />
                    <input 
                        type="text"
                        name="num4"
                        id="num4"
                        maxLength={1}
                        minLength={1}
                        value={formData.num4}
                        onChange={handleChange}
                        className="w-10 h-10 mr-4 rounded-lg text-center"
                        required
                    /> <br />
                    <button type="submit" className="mt-4 mr-10 bg-blue-50 px-2 py-1 rounded-lg font-bold hover:bg-yellow-500">Verify</button>
                </form>
                {invalid && (
                    <h4 className="error-message text-white mt-2 mr-6">Invalid Credentials</h4>
                )}
            </div>
        </div>
    );
};

export default OTP;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/registration'
import Facilities from './component/Facilities'
import Appointment from './component/Appointment'
import AddAppointment from './component/AddAppointment'
import DeleteAppointment from './component/DeleteAppointment'
import AllAppointment from './component/AllAppointment'
import UpdateAppointment from './component/UpdateAppointment'
import UpdateComponent from './component/UpdateComponent'
import Forgot_Password from './component/Forgot_Password'
import OTP from './component/OTP'
import NewPassword from './component/NewPassword'
import PageNotFound from './component/PageNotFound'
import LoginProvider from './component/Context'


function App() {

  return (
  <>
    <LoginProvider>
    <BrowserRouter>
      <Navbar/>
      <div className='pt-28'/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element ={<Registration/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Facilities" element={<Facilities/>} />
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path="/AddAppointment" element={<AddAppointment/>} />
        <Route path="/DeleteAppointment" element={<DeleteAppointment/>} />
        <Route path="/AllAppointment" element={<AllAppointment/>} />
        <Route path="/UpdateAppointment" element={<UpdateAppointment/>} />
        <Route path="/Update" element={<UpdateComponent/>} />
        <Route path="/ForgotPassword" element={<Forgot_Password/>} />
        <Route path="/OTP" element={<OTP/>} />
        <Route path="/NewPassword" element={<NewPassword/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </LoginProvider>
  </>
  )
}

export default App

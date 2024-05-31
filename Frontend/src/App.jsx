// import { useState } from 'react'
import './App.css'
import AllRouting from './Routing/AllRouting'
import Footer from './component/Footer'
// import Home from './component/Home'
import Navbar from './component/Navbar'
// import Login from './component/Login'
// import Registration from './component/registration'

function App() {

  return (
    <>
      <Navbar/>     
      <div className="pt-[130px]"></div>
      <AllRouting/>
      <Footer/>
    </>
  )
}

export default App

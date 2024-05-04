// import { useState } from 'react'
import './App.css'
import AllRouting from './Routing/AllRouting'
import Home from './component/Home'
import Navbar from './component/Navbar'
// import Login from './component/Login'
// import Registration from './component/registration'

function App() {

  return (
    <>
      {/* Wrapper */}
      <Navbar/>     
      <div className="content-container"></div>          
      <AllRouting/>
    </>
  )
}

export default App

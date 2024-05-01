import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Registration from "../component/registration";
import Home from "../component/Home";


const AllRouting = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element ={<Registration/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default AllRouting
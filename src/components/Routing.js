import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './spa/Home';
import About from './spa/About';
import Reservation from './spa/Reservatoin';
import Login from './spa/Login';
import Confirmation from './spa/Confirmation';
import Orders from './spa/Orders';



function Main () {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/reservation" element={<Reservation/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/confirmation" element={<Confirmation/>} />
        </Routes>
    );
}


export default Main;
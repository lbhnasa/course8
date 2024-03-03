import React from 'react'
import {Routes, Route} from 'react-router-dom';
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
            <Route path="/About" element={<About/>} />
            <Route path="/Reservation" element={<Reservation/>} />
            <Route path="/Orders" element={<Orders/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Confirmation" element={<Confirmation/>} />
            
        </Routes>
    )
}


export default Main;
import React from "react";
import logo from '../images/Logo.svg'

function Nav() {
 return (
    <nav>
       
    <ul>
        <a href='/'>
        <img src={logo} alt='logo'/>
        </a>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/">About</a>
        </li>
        <li>
            <a href="/">Services</a>
        </li>
        <li>
            <a href="/">Reservation</a>
        </li>
        <li>
            <a href="/">Menu</a>
        </li>
        <li>
            <a href="/">Online Order</a>
        </li>
        <li>
            <a href="/">Log in</a>
        </li>
    </ul>
    </nav>
 )
}

export default Nav;
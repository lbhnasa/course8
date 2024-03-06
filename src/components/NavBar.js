import React from "react";
import { Link } from "react-router-dom"


function NavBar(props)  {
    return(
        <menu>
            {props.device === "mobile" ? (
                ""
                ) : (
            <Link to ='/'>
                <img 
                    src={require("../images/Logo.svg")}
                    alt="Little Lemon Logo"/>
            </Link>
        )}
        <Link to='/'>
            <h1>Home</h1>
        </Link>
        <Link to='/about'>
            <h1>About</h1>
        </Link>
        <Link to='/menu'>
            <h1>Menu</h1>
        </Link>
        <Link to='/reservation'>
            <h1>Reservation</h1>
        </Link>
        <Link to='/order'>
            <h1>Order</h1>
        </Link>
        <Link to='/login'>
            <h1>Login</h1>
        </Link>
        </menu>
    )
}


export default NavBar;
import React from 'react-dom'
import { Link } from "react-router-dom"


function NavBar(props)  {
    return(
        <ul className='navbar-menu'>
            
            <Link to ='/'>
                <img  className="nav-image"
                    src={require("../images/logo.png")}
                    alt="Little Lemon Logo2"/>
            </Link>

        <Link className="hover-effect" to='/'>
            <h1>Home</h1>
        </Link>
        <Link className="hover-effect" to='/about'>
            <h1>About</h1>
        </Link>
        <Link className="hover-effect" to='/menu'>
            <h1>Menu</h1>
        </Link>
        <Link className="hover-effect" to='/reservation'>
            <h1>Reservation</h1>
        </Link>
        <Link className="hover-effect" to='/order'>
            <h1>Order</h1>
        </Link>
        <Link className="hover-effect" to='/login'>
            <h1>Login</h1>
        </Link>
        </ul>
    )
}


export default NavBar;
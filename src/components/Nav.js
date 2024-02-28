import { useState } from "react";
import NavBar from './NavBar';
import Hamburger from '../images/hamburger.png';
import Close from '../images/close.png';


const [navActive, setNavActive] = useState("");
function handleToggle() {
     setNavActive(!navActive);
}

function Nav() {
    return(
        <nav>
            <img
            src={require('../images/logo.png')}
            alt='Little Lemon Logo'
            >
            
            </img>
        </nav>
    )
}

export default Nav;
import { useState } from "react";
import NavBar from './NavBar';
import logo from '../images/logo.png';
import Hamburger from '../images/hamburger.png';
import Close from '../images/close.png';

function Nav() {

const [navActive, setNavActive] = useState(false);
function handleToggle() {
     setNavActive(!navActive);
}

    return(
    <nav>
      <img
        src={logo}
        alt='Little Lemon Logo'/>

        <button onClick={handleToggle}>
            <img src={navActive ? Close : Hamburger} alt="Ative or inactive NavBar"/>
        </button>
      
        <NavBar device='desktop'/>
        {navActive ? <NavBar device="mobile"/> : ""}
    </nav>
    );
}

export default Nav;
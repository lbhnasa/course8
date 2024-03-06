import React from 'react';
import { Link }  from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <menu>
                <li>
                    <img src={require("../images/footer-logo.png")} alt="Footer Logo"/>
                </li>
                <li>
                    <h1>Navigation</h1>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to ='/about'>About</Link>
                        <Link to ='/order'>Order</Link>
                        <Link to ='/reservation'>Reservation</Link>
                        <Link to ='/login'>Login</Link>
                    </ul>
                </li>

                <li>
                    <h1>Contact</h1>
                        <ul>
                            <li>2395 Maldove Way,</li>
                            <li>Chicago Illinois</li>
                            <br/>
                            <a 
                            href='mailto: info@littlelemon.com'
                            target="_blank"
                            rel="noreferrer">info@littlelemon.com</a>
                        </ul>
                </li>
                <li>
                    <h1>Connet</h1>
                    <ul>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" >FaceBook</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">instagram</a>
                    </ul>
                </li>
            </menu>
        </footer>
    )
}

export default Footer;
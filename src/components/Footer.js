import React from 'react';
import { Link }  from 'react-router-dom';

function Footer() {
    return(
        <footer className="footer">
                <li className='footer-list'>
                    <img className="footer-logo" src={require("../images/footer-logo.png")} alt="Footer Logo"/>
                </li>
                <li className='footer-list'>
                    <h1 className='footer-header'>Navigation</h1>
                    <ul>
                        <Link className='footer-link' to='/'>Home</Link>
                        <Link className='footer-link' to ='/about'>About</Link>
                        <Link className='footer-link' to ='/order'>Order</Link>
                        <Link className='footer-link' to ='/reservation'>Reservation</Link>
                        <Link className='footer-link' to ='/login'>Login</Link>
                    </ul>
                </li>

                <li className='footer-list'>
                    <h1>Contact</h1>
                        <ul className="footer-list">
                            <li>2395 Maldove Way,</li>
                            <li>Chicago Illinois</li>
                            <br/>
                            <a 
                            href='mailto: info@littlelemon.com'
                            target="_blank"
                            rel="noreferrer">info@littlelemon.com</a>
                        </ul>
                </li>
                <li className='footer-list'>
                    <h1>Connect</h1>
                    <ul>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" >FaceBook</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">instagram</a>
                    </ul>
                </li>
        </footer>
    )
}

export default Footer;
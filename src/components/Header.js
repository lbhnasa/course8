import React from 'react'
import bannerImg from '../images/bannerImg.jpg'

function Header() {
 return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owend Mediterraneran restaurant,
                    focused on traditional recipes served with a moderm twist. </p>
                <button className="reserveTable" as='a' href="/" >Reserve Table</button>
            </div>
            <div className="bannerImg">
                <img src={bannerImg} alt="bannerImage"/>
            </div>
        </section>


    </header>
 )

}


export default Header;
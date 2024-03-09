import {Link} from 'react-router-dom';

function Heading() {
    return(
        <header>
            <article className='call-to-action'>
                <section className='hero-text'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="introduction">
                    We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.
                    </p>
                    <br/>
                    <Link className="reservationBtn" to='./reservation'>Reservation</Link>
                </section>
                      <img className="hero-image" src={require('../../images/bannerImg.jpg')} alt="Header image"/>
            </article>
        </header>
    )
}

export default Heading;
import { Link } from "react-router-dom"


function NavBar(props)  {
    return(
        <menu>
            {props.device === "mobile" ? ("") :
                (
                    <Link to ='/'>
                        <img 
                            src={require("../images/Logo.svg")}
                            alt="Little Lemon Logo">
                        </img>

                    </Link>
                )}
        <Link to='/'>
            <h1>Home</h1>
        </Link>
        <Link to='/About'>
            <h1>About</h1>
        </Link>
        <Link to='/Menu'>
            <h1>Menu</h1>
        </Link>
        <Link to='/Reservation'>
            <h1>Reservation</h1>
        </Link>
        <Link to='/Order'>
            <h1>Order</h1>
        </Link>
        <Link to='/Login'>
            <h1>Login</h1>
        </Link>
        </menu>

    )
}


export default NavBar;
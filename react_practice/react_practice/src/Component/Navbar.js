import React from 'react'
import { Link,NavLink,withRouter } from 'react-router-dom'
const Navbar =  (props) =>{
    //nu avem props de aceea folosim withRouter la export
    // setTimeout(() => {
    //          props.history.push('/about')
    //      },2000);
    return(
        <nav className="nav.nav-warpper.red.darken-3">
            <div className="container">
                <a className="brand-logo">Poke's Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedInLinks =  (props) =>{
    
    return(
        <ul className="right">
            <li><NavLink to="/create">New project</NavLink></li>
            <li><NavLink to="/signup">Log out</NavLink></li>
            <li><NavLink to="/dashboard" className='btn btn-floating blue lighten-1'>NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
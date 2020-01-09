import React from 'react'
import { Link, NavLink , withRouter} from 'react-router-dom'
import icon from '../dog.png'
import mylogo from '../mylogo.png'

const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <a href = "/" className="left, brand-logo">Nathalie Ng</a>
            <ul className="right">
    
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
        </nav>
    )
}

export default withRouter(Navbar)
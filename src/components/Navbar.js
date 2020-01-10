import React from 'react'
import { Link, NavLink , withRouter} from 'react-router-dom'
import icon from '../dog.png'
import mylogo from '../mylogo.png'

const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <a href = "/" className="center, brand-logo">Nathalie Ng</a>
            <ul className="right">
    
                <li><NavLink to="/" className="nav">Home</NavLink></li>
                <li><NavLink to="/about" className="nav">Projects</NavLink></li>
                <li><NavLink to="/contact" className="nav">Contact</NavLink></li>

            </ul>
        </nav>
    )
}

export default withRouter(Navbar)
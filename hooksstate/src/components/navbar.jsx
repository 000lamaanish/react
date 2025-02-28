import React from 'react'
import "./navbar.css";
const navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <div className='nnav'>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar

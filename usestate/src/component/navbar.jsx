import React from 'react'
import "./navbar.css"
const navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar
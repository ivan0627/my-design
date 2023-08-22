import React from "react"
import '../styles/Navbar.css'
import designLogo from '../images/logo-black.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
    <div className="navbar_container">   
        
        <div className="logo_container">
            <img src= {designLogo} ></img>
        </div>
        
        <nav className="navbar">
           <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/furniture'>Furniture</Link></li>
                <li><Link to='/kitchen'>Kitchen</Link></li>
                <li><Link to='/Room'>Room</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>

        </nav>

    </div>
    )
}

export default Navbar
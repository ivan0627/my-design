import React from "react"
import '../styles/Navbar.css'
import designLogo from '../images/logo-black.png'
import { Link, useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const handleClickHome = () =>{
        navigate(`/Home`)
    }
    return(
    <div className="navbar_container">   
        
        <div className="logo_container">
            <img src= {designLogo} onClick={handleClickHome}></img>
        </div>
        
        <nav className="navbar">
           <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/ProductsAPI'>Products</Link></li>
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
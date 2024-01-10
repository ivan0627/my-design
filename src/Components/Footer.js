import React from "react";
import logoWhite from '../images/logo-white.png'
import '../styles/Footer.css'
import { Link, useNavigate } from 'react-router-dom';

function Footer () {

    const navigate = useNavigate();

const handleClickMaintentace= () =>{
    navigate(`/Maintenance`)}


    return(
        <div className="footer">
            <div className="logoFooter">
                <div className="logoFooter_container">
                    <img src={logoWhite}></img>
                </div>
            </div>


            <div className='footerOptions'>
                <ul>
                    <li>Customer Service</li>
                    <li>Terms & conditions</li>
                    <li>Help Center</li>
                    <li>Data protection</li>
                    <li onClick={handleClickMaintentace}><Link to='/Maintenance'></Link>Maintenance</li>
                </ul>
            </div>

            <div className="newsletter">
                <form>
                    <h3>Subscribe to our newsletter!</h3>
                    <label>Email: </label>
                    <input type='email' placeholder='example@example.com'></input>
                    <br></br>
                    <button id="buttonSubscribe">Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default Footer
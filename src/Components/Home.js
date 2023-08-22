import React from "react";
import '../styles/Home.css'
import live from '../images/Home/home_live.jpg'
import { Link } from 'react-router-dom';

function Home () {
    return(
        <div className="home_container">
            <div id="live">
                <h2>Live your style</h2>
            </div>

            <div className="apartado">
                <div id="kitchen"  >
                   <h2><Link to='/kitchen'> Kitchen</Link> </h2>
                </div>

                <div id="bedroom">
                    <h2>Bedroom</h2>
                </div>
            </div>

            <div id="all">
                <h2>All</h2>
            </div>

        </div>
    )
}

export default Home
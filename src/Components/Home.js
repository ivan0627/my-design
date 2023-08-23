import React from "react";
import '../styles/Home.css'
import banner from '../images/Home/banner.jpg'
import live from '../images/Home/home_live.jpg'
import { Link, useNavigate } from 'react-router-dom';


function Home () {

const navigate = useNavigate();

const handleClickKitchen = () =>{
    navigate(`/kitchen`)}
const handleClickFurniture = () =>{
    navigate(`/furniture`)}
const handleClickRoom = () =>{
    navigate(`/room`)}
const handleClickAll= () =>{
    navigate(`/products`)}

    return(
        <div>
            <div className="home_container">
                
                <div id="live" onClick={handleClickFurniture}>
                    <h2><Link to='/furniture'> Furniture</Link> </h2>
                </div>            

                <div className="apartado">
                    
                    <div id="kitchen" onClick={handleClickKitchen}>
                        <h2><Link to='/kitchen'> Kitchen</Link> </h2>
                    </div>
                    
                    <div id="bedroom" onClick={handleClickRoom}>
                        <h2><Link to='/room'> Bedroom</Link> </h2>
                    </div>
                    
                </div>

                <div id="all" onClick={handleClickAll}>
                    <h2><Link to='/products'> All</Link> </h2>
                </div>

            </div>

            <div className="banner">
                <div className="banner_image">
                    
                        <img src={banner}/>
                   
                    </div>
                <div className="banner_content">           

                    <h2>Discover Premium Quality Products</h2>
                    <p>Explore our wide range of furniture and decor designed to enhance your lifestyle.</p>
                    <br></br>
                    <div className="contenedorBotonHome">
                    <Link to='/products' className="banner-button">
                        <button id="buttonShopHome">Shop Now</button></Link>
                    </div>
                </div>
            </div>

           

        </div>
    )
}

export default Home
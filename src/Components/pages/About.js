import React from "react";
import '../../styles/About.css'
import logo from '../../images/logo-black.png'
import image from '../../images/Home/aboutUs.jpg'

function About () {
    return(
        <div>
            <h1>About Us</h1>

            <h2>Our Story</h2>
            <p>Founded in 2023, MyDesign has been on a journey to curate a wide range of home products designed to cater to all your needs. What sets us apart is our commitment to quality and customer satisfaction. We understand that your home is a reflection of your unique style and personality, and we take pride in offering a diverse collection of products that cater to a variety of tastes and preferences.</p>

            <img src={logo} ></img>

            <h2>Why Choose Us?</h2>
            <p>
            <strong>Wide Selection:</strong> Explore our extensive catalog of home products, from furniture to decor, kitchen essentials to bedding, and everything in between. We're your one-stop shop for all your home needs.
            <br></br>
            <strong>Quality Assurance:</strong> We source products from trusted suppliers and ensure that every item meets our rigorous quality standards. Your satisfaction is our top priority.
            <br></br>
            <strong>Affordability:</strong> We believe that creating a beautiful and comfortable home should be accessible to everyone. Our competitive prices ensure that you can achieve your dream space without breaking the bank.
            <br></br>
            <strong>Exceptional Customer Service:</strong> Our dedicated customer support team is here to assist you every step of the way, from product selection to post-purchase support.
            <br></br>
            <strong>Fast and Reliable Shipping:</strong> We offer swift and secure shipping options to get your products to your doorstep as quickly as possible.</p>
            <br></br>
            <img src={image} ></img>
        </div>
    )
}

export default About
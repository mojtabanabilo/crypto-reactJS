import React from 'react';
import "./Footer.css";

// icons
import instagram from "../../assets/icons8-instagram-30.png";
import twitter from "../../assets/icons8-twitter-30.png";
import googlePlus from "../../assets/icons8-google-plus-30.png";
import facebook from "../../assets/icons8-facebook-30.png";
import youtube from "../../assets/icons8-youtube-24.png";

const Footer = () => {
    return (
        <footer>
            <div className='icons'>
                <div className='bIcon'>
                    <img src={instagram} alt="icons"/>
                </div>
                <div className='bIcon'>
                    <img src={twitter} alt="icons"/>
                </div>
                <div className='bIcon'>
                    <img src={youtube} alt="icons"/>
                </div>
                <div className='bIcon'>
                    <img src={facebook} alt="icons"/>
                </div>
                <div className='bIcon'>
                    <img src={googlePlus} alt="icons"/>
                </div>
            </div>
            <div className='p1'>
                <a href='#'>HOME</a>
                <a href='#'>ABOUT</a>
                <a href='#'>SERVICES</a>
                <a href='#'>GALLERY</a>
                <a href='#'>CONTACT US</a>
            </div>
            <div className='p2'>
                <a href='#'>PRODUCT</a>
                <a href='#'>NEW</a>
                <a href='#'>BLOG</a>
                <a href='#'>MEDIA</a>
            </div>
        </footer>
    );
};

export default Footer;
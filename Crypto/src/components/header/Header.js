import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';

// image
import logo from "../../assets/logo.png";
import searchLogo from "../../assets/icons8-search-26.png";

const Header = ({userData,userDataSet}) => {
    const navigator = useNavigate();
    return (
        <header>
            <div className='section-1'>
                <img src={logo} alt="logo"/>
                <h2>Bitco Web</h2>
            </div>
            <div className='section-2'>
                <img src={searchLogo} alt="search-logo"/>
                <input type="text" placeholder='search' value={userData} onChange={event => userDataSet(event.target.value)}/>
                <button onClick={() => navigator("/signup", {replace: true})}><strong>Sign Up</strong></button>
            </div>
        </header>
    );
};

export default Header;
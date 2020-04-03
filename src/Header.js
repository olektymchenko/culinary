import React from 'react';
import Logo from './img/utensils-solid.svg';
import './Header.css';

const Header = () => {

    return (
        <div className="headerLogo">
            <div><img src={Logo} alt="Logo"></img></div>
            <div><span>CulinaryHelper</span></div>
        </div>
    );
};
export default Header;
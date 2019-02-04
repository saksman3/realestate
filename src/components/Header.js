import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="page-header">
            <div className="logo">Logo</div>
            <div className="menu-wrapper">
               <div className="left-menu">
                <ul>
                    <li><a href="/">Articles</a></li>
                    <li><a href="/">Guides</a></li>                   
                </ul>
                </div>
                <div className="right-menu">
                    <ul>
                    <li><a href="/">LOGIN</a></li>
                    <li className="user"><a href="/">REGISTER</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;
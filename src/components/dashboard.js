import React from 'react';
import '../styles/dashboard.css';

const dashboard = () => {
    return (
        <React.Fragment>
            <div className="home-section-container">
                <div className="home-content-box">
                    <h1 className="home__content_header">Home is where the heart is</h1>
                    <input type="text" className="search-box"/>
                    <h4>GUESSWORK = GONE</h4>
                    <p>"Our All-In Monthly Pricing search includes estimated property taxes, HOA fees, PMI, utilities, insurance and closing costs to help take the surprises out of buying a home."</p>
                </div>
            </div>
            <div className="houses">
                <div className="house-box"></div>
            </div>
        </React.Fragment>
    );
};

export default dashboard;
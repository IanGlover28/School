import React from 'react';
import './Navigation.css';
import icon from './Component/Assets/icon.png';

const Navigation = () => {

  return (
    
    <div class="header">
        <div class="header-container">
            <img src={icon.png} alt=""/>
            <h1><span>Subheader</span></h1>
        </div>
        <nav class="nav">
            <div class="nav-link">
                <ul>
               
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navigation;

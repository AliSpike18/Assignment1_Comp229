// src/components/Navigation.js

/**
 * File name: navigation.css
 * Student's Name: Ali Qamber Zaidi
 * Student ID: 301415368
 * Date: 09/27/24
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.webp'; 
import './navigation.css'; 

const Navigation = () => {
    return (
  <nav className="navigation">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
    );
};

export default Navigation; 
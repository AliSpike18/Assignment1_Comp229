// src/pages/Home.js

/**
 * File name: home.js
 * Student's Name: Ali Qamber Zaidi
 * Student ID: 301415368
 * Date: 09/27/24
 */

import React from 'react';
import './home.css';
import profilePic from '../assets/Ali.jpg';

const Home = () => ( 
      <div className="home">
        <div className="home-content">
          <div className="home-image">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="home-text">
            <h1>Welcome to my portfolio!</h1>
            <p>
            "Hi my name is Ali Qamber Zaidi and I am in currently in my 2nd year at Centennial College. I have worked on multiple projects throughout my 2 years including web development and Oracle sql. I love gaming and I believe that's where my interest in programming came from!"
            </p>
            <a href="/about" className="btn">Learn More About Me</a>
          </div>
        </div>
      </div>
    );
  
  
  export default Home;

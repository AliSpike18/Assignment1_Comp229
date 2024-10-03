// src/pages/About.js

/**
 * File name: about.js
 * Student's Name: Ali Qamber Zaidi
 * Student ID: 301415368
 * Date: 09/27/24
 */

import React from 'react';
import './about.css';
import profilePic from '../assets/zaidi.png'; 

const About = () => {
    return (
  <div className="about">
    <div className="about-content">
      <div className="about-image">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>Hey guys! My name is Ali Qamber Zaidi and I'm currently study software engineering technology at Centennial College Progess Campus.</p><p> My interest in programming came from when I was so interested in finding out how these massive games are made, oh I forgot to tell you guys I love gaming haha! I felt like I wasn't good enough but when I joined College I just felt like a new person who completely underestimated himself.</p>
        <p>I believe in customer satisfaction and convenience so I strive on doing the best I can to make sure all customers are satisfied with the service I provide.</p>
      </div>
    </div>
  </div>
);

};


export default About;

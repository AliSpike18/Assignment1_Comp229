// src/pages/Projects.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */

import React from 'react';
import './projects.css';

import image1 from '../assets/project1.png';
import image2 from '../assets/project2.png';
import image3 from '../assets/project3.png';

const projects = [
  {
    title: "Generating Tables",
    description: "Generating tables with many columns and rows!",
    image: image1,
  },
  {
    title: "Interactive Slideshow",
    description: "Interactive Slideshow with beautiful images",
    image: image2,
  },
  {
    title: "Billing Page",
    description: "Midterm project of a billing page",
    image: image3,
  }
];


const Projects = () =>  (
  <div className="projects">
    <h1>My Projects</h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div></div>
        </div>
      ))}
    </div>
  </div>
    );
export default Projects;

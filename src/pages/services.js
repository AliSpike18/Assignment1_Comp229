// src/pages/Services.js

/**
 * File name: Navigation.css
 * Student's Name: Jiyanne Kate Tuazon
 * Student ID: 301320584
 * Date: 09/27/24
 */


import React from 'react';
import './services.css';
import webDevImage from '../assets/webdesigner.png';
import graphicDesign from '../assets/GFX.jpeg';
import SQL from '../assets/sql.jpeg';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'One of our biggest strengths is doing web development as we have done many thoughout College and for our clients. Our team is keen on providing excellent services to help build companies websites that will attract anyone who goes to their website.',
    image: webDevImage,
  },
  {
    id: 2,
    title: 'Graphic Design',
    description:
      'We have some amazing GFX members who started doing graphic designs as a hobby but later their skills translated to full time careers. Not only do they help us make websites more attractive they also do layouts as per requests to make sure customer needs are met',
    image: graphicDesign,
  },
  {
    id: 3,
    title: 'Oracle Database',
    description:
      'The interest in building databases and data mangement is why we first started as a team. Not only can we make full databases but we also provide queries for certain data that may need to extracted or seen.',
    image: SQL,
  },
];

const Services = () => (
    <div className="services">
      <h1>My Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );


export default Services;

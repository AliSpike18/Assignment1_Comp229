import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import Navigation from './components/navigation.js';
import Home from './pages/home.js';
import About from './pages/about.js'; // Correct import for About
import Projects from './pages/projects.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js'; // Correct import for Contact
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Corrected Home */}
          <Route path="/about" element={<About />} />  {/* Corrected About */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />  {/* Corrected Contact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
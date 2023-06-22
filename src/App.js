import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar2';
import Home from './components/pages/home';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import AboutMe from './components/pages/about-me';

export default function App() {

  useEffect(() => {
    document.title = "Riley's React Website"; // Set the desired title
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};



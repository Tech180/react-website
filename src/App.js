import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/frontend/UI/navbar2';
import Home from './components/frontend/UI/pages/home';
import Resume from './components/frontend/UI/pages/resume';
import Contact from './components/frontend/UI/pages/contact';
import AboutMe from './components/frontend/UI/pages/about-me';

export default function App() {

  useEffect(() => {
    document.title = "Riley's React Website";
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



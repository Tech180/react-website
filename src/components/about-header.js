import React, { useState, useEffect } from 'react';
import '../App.css';
import './about-header.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

function AboutHeader() {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  return (
    <div className={darkMode ? 'about-header-container-dark' : 'about-header-container'}>
      <h1>
        <span>about me</span>
      </h1>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
    </div>
  );
}

export default AboutHeader;

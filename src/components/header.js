import React, { useState, useEffect } from 'react';
import '../App.css';
import './header.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

function Header() {
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
    <div className={darkMode ? 'header-container-dark' : 'header-container'}>
      <h1>
        <span>software</span>
        <hr />
        <span>engineer</span>
      </h1>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
    </div>
  );
}

export default Header;

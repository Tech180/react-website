import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Darklight } from './darklight';

import './navbar2.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(cookies.darkMode === 'true');
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };
  
  const toggleNav = () => setNav(!nav);

  const isMobile = windowWidth <= 740;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (nav) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [nav]);

  return (
    <div className="navbar">
      {isMobile && (
        <>
          <i
            className={`fas fa-bars ${nav ? 'active' : ''} ${darkMode ? 'fas fa-bars-dark' : 'fas fa-bars'}`}
            onClick={toggleNav}
          ></i>
        </>
      )}

      <div className={darkMode ? 'logo-dark' : 'logo'}>
        <h2>Riley Lawson</h2>
      </div>

      <ul className="nav-menu">
        <li>
          <a href="/" className={`nav-link ${darkMode ? 'nav-link-dark' : 'nav-link'}`}>
            Home
          </a>
        </li>
        <li>
          <a href="/resume" className={`nav-link ${darkMode ? 'nav-link-dark' : 'nav-link'}`}>
            Resume
          </a>
        </li>
        <li>
          <a href="/about-me" className={`nav-link ${darkMode ? 'nav-link-dark' : 'nav-link'}`}>
            About Me
          </a>
        </li>

        {!isMobile && (
          <div className="darklight-container">
            <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={true} />
          </div>
        )}
      </ul>

      <div className={`${nav ? 'mobile-menu active' : 'mobile-menu'} ${darkMode ? 'mobile-menu-dark' : 'mobile-menu'}`}>
        <div className="mobile-menu-top">
          <ul className="mobile-nav">
            <li>
              <a href="/" className={`nav-link ${darkMode ? 'nav-link-dark' : 'nav-link'}`}>
                Home
              </a>
            </li>
            <li>
              <a href="/resume" className={`nav-link ${darkMode ? 'nav-link-dark' : 'nav-link'}`}>
                Resume
              </a>
            </li>
            <li>
              <a href="/about-me" className={`nav-link ${darkMode ? 'nav-link-dark' : 'nav-link'}`}>
                About Me
              </a>
            </li>
          </ul>

          <div className="mobile-menu-bottom">
            <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={true} />

            <div className="social">
              <a
                className="social-link facebook"
                href="https://www.facebook.com/riley.lawson.161/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                className="social-link instagram"
                href="https://www.instagram.com/the_real_wild/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className={darkMode ? 'social-link github-dark' : 'social-link github'}
                href="https://github.com/Tech180"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >

                <i className="fab fa-github-square" />
              </a>
              <a
                className="social-link twitter"
                href="https://twitter.com/Tech1808"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter-square" />
              </a>
              <a
                className="social-link linkedin"
                href="https://www.linkedin.com/in/riley-lawson-a7a65b203/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>

            <i className={`fas fa-times ${nav ? 'active' : ''} ${darkMode ? 'fas fa-times' : 'fas fa-times-dark'}`} onClick={toggleNav}></i>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Darklight } from './toggle/darklight';

// Import converted CSS constants
import {
  navbarStyles,
  navMenuStyles,
  navLinkStyles,
  navLinkDarkStyles,
  logoStyles,
  logoDarkStyles,
  mobileMenuStyles,
  socialStyles,
  socialLinkStyles,
  mediaStyles,
  mobileMediaStyles,
} from './navbarStyles';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cookies] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(cookies.darkMode === 'true');

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

  useEffect(() => {
    setDarkMode(cookies.darkMode === 'true');
  }, [cookies.darkMode]);

  return (
    <>
      <div style={navbarStyles}>
        {isMobile && (
          <i
            className={`fas fa-bars ${nav ? 'active' : ''} ${darkMode ? 'fas fa-bars-dark' : ''}`}
            onClick={toggleNav}
          ></i>
        )}

        <div style={{ ...logoStyles, ...(darkMode && logoDarkStyles) }}>
          <h2>Riley Lawson</h2>
        </div>

        <ul style={navMenuStyles}>
          <li>
            <a href="/" style={{ ...navLinkStyles, ...(darkMode && navLinkDarkStyles) }}>
              Home
            </a>
          </li>
          <li>
            <a href="/resume" style={{ ...navLinkStyles, ...(darkMode && navLinkDarkStyles) }}>
              Resume
            </a>
          </li>
          <li>
            <a href="/about-me" style={{ ...navLinkStyles, ...(darkMode && navLinkDarkStyles) }}>
              About Me
            </a>
          </li>

          {!isMobile && (
            <div style={mediaStyles.darklightContainer}>
              <Darklight darkMode={darkMode} showToggle={true} />
            </div>
          )}
        </ul>

        <div
          style={{
            ...mobileMenuStyles,
            ...(nav && { left: 0 }),
            ...(darkMode && mobileMediaStyles.mobileMenuDark),
          }}
          className={`mobile-menu ${nav ? 'active' : ''} ${darkMode ? 'mobile-menu-dark' : ''}`}
        >
          <div style={mediaStyles.mobileMenuTop}>
            <ul style={mobileMediaStyles.mobileNav}>
              <li>
                <a href="/" style={{ ...navLinkStyles, ...(darkMode && navLinkDarkStyles) }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/resume" style={{ ...navLinkStyles, ...(darkMode && navLinkDarkStyles) }}>
                  Resume
                </a>
              </li>
              <li>
                <a href="/about-me" style={{ ...navLinkStyles, ...(darkMode && navLinkDarkStyles) }}>
                  About Me
                </a>
              </li>
            </ul>

            <div style={mobileMediaStyles.mobileMenuBottom}>
              <Darklight darkMode={darkMode} showToggle={true} />

              <div style={socialStyles}>
                <a
                  className="social-link facebook"
                  href="https://www.facebook.com/riley.lawson.161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ ...socialLinkStyles, color: '#3b5998' }}
                >
                  <i className="fab fa-facebook-square" />
                </a>
                <a
                  className="social-link instagram"
                  href="https://www.instagram.com/the_real_wild/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ ...socialLinkStyles, color: '#d62976' }}
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className={`social-link github ${darkMode ? 'github-dark' : ''}`}
                  href="https://github.com/Tech180"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ ...socialLinkStyles, ...(darkMode && { color: 'white' }) }}
                >
                  <i className="fab fa-github-square" />
                </a>
                <a
                  className="social-link twitter"
                  href="https://twitter.com/Tech1808"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{ ...socialLinkStyles, color: '#00acee' }}
                >
                  <i className="fab fa-twitter-square" />
                </a>
                <a
                  className="social-link linkedin"
                  href="https://www.linkedin.com/in/riley-lawson-a7a65b203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ ...socialLinkStyles, color: '#0072b1' }}
                >
                  <i className="fab fa-linkedin" />
                </a>
              </div>

              <i
                className={`fas fa-times ${nav ? 'active' : ''} ${darkMode ? '' : 'fas fa-times-dark'}`}
                onClick={toggleNav}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

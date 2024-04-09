import React, { useState, useEffect } from 'react';
import './footer.css';
import { Button } from '../buttons/button';
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Darklight } from '../toggle/darklight';

function Footer() {
  const location = useLocation();
  const [cookies] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  // Check if the current page is the Email page
  const contact = location.pathname === '/contact';

  // Render the "Want to get in contact?" section only on non-Email pages
  const contactPage = !contact && (
    <section className={darkMode ? 'footer-subscription-dark' : 'footer-subscription'}>
      <p className={darkMode ? 'footer-subscription-heading-dark' : 'footer-subscription-heading'}>
        Want to get in contact?
      </p>
      <form>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <Button buttonStyle='outline'>Click Here!</Button>
        </Link>
      </form>
    </section>
  );

  <Darklight darkMode={darkMode} showToggle={false} />

  return (
    <div className={darkMode ? 'footer-container-dark' : 'footer-container'}>
      {contactPage}
      <section className={darkMode ? 'social-media-dark' : 'social-media-dark'}>
        <div className={darkMode ? 'social-media-wrap-dark' : 'social-media-wrap'}>
          <small className={darkMode ? 'website-rights-dark' : 'website-rights'}>Riley Lawson © 2024</small>
          <small className={darkMode ? 'react-made-dark' : 'react-made'}>
            Made with React
          </small>
          <div className={darkMode ? 'social-icons-dark' : 'social-icons'}>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/riley.lawson.161/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/the_real_wild/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className={darkMode ? 'social-icon-link github-dark' : 'social-icon-link github'}
              href='https://github.com/Tech180'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/Tech1808'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/riley-lawson-a7a65b203/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react';
import './cards.css';
import CardItem from './cardItem';
import { useCookies } from 'react-cookie';
import { Darklight } from './darklight';

function Cards() {
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
    <div className={darkMode ? 'cards-dark' : 'cards'}>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      <h1>Check out what I have been up to!</h1>
      <div className={darkMode ? 'cards__container-dark' : 'cards__container'}>
        <div className={darkMode ? 'cards__wrapper-dark' : 'cards__wrapper'}>
          <ul className={darkMode ? 'cards__items-dark' : 'cards__items'}>
            <CardItem
              src="/images/github.png"
              text="Explore my GitHub and check out some of the projects that I've been working on!"
              label="GitHub"
              path="https://github.com/Tech180"
              darkMode={darkMode}
            />
            <CardItem
              src="/images/linkedin.png"
              text="Check out my profile!"
              label="LinkedIn"
              path="https://www.linkedin.com/in/riley-lawson-a7a65b203/"
              darkMode={darkMode}
            />
          </ul>
          <ul className={darkMode ? 'cards__items-dark' : 'cards__items'}>
            <CardItem
              src="/images/twitter.png"
              text="Want to look at something I bearly use? Look no further!"
              label="Twitter"
              path="https://twitter.com/Tech1808"
              darkMode={darkMode}
            />
            <CardItem
              src="/images/facebook.png"
              text="Feel like stalking my personal life? Got you covered ;)"
              label="Facebook"
              path="https://www.facebook.com/riley.lawson.161/"
              darkMode={darkMode}
            />
            <CardItem
              src="/images/instagram.png"
              text="If you are really trying to dig deep... Then I guess you could look here too."
              label="Instagram"
              path="https://www.instagram.com/the_real_wild/"
              darkMode={darkMode}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

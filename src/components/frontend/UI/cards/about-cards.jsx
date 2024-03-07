import React, { useState, useEffect } from 'react';
import AboutCardItems from './about-cardItem';
import { Darklight } from '../../darklight';
import { useCookies } from 'react-cookie';

function AboutCards() {

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

  const styles = () => (
    <style jsx> { `
        .about-cards,
        .about-cards-dark {
          padding: 4rem;
          background: #F4F4F4;
        }

        .about-cards-dark {
          background: #313131;
        }

        h1 {
          text-align: center;
          padding-bottom: 4rem;
        }

        .about-cards_container,
        .about-cards_container-dark {
          max-width: 1120px;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
        }

        .about-cards_column,
        .about-cards_column-dark {
          flex-basis: 50%;
          margin-bottom: 2rem; 
        }

        .about-cards_column-left {
          margin-left: auto;
        }

        .about-cards_column-right {
          margin-right: auto;
        }
    `}</style>
  );

  return (
    <div className={darkMode ? 'about-cards-dark' : 'about-cards'}>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      <h1>Who is Riley Lawson?</h1>
      <div className={darkMode ? 'about-cards_container-dark' : 'about-cards_container'}>
        <div className={darkMode ? 'about-cards_column-dark about-cards_column-left' : 'about-cards_column about-cards_column-left'}>
          <AboutCardItems
            src='/images/img-home.jpg'
            text= "I'm a determined, hard working, eager to learn, and excited for the future kinda individual"
            label='Life'
          />
        </div>
        <div className={darkMode ? 'about-cards_column-dark about-cards_column-right' : 'about-cards_column about-cards_column-right'}>
          <AboutCardItems
              src='/images/img-home.jpg'
              text='Founder of Lawson Mowing Service and previous Software Engineer Intern @ iS0-FORM'
              label='Experience'
          />
        </div>
        <div className={darkMode ? 'about-cards_column-dark about-cards_column-left' : 'about-cards_column about-cards_column-left'}>
          <AboutCardItems
            src='/images/waterfall.jpeg'
            text='Android Enthusiast/Custom ROM Developer, Competitive Pokemon Enthusiast, Video Games, Running/Weight Lifting, Coding and Developing Software'
            label='Hobbies'
          />
        </div>
        <div className={darkMode ? 'about-cards_column-dark about-cards_column-graduation' : 'about-cards_column about-cards_column-graduation'}>
          <AboutCardItems
            src='/images/graduation.jpg'
            text='Graduated from Madrid High School, took classes through DMACC, and am a 5th year student at Iowa State University'
            label='School'
          />
        </div>
        <div className={darkMode ? 'about-cards_column-dark about-cards_column-left' : 'about-cards_column about-cards_column-left'}>
          <AboutCardItems
            src='/images/family.jpg'
            text='My parents are Heidi and Brad along with my brother Tate'
            label='Family'
          />
        </div>
      </div>

      {styles()}
    </div>
  );
}

export default AboutCards;

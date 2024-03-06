import React, { useState, useEffect } from 'react';
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

  const styles = () => (
    <style jsx>{`
      .cards,
      .cards-dark {
        padding: 4rem;
        background: #F4F4F4;
      }
    
      .cards-dark {
        background: #242424;
      }
    
      /* Small Line Divider */
      .cards::after,
      .cards-dark:after {
        content: "";
        position: absolute;
        bottom: 2;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 1px;
        background-color: #242424;
      }
    
      .cards-dark:after {
        background-color: #F4F4F4;
      }
    
      .cards h1 {
        text-align: center;
        padding-bottom: 4rem;
      }
    
      .cards-dark h1 {
        text-align: center;
        padding-bottom: 4rem;
        color: #F4F4F4;
      }
      
      .container,
      .container-dark {
        display: flex;
        flex-flow: column;
        align-items: center;
        max-width: 1120px;
        width: 90%;
        margin: 0 auto;
      }
      
      .wrapper,
      .wrapper-dark {
        position: relative;
        margin: 50px 0 45px;
      }
    
      .items,
      .items-dark {
        margin-bottom: 5%;
      }

      @media only screen and (min-width: 1024px) {
        .items,
        .items-dark {
          display: flex;
        }
      }
    `}</style>
  );

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />

  return (
    <>
      <div className={darkMode ? 'cards-dark' : 'cards'}>
        <h1>Check out what I have been up to!</h1>
        <div className={darkMode ? 'container-dark' : 'container'}>
          <div className={darkMode ? 'wrapper-dark' : 'wrapper'}>
            <ul className={darkMode ? 'items-dark' : 'items'}>
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
            <ul className={darkMode ? 'items-dark' : 'items'}>
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

      {styles()}
    </>
  );
}

export default Cards;

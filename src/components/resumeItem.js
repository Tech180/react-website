import React, { useState, useEffect } from 'react';
import "./resumepage.css";
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

function ResumeItem(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

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
    <>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      <li className={`${darkMode ? 'cardsItems-dark' : 'cardsItems'} ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
        <a
          className='cardsItems_link'
          href={props.path}
          target='_blank'
          rel='noopener noreferrer'
        >
          <figure className={`${darkMode ? 'cardsItems_pic-wrap-dark' : 'cardsItems_pic-wrap'} ${expanded ? 'expanded' : ''}`} data-category={props.label}>
            <img
              className={`cardsItems_img ${darkMode ? 'cardsItems_img-dark' : ''} ${expanded ? 'expanded' : ''}`}
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className={darkMode ? 'cardsItems_info-dark' : 'cardsItems_info'}>
            <h5 className={darkMode ? 'cardsItems_text-dark' : 'cardsItems_text'}>
              {expanded ? 'Click to again to go back to reduced view!' : props.text}
            </h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default ResumeItem;

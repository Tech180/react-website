import React, { useState, useEffect } from 'react';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

function AboutCardItems(props) {

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
    <li className={darkMode ? 'about-cards_item-dark' : 'about-cards_item'}>
      <a
        className={darkMode ? 'about-cards_item_link-dark' : 'about-cards_item_link'}
        href={props.path}
        target='_blank'
        rel='noopener noreferrer'
      >
        <figure className={darkMode ? 'about-cards_item_pic-wrap-dark' : 'about-cards_item_pic-wrap'} data-category={props.label}>
          <img
            className={darkMode ? 'about-cards_item_img-dark' : 'about-cards_item_img'}
            alt='Travel Image'
            src={props.src}
          />
          <figcaption className={darkMode ? 'about-cards_item_img-caption-dark' : 'about-cards_item_img-caption'}>
            {props.label}
          </figcaption>
        </figure>
        <div className={darkMode ? 'about-cards_item_info-dark' : 'about-cards_item_info'}>
          <h5 className={darkMode ? 'about-cards_item_text-dark' : 'about-cards_item_text'}>{props.text}</h5>
        </div>
      </a>
    </li>
  );
}


export default AboutCardItems;

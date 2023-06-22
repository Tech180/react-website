import React, { useState, useEffect } from 'react';
import "./cards.css";
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';


function CardItem(props) {

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

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />

  return (
    <>
      <li className={darkMode ? 'cards__item-dark' : 'cards__item-dark'}>
        <a
          className={darkMode ? 'cards__item__link-dark' : 'cards__item__link'}
          href={props.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className={darkMode ? 'cards__item__pic-wrap-dark' : 'cards__item__pic-wrap'} data-category={props.label}>
            <img
              className={darkMode ? 'cards__item__img-dark' : 'cards__item__img'}
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className={darkMode ? 'cards__item__info-dark' : 'cards__item__info'}>
            <h5 className={darkMode ? 'cards__item__text-dark' : 'cards__item__text'}>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}


export default CardItem;

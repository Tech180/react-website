import React, { useState, useEffect } from 'react';
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

      <style jsx>{`
          
          .cards__item,
          .cards__item-dark {
            display: flex;
            flex: 1;
            margin: 0 1rem;
            border-radius: 10px;
            transform: scale(1);
            transition: 0.3s ease-out;
          }
        
          .cards__item:hover,
          .cards__item-dark:hover {
            transform: scale(1.02);
            transition: 0.3s ease-out;
          }
          
          .cards__item__link,
          .cards__item__link-dark {
            display: flex;
            flex-flow: column;
            width: 100%;
            box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
            border-radius: 10px;
            overflow: hidden;
            text-decoration: none;
          }
        
          .cards__item__link-dark {
            box-shadow: 0 6px 20px #F4F4F4;
          }
          
          .cards__item__pic-wrap,
          .cards__item__pic-wrap-dark {
            position: relative;
            width: 100%;
            padding-top: 67%;
            overflow: hidden;
          }
          
          .cards__item__pic-wrap::after,
          .cards__item__pic-wrap-dark::after {
            content: attr(data-category);
            position: absolute;
            bottom: 10px;
            margin-left: 10px;
            padding: 6px 10px;
            max-width: calc((100%) - 60px);
            font-size: 12px;
            font-weight: 700;
            color: #F4F4F4;
            background-color: #9AC2E6;
            box-sizing: border-box;
            border-radius:25px;
          }
        
          .cards__item__pic-wrap-dark::after {
            color: #242424;
            background-color: #8e5fd6;
          }
        
          .cards__item__img,
          .cards__item__img-dark {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          
          .cards__item__info,
          .cards__item__info-dark {
            padding: 20px 30px 30px;
            user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            pointer-events: none;
          }
          
          .cards__item__text,
          .cards__item__text-dark {
            color: #242424;
            font-size: 18px;
            line-height: 24px;
          }
        
          .cards__item__text-dark {
            color: #F4F4F4;
          }

          @media only screen and (min-width: 1024px) {
            .cards__items,
            .cards__items-dark {
              display: flex;
            }
          }
          
          @media only screen and (max-width: 1024px) {
            .cards__item,
            .cards__item-dark {
              margin-bottom: 2rem;
            }
          }
      `}</style>
    </>
  );
}


export default CardItem;

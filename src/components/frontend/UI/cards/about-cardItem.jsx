import React, { useState, useEffect } from 'react';
import { Darklight } from '../../darklight';
import { useCookies } from 'react-cookie';

function AboutCardItems(props) {

  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const styles = () => (
    <style jsx> {`
      .about-cards_item,
      .about-cards_item-dark {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        border-radius: 10px;
        height: 100%;
      }

      .about-cards_item_info,
      .about-cards_item_info-dark {
        padding: 20px 30px 30px;
        height: 100px;
        width: 600px;
        overflow: hidden;
      }

      .about-cards_item_link,
      .about-cards_item_link-dark {
        display: flex;
        flex-flow: column;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        text-decoration: none;
      }

      .about-cards_item_link-dark {
        box-shadow: 0 6px 20px #F4F4F4;
        -webkit-filter: drop-shadow(0 6px 20px #F4F4F4);
        filter: drop-shadow(0 6px 20px #F4F4F4);
      }

      .about-cards_item_pic-wrap,
      .about-cards_item_pic-wrap-dark {
        position: relative;
        width: 100%;
        padding-top: 67%;
        overflow: hidden;
      }

      .about-cards_item_pic-wrap::after,
      .about-cards_item_pic-wrap-dark:after {
        content: attr(data-category);
        position: absolute;
        bottom: 10px;
        margin-left: 10px;
        padding: 6px 10px;
        max-width: calc(100% - 60px);
        font-size: 12px;
        font-weight: 700;
        color: #F4F4F4;
        background-color: #9AC2E6;
        box-sizing: border-box;
        border-radius: 25px;
      }

      .about-cards_item_pic-wrap-dark:after {
        color: #242424;
        background-color: #8e5fd6;
      }

      .about-cards_item_img,
      .about-cards_item_img-dark {
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
        object-fit: cover;
        transition: all 0.2s linear;
      }

      .about-cards_item_text,
      .about-cards_item_text-dark {
        color: #242424;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
      }

      .about-cards_item_text-dark {
        color: #F4F4F4;
      }

      @media only screen and (min-width: 1024px) {
        .about-cards_item,
        .about-cards_item-dark {
          margin-bottom: 0;
        }
      }

      @media only screen and (max-width: 740px) {
        .about-cards_item_info,
        .about-cards_item_info-dark {
          width: 400px;
          height: 200px;
        }
      }

      @media only screen and (max-width: 550px) {
        .about-cards_item_info,
        .about-cards_item_info-dark {
          width: 300px;
        }
      }
    `}</style>
  );

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

      {styles()}
    </li>
  );
}

export default AboutCardItems;

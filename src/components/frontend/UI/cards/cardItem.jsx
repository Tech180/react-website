import React, { useState, useEffect } from 'react';
import DarkSwitch from '../toggle/darkswitch';

function CardItem(props) {


  const [darkMode] = DarkSwitch();

  const styles = () => (

    <style jsx>{`
      .item,
      .item-dark {
        display: flex;
        flex: 1;
        margin: 0 1rem;
        border-radius: 10px;
        transform: scale(1);
        transition: 0.3s ease-out;
      }
    
      .item:hover,
      .item-dark:hover {
        transform: scale(1.02);
        transition: 0.3s ease-out;
      }
      
      .link,
      .link-dark {
        display: flex;
        flex-flow: column;
        width: 100%;
        box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
        border-radius: 10px;
        overflow: hidden;
        text-decoration: none;
      }
    
      .link-dark {
        box-shadow: 0 6px 20px #F4F4F4;
      }
      
      .item-pic-wrap,
      .item-pic-wrap-dark {
        position: relative;
        width: 100%;
        padding-top: 67%;
        overflow: hidden;
      }
      
      .item-pic-wrap::after,
      .item-pic-wrap-dark::after {
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
        border-radius: 25px;
      }
    
      .item-pic-wrap-dark::after {
        color: #242424;
        background-color: #8e5fd6;
      }
    
      .item-image,
      .item-image-dark {
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
      
      .item-info,
      .item-info-dark {
        padding: 20px 30px 30px;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        pointer-events: none;
      }
      
      .item-text,
      .item-text-dark {
        color: #242424;
        font-size: 18px;
        line-height: 24px;
      }
    
      .item-text-dark {
        color: #F4F4F4;
      }
      
      @media only screen and (max-width: 1024px) {
        .item,
        .item-dark {
          margin-bottom: 2rem;
        }
      }
    `}</style>
  );

  return (
    <>
      <li className={darkMode ? 'item-dark' : 'item-dark'}>
        <a
          className={darkMode ? 'link-dark' : 'link'}
          href={props.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className={darkMode ? 'item-pic-wrap-dark' : 'item-pic-wrap'} data-category={props.label}>
            <img
              className={darkMode ? 'item-image-dark' : 'item-image'}
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className={darkMode ? 'item-info-dark' : 'item-info'}>
            <h5 className={darkMode ? 'item-text-dark' : 'item-text'}>{props.text}</h5>
          </div>
        </a>
      </li>

      {styles()}
    </>
  );
}


export default CardItem;

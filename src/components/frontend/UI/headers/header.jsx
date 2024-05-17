import React, { useState, useEffect } from 'react';

import { Darklight } from '../toggle/darklight';
import { useCookies } from 'react-cookie';
import DarkSwitch from '../toggle/darkswitch';

function Header( {description, image} ) {
  const [darkMode] = DarkSwitch();

  const styles = () => (
    <style jsx>{`
      .header-container,
      .header-container-dark {
        background: url('${image}') no-repeat;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        background-size: 100% auto;
        background-position: center top;
        user-select: none;
      }
      
      .header-container > h1,
      .header-container-dark > h1 {
        font-size: 100px;
        margin-top: 250px;
      }
      
      .header-container > h1 {
        color: #9AC2E6;
      }
      
      .header-container-dark > h1 {
        color: #B39DDB;
        font-size: 100px;
        margin-top: 250px;
      }
      
      .header-container > h1 span {
        position: relative;
        display: inline-block;
      }
      
      @media screen and (min-width: 961px) {
        .header-container,
        .header-container-dark {
          object-fit: scale-down;
        }
      }
      
      @media screen and (max-width: 960px) {
        .header-container > h1,
        .header-container-dark > h1 {
          font-size: 70px;
          margin-top: -150px;
        }
        .header-container,
        .header-container-dark {
          background-size: cover;
        }
      }
      
      @media screen and (max-width: 768px) {
        .header-container > h1,
        .header-container-dark > h1 {
          font-size: auto;
          margin-top: -100px;
        }
      }
      
      @media screen and (max-width: 500px) {
        .header-container,
        .header-container-dark {
          background-size: cover;
        }
      }

      @media screen and (max-height: 600px) {
        .header-container > h1,
        .header-container-dark > h1 {
          font-size: 50px;
          margin-top: -100px;
        }
      }
    `}</style>
    );

    /*
  return (
    <>
      <div className={darkMode ? 'header-container-dark' : 'header-container'}>
        <h1>
          <span>software</span>
          <hr />
          <span>engineer</span>
        </h1>
      </div>
      {styles()}
    </>
  );
  */

  return (
    <>
      <div className={darkMode ? 'header-container-dark' : 'header-container'}>
          <h1 dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      {styles()}
    </>
  );
}

export default Header;

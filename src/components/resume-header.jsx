import React, { useState, useEffect } from 'react';
import '../App.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

function ResumeHeader() {
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
    .resume-header-container,
    .resume-header-container-dark {
      background: url('/images/resume.jpg') no-repeat;
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
      background-color: #242424;
    }
    
    .resume-header-container > h1,
    .resume-header-container-dark > h1 {
      font-size: 100px;
      margin-top: 250px;
    }
    
    .resume-header-container > h1 {
      color: #9AC2E6;
    }
    
    .resume-header-container-dark > h1 {
      color: #B39DDB;
      font-size: 100px;
      margin-top: 250px;
    }
    
    .resume-header-container > h1 span {
      position: relative;
      display: inline-block;
    }
    
    @media screen and (min-width: 961px) {
      .resume-header-container,
      .resume-header-container-dark {
        object-fit: scale-down;
      }
    }
    
    @media screen and (max-width: 960px) {
      .resume-header-container > h1,
      .resume-header-container-dark > h1 {
        font-size: 70px;
        margin-top: -150px;
      }
      .resume-header-container,
      .resume-header-container-dark {
        background-size: cover;
      }
    }
    
    @media screen and (max-width: 768px) {
      .resume-header-container > h1,
      .resume-header-container-dark > h1 {
        font-size: 50px;
        margin-top: -100px;
      }
    }
    
    @media screen and (max-width: 500px) {
      .resume-header-container,
      .resume-header-container-dark {
        background-size: cover;
      }
    }    
    `}</style>
  );

  return (
    <>
      <div className={darkMode ? 'resume-header-container-dark' : 'resume-header-container'}>
        <h1>
          <span>resume</span>
        </h1>
        <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      </div>
      {styles()}
    </>
  );
}

export default ResumeHeader;

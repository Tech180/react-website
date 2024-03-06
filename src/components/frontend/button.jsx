import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Darklight } from './darklight';

const STYLES = [ 'primary', 'outline', 'outline-dark' ];
const SIZES = [ 'medium', 'large' ];

export const Button = ({
  children,
  buttonStyle = 'primary',
  buttonSize = 'medium',
  linkTo = ''
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

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
    <style jsx> {`
      .btn,
      .btn-dark {
        padding: 8px 20px;
        border-radius: 2px;
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
      }
      
      .primary {
        background-color: #F4F4F4;
        color: #242424;
        border: 1px solid #F4F4F4;
      }
      
      .outline,
      .outline-dark {
        background-color: transparent;
        color: #242424;
        padding: 8px 20px;
        border: 1px solid #242424;
        transition: all 0.3s ease-out;
        
      }
    
      .outline-dark {
        color: #F4F4F4;
        border: 1px solid #F4F4F4;
      }
      
      .medium,
      .medium-dark {
        padding: 8px 20px;
        font-size: 20px;
      }
      
      .large {
        padding: 12px 26px;
        font-size: 20px;
      }
      
      .medium:hover,
      .medium-dark:hover,
      .large:hover {
        background: #242424;
        color: #F4F4F4;
        transition: all 0.3s ease-out;
      }
    
      .medium-dark:hover {
        background: #F4F4F4;
        color: #242424;
      }
    `}</style>
  );
  
  const buttonStyleClass = darkMode ? `${checkButtonStyle}-dark` : checkButtonStyle;
  const buttonSizeClass = darkMode ? `${checkButtonSize}-dark` : checkButtonSize;

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />

  return (
    <>
      <Link
        to={{ pathname: linkTo }}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyleClass} ${buttonSizeClass}`}
      >
        {children}
      </Link>

      {styles()}
    </>
    
  );
};

import React, { useState, useEffect } from 'react';
import './button.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Darklight } from './darklight';


const STYLES = [ 'btn--primary', 'btn--outline', 'btn--outline-dark', 'btn--test' ];
const SIZES = [ 'btn--medium', 'btn--large' ];

export const Button = ({
  children,
  buttonStyle = 'btn--primary',
  buttonSize = 'btn--medium',
  linkTo = 'https://github.com/Tech180/'
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
  
  
  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />

  const buttonStyleClass = darkMode ? `${checkButtonStyle}-dark` : checkButtonStyle;
  const buttonSizeClass = darkMode ? `${checkButtonSize}-dark` : checkButtonSize;


  return (
    <Link
      to={{ pathname: linkTo }}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${buttonStyleClass} ${buttonSizeClass}`}
    >
      {children}
    </Link>
  );
};

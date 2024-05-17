import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import DarkSwitch from '../toggle/darkswitch';

const STYLES = ['primary', 'outline', 'outline-dark'];
const SIZES = ['medium', 'large'];

export const Button = ({ children, buttonStyle = 'primary', buttonSize = 'medium', linkTo = '' }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const [darkMode] = DarkSwitch();

  const [hovered, setHovered] = useState(false);

  const buttonStyleClass = darkMode ? `${checkButtonStyle}-dark` : checkButtonStyle;


  const vibrate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const spring = useSpring ({
    backgroundColor: darkMode ? (hovered ? '#F4F4F4' : '#242424') : (hovered ? '#242424' : '#F4F4F4'),
    color: darkMode ? (hovered ? '#242424' : '#F4F4F4') : (hovered ? '#F4F4F4' : '#242424'),
    border: darkMode ? (hovered ? '1px solid #F4F4F4' : '1px solid #F4F4F4') : (hovered ? '1px solid #F4F4F4' : '1px solid #242424'),
    padding: checkButtonSize === 'medium' ? '8px 20px' : '12px 26px',
    fontSize: checkButtonSize === 'medium' ? '20px' : '24px',
    borderRadius: '2px',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    config: { 
      duration: 400
    },    
  });

  return (
    <>
      <Link
        to={{ pathname: linkTo }}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={vibrate}
        draggable="false"
      >
        <animated.button className={`${buttonStyleClass}`} style={spring}>
          {children}
        </animated.button>
      </Link>
    </>
  );
};

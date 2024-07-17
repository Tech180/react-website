import React, { useState } from 'react';
import { animated } from 'react-spring';
import { useCookies } from 'react-cookie';
import Spring from '../animations/Spring';
import Slider from '../animations/Slider';
import Hover from '../animations/Hover';

export function Darklight({ darkMode: initialDarkMode = false, showToggle }) {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  // Animations
  const spring = Spring();
  const sliderSpring = Slider(cookies);

  const { hovered, bind } = Hover(false);

  const container = {
    transform: 'translate(0%, 75%)',
  };

  const switchStyle = {
    background: cookies.darkMode === 'true' ? 'black' : '#b3b3b3',
    borderRadius: '20px',
    cursor: 'pointer',
    position: 'relative',
    width: '50px',
    height: '24px',
    display: 'inline-block',
    verticalAlign: 'middle',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const circle = {
    position: 'absolute',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    top: '2px',
    borderRadius: '50%',
    backgroundColor: '#F4F4F4',
    //transform: darkMode ? (hovered ? 'translateX(-5px)' : 'translateX(0)') : (hovered ? 'translateX(5px)' : 'translateX(0)'),
    ...sliderSpring,
  };

  const moon = {
    position: 'absolute',
    fontSize: '12px',
    color: 'grey',
    left: '4px', 
    top: '3px',
    ...spring,
  };

  const sun = {
    position: 'absolute',
    color: '#F4F4F4',
    fontSize: '12px',
    left: '3.5px', 
    top: '4px',
    ...spring,
  };

  return (
    <div className="darklight-container" style={container}>
      {showToggle && (
        <div
          style={switchStyle}
          onClick={() => {
            toggleDarkMode();
          }}
          {...bind}
        >
        <animated.div style={{...circle}}>
          {cookies.darkMode === 'true' ? (
            <animated.i className="fas fa-moon" style={{ ...moon }}></animated.i>
          ) : (
            <animated.i className="fas fa-sun" style={{ ...sun }}></animated.i>
          )}
        </animated.div>

        </div>
      )}
    </div>
  );
}


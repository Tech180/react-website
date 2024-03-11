import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useCookies } from 'react-cookie';

export function Darklight({ toggleDarkMode, showToggle }) {
  const [cookies, setCookie] = useCookies(['darkMode']);

  const container = {
    transform: 'translate(0%, 75%)',
  };
  
  const spring = useSpring({
    left: cookies.darkMode === 'true' ? '27px' : '4px',
    backgroundColor: cookies.darkMode === 'true' ? '#4d4d4d' : '#FFCC89',
    config: { 
      tension: 400, 
      friction: 20 
    },
  });

  const switchStyle = {
    background: cookies.darkMode === 'true' ? 'black' : '#b3b3b3',
    borderRadius: '20px',
    cursor: 'pointer',
    position: 'relative',
    width: '50px',
    height: '24px',
    display: 'inline-block',
    verticalAlign: 'middle',
  };

  const circle = {
    position: 'absolute',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    top: '2px',
    borderRadius: '50%',
    backgroundColor: '#F4F4F4',
    ...spring,
  };

  return (
    <div className="darklight-container" style={container}>
      {showToggle && (
        <div style={switchStyle} onClick={() => {
          const newMode = cookies.darkMode === 'true' ? 'false' : 'true';
          setCookie('darkMode', newMode, { path: '/' });
          toggleDarkMode();
        }}>
          <animated.div className="slider">
            <animated.div style={circle}>
              {cookies.darkMode === 'true' ? (
                <i className="fas fa-moon" style={{ position: 'absolute', left: '4px', top: '4px', color: 'gray', fontSize: '12px' }}></i>
              ) : (
                <i className="fas fa-sun" style={{ position: 'absolute', left: '3px', top: '4px', color: '#F4F4F4', fontSize: '12px' }}></i>
              )}
            </animated.div>
          </animated.div>
        </div>
      )}
    </div>
  );
}


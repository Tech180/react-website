import React, { useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { Darklight } from './toggle/darklight';
import { useCookies } from 'react-cookie';


const Popup = ({ isOpen, onClose, image, name, description }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  const [cookies, setCookie] = useCookies(['darkMode']);

  useEffect(() => {
    // Disable scrolling when the popup is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const toggleDarkMode = () => {
    const newMode = cookies.darkMode === 'true' ? 'false' : 'true';
    setCookie('darkMode', newMode, { path: '/' });
  };

  <Darklight toggleDarkMode={toggleDarkMode} showToggle={false} />


  return (
    <>
      {transitions((style, item) =>
        item ? (
          <>
            <animated.div
              style={{
                ...style,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: cookies.darkMode === 'true' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                zIndex: 1001, 
              }}
              onClick={onClose} 
            />
            <animated.div
              style={{
                ...style,
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: cookies.darkMode === 'true' ? '#B39DDB' : '#9AC2E6',
                borderRadius: '8px',
                padding: '40px',
                zIndex: 1002,
              }}
              onClick={handlePopupClick}
            >
              <div style={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }} onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill="currentColor" d="M18.364 5.636c-.78-.78-2.048-.78-2.828 0L12 9.172 8.464 5.636c-.78-.78-2.048-.78-2.828 0-.78.78-.78 2.048 0 2.828L9.172 12l-3.536 3.536c-.78.78-.78 2.048 0 2.828s2.048.78 2.828 0L12 14.828l3.536 3.536c.78.78 2.048.78 2.828 0 .78-.78.78-2.048 0-2.828L14.828 12l3.536-3.536c.78-.78.78-2.048 0-2.828z"/>
                  {//<circle cx="12" cy="12" r="7" fill="currentColor" />
                  }
                </svg>
              </div>
              <div style={{ marginRight: '16px' }}>
                {image && <img src={image} alt="Item Image" style={{ width: '100px', height: '100px' }} />}
              </div>
              <div>
                <h2 style={{ paddingBottom: '20px', textAlign: 'center'}}>{name}</h2>
                <p style={{ paddingBottom: '20px', textAlign: 'center'}}>{description}</p>
              </div>
            </animated.div>
          </>
        ) : null
      )}
    </>
  );
};

export default Popup;

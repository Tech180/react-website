import React, { useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import DarkSwitch from './toggle/darkswitch';


const Popup = ({ isOpen, onClose, image, name, description }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  const [darkMode] = DarkSwitch();

  useEffect(() => {
    // Disable scrolling when the popup is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } 
    else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const overlay = {
    position: 'fixed',
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    zIndex: 1001,
  };

  const content = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: darkMode ? '#B39DDB' : '#9AC2E6',
    borderRadius: '8px',
    padding: '40px',
    zIndex: 1002,
    width: '80%',
    maxWidth: '600px',
  };

  const descriptions = {
    paddingBottom: '20px',
    textAlign: 'center',
    maxHeight: '300px', 
    overflowY: 'auto',
  };



  return (
    <>
      {transitions((style, item) =>
        item ? (
          <>
            <animated.div
              style={{ ...overlay, ...style }}
              onClick={onClose}
            />
            <animated.div
              style={{ ...content, ...style }}
              onClick={handlePopupClick}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '8px', 
                  right: '8px', 
                  cursor: 'pointer' 
                }} 
                onClick={onClose}
              >
                <svg width="24" height="24" fill="none">
                  <path 
                    fill="currentColor" 
                    d="M18.364 5.636c-.78-.78-2.048-.78-2.828 0L12 9.172 8.464 5.636c-.78-.78-2.048-.78-2.828 0-.78.78-.78 2.048 0 2.828L9.172 12l-3.536 3.536c-.78.78-.78 2.048 0 2.828s2.048.78 2.828 0L12 14.828l3.536 3.536c.78.78 2.048.78 2.828 0 .78-.78.78-2.048 0-2.828L14.828 12l3.536-3.536c.78-.78.78-2.048 0-2.828z"
                  />
                </svg>
              </div>
              {/* Name Container */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {/* Image Icon */}
                <div style={{ marginRight: '16px' }}>
                  {image && <img src={image} style={{ width: '45px', height: '45px' }} />}
                </div>
                {/* Name */}
                <h2>{name}</h2>
              </div>
              {/* Description */}
              <div>
                <p style={{ ...descriptions }}>{description}</p>
              </div>
            </animated.div>
          </>
        ) : null
      )}
    </>
  );
};

export default Popup;

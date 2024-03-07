import React from 'react';
import './darklight.css';
import { useCookies } from 'react-cookie';

export function Darklight({ toggleDarkMode, showToggle }) {
  const [cookies, setCookie] = useCookies(['darkMode']);

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <div className="darklight-container">
      {showToggle && (
        <>
          <input
            className="darkmode-toggle"
            type="checkbox"
            id="darkmode-toggle"
            checked={cookies.darkMode === 'true'}
            onChange={() => {
              const newMode = cookies.darkMode === 'true' ? 'false' : 'true';
              setCookie('darkMode', newMode, { path: '/' });
              handleToggle();
            }}
          />
          <label className="darkmode-label" htmlFor="darkmode-toggle">
            <i className="fas fa-sun icon"></i>
            <i className="fas fa-moon icon"></i>
          </label>
        </>
      )}
    </div>
  );
}


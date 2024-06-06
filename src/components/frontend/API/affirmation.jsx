import React, { useState, useEffect } from 'react';
import DarkSwitch from '../UI/toggle/darkswitch';
import axios from 'axios';

const Affirmation = () => {
    const [affirmation, setAffirmation] = useState('');
    const [darkMode] = DarkSwitch();

    useEffect(() => {
        const fetchAffirmation = async () => {
          const response = await axios.get('/api/affirmations');
          setAffirmation(response.data.affirmation);
        };

        fetchAffirmation();
    }, []);

    const enter = () => {
      const logo = document.querySelector('.affirm-logo');
      document.querySelector('.affirm-logo').style.opacity = '1';
      logo.classList.remove('tracking-out-contract');
    };

    const leave = () => {
      const logo = document.querySelector('.affirm-logo');
      document.querySelector('.affirm-logo').style.opacity = '0';
      logo.classList.add('tracking-out-contract');
    };

    const styles = () => (
      <style jsx>{`

        :root {
          --dark: ${darkMode ? '#F4F4F4' : '#242424'};
          --dark-inverse: ${darkMode ? '#242424' : '#F4F4F4'}
        }
      
        .affirm {
          background: var(--dark-inverse);
          padding-bottom: 50px;
        }

        .affirm-title {
          font-size: 30px;
          text-align: center;
          user-select: none;
          color: var(--dark);
        }

        .affirm-subtitle {
          font-size: 20px;
          text-align: center;
          user-select: none;
          color: var(--dark);
          margin-top: 20px;
        }

        .affirm-logo {
          opacity: 0;
          font-size: 20px;
          text-align: center;
          user-select: none;
          color: var(--dark);
          margin-top: 40px;
          cursor: pointer;
          transition: all 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530);
          text-decoration: none;
          margin: auto;

        }

        .affirm-logo-small {
          opacity: 0;
          font-size: 20px;
          text-align: center;
          user-select: none;
          color: var(--dark);
        }

        /* Small Line Divider */
        .affirm-subtitle:after {
          margin-top: 120px;
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background-color: var(--dark);
        }

        .tracking-out-contract {
          letter-spacing: -0.5em;
          opacity: 0;
        }

        .affirm-logo:hover {
          animation: tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        }
      
      `}</style>
    );

    return (
        <>
            {styles()}
            <div className='affirm'>
              <div className="affirm-title">Daily Affirmation:</div>
              <div className="affirm-subtitle">{affirmation}</div>
              <div
                className="affirm-logo"
                href="https://github.com/annthurium/affirmations"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={enter}
                onMouseLeave={leave}
              >
                affirmation api
              </div>
              <div className="affirm-logo-small">
                a
              </div>

            </div>
        </>
    );
};

export default Affirmation;

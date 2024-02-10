import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';
import { useSpring, animated } from 'react-spring';

const Pokemon = ({ name }) => {
  const [data, setData] = useState(null);
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${name} data:`, error);
      }
    };

    fetchData();
  }, [name, cookies.darkMode]); // Combine dependencies into a single array

  const formatName = (name) => {
    return name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered');
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    console.log('Mouse left');
    setIsHovered(false);
  };

  const lightningSpring = useSpring({
    opacity: isHovered ? 1 : 0,
    from: { opacity: 0 },
  });

  const pokemonInfo = () => {
    if (!data) return null;

    let movesToShow = data.moves.slice(0, 4);
    let selectedAbility = data.abilities[0];

    return (
      <div
        className={darkMode ? 'pokemon-container-dark' : 'pokemon-container'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="pokemon-image">
          <img src={data.sprites.front_default} alt={name} draggable="false" />
        </div>
        <div className="details">
          <div className="abilities">
            <h2 className={darkMode ? 'section-title-dark' : 'section-title'}>Abilities:</h2>
            <ul className="abilities-list">
              <li>{formatName(selectedAbility.ability.name)}</li>
            </ul>
          </div>
          <div className="moves">
            <h2 className={darkMode ? 'section-title-dark' : 'section-title'}>Moves:</h2>
            <ul className="moves-list">
              {movesToShow.map((move, index) => (
                <li key={index}>{formatName(move.move.name)}</li>
              ))}
            </ul>
          </div>
        </div>
        <animated.div className="lightning-animation" style={lightningSpring}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 2 12 8 18 2" />
            <polyline points="6 10 12 16 18 10" />
          </svg>
        </animated.div>
      </div>
    );
  };

  return (
    <div style={{ color: darkMode ? '#F4F4F4' : '#242424' }}>
      <h1 style={{ position: 'relative' }}>
        {formatName(name)}
      </h1>
      {pokemonInfo()}
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      <style jsx>{`
        .pokemon-container,
        .pokemon-container-dark {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .pokemon-image {
          margin-bottom: 20px;
        }

        .pokemon-image img {
          width: 150px;
          height: auto;
        }

        .details {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 800px;
        }

        .abilities,
        .moves {
          flex: 1;
          margin-right: 20px;
        }

        .section-title,
        .section-title-dark {
          margin-bottom: 10px;
        }

        .abilities-list,
        .moves-list {
          list-style-type: none;
          padding-left: 0;
        }

        .lightning-animation {
          position: absolute;
          top: -20px; /* Adjust as needed */
          left: 50%; /* Adjust as needed */
          transform: translateX(-50%);
          color: yellow; /* Adjust color as needed */
        }
      `}</style>
    </div>
  );
};

export default Pokemon;

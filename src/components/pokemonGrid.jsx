import React, { useState, useEffect } from 'react';
import Pokemon from './pokemon';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';
import { useSpring, animated } from 'react-spring';

const PokemonGridItem = ({ name, darkMode, index, expandedIndex, setExpandedIndex }) => {
  const isExpanded = index === expandedIndex;

  const [hovered, setHovered] = useState(false);

  const handleToggle = () => {
      setExpandedIndex(isExpanded ? -1 : index);
  };

  const spring = useSpring({
      width: isExpanded ? '400px' : '100px',
      height: isExpanded ? '400px' : '100px',
      borderRadius: isExpanded ? '20px' : '5px',
      opacity: isExpanded || hovered ? 1 : 0.5,
      boxShadow: darkMode ? 
      '0 6px 20px rgba(244, 244, 244, 0.50)': '0 6px 20px rgba(56, 125, 255, 0.50)',
      config: { duration: 200 },
  });

  return (
    <>
      <animated.div
          className={`pokemon-grid-item ${isExpanded ? 'expanded' : ''}`}
          style={{
              margin: '10px',
              padding: '20px',
              border: `3px solid ${darkMode ? '#B39DDB' : '#9AC2E6'}`,
              borderRadius: '3px',
              outline: 'none', 
              background: darkMode ? '#242424' : '#F4F4F4',
              textAlign: 'center',
              userSelect: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              ...spring,
          }}
          onClick={handleToggle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
      >
          <div
              style={{
                  opacity: isExpanded || hovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
              }}
          >
              {isExpanded && (
                  <div className="pokemon-info">
                      <Pokemon name={name} heldItem={'Potion'}/>
                  </div>
              )}
          </div>
          {isExpanded ? null : (
              <img
                  src={`https://play.pokemonshowdown.com/sprites/gen5ani/${name.toLowerCase()}.gif`}
                  alt={name}
                  style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                  }}
              />
          )}
      </animated.div>
    </>
  );
};

const PokeAPIImage = ({darkMode}) => {

    const [isHovered, setIsHovered] = React.useState(false);

    const springProps = useSpring({
      maxWidth: isHovered ? '175px' : '200px',
    });

    const handleClick = () => {
      window.open("https://github.com/PokeAPI/pokeapi");
    };
  
    return (
        <>
            <div className="pokeImage">
            <animated.img
                src="/images/pokeapi.svg"
                alt="PokeAPI"
                style={{
                ...springProps,
                cursor: 'pointer',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
            />
            </div>
            <style jsx>{`
                .pokeImage {
                    display: flex;
                    justify-content: center;
                    padding: 30px;
                    background: ${darkMode ? '#242424' : '#F4F4F4'};
                }
            `}</style>
        </>
    );
};

const gridStyles = ({ darkMode }) => (
    <style jsx>{`
        .pokemon-grid-container {
            background: ${darkMode ? '#242424' : '#F4F4F4'};
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 20px;
        }

        .heading {
            text-align: center;
            color: ${darkMode ? '#F4F4F4' : '#242424'};
            width: 100%;
            margin-bottom: 20px;
        }

        .pokemon-grid {
            width: 100%;
            max-width: 800px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            justify-items: center;
            align-items: center;
        }

        .centered-image {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        @media (max-width: 1000px) {
            .pokemon-grid {
                grid-template-columns: repeat(2, 1fr);

            }
        }

        @media (max-width: 700px) {
            .pokemon-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 200px) {
            .pokemon-grid {
                justify-content: center; 
            }
        }
        
    `}</style>
);

const PokemonGrid = () => {
    const [cookies, setCookie] = useCookies(['darkMode']);
    const [darkMode, setDarkMode] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(-1);
  
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

    const pokemonNames = ['Cloyster', 'Flygon', 'Marowak', 'Zapdos', 'Serperior', 'Chandelure'];
  
    return (
      <div>
          {gridStyles({ darkMode })}
          <div className="pokemon-grid-container">
              <h1 className="heading" style = {{paddingTop: '50px'}}>My Favorite Pokemon</h1>
              <div className="pokemon-grid" style = {{paddingBottom: '50px', paddingTop: '50px'}}>
                  {pokemonNames.map((name, index) => (
                      <PokemonGridItem
                          key={index}
                          name={name}
                          darkMode={darkMode}
                          index={index}
                          expandedIndex={expandedIndex}
                          setExpandedIndex={setExpandedIndex}
                      />
                  ))}
              </div>
          </div>
  
          <div className="image-container">
              <img src="https://fontmeme.com/permalink/240209/e121f8bde9154a24dcb7d418ab4dccee.png" alt="pokemon-font" />
          </div>
  
          <PokeAPIImage darkMode={darkMode}/>
          
          <style jsx>{`
              .image-container {
                  display: flex;
                  justify-content: center;
                  background: ${darkMode ? '#242424' : '#F4F4F4'};
              }
              
              .image-container img {
                  max-width: 200px;
              }
                
          `}</style>
      </div>
    );
  };

export default PokemonGrid;

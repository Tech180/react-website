import React, { useState, useEffect } from 'react';
import DarkSwitch from '../toggle/darkswitch';
import PokeAPIImage from './PokeAPIImage';
import PokemonGridItem from './PokemonGridItem';

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
    const [darkMode] = DarkSwitch();
    const [expandedIndex, setExpandedIndex] = useState(-1);

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

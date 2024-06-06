import React, { useState } from 'react';
import Popup from '../popup';
import PokeAPI from '../../API/pokeAPI';
import { animated } from 'react-spring';
import DarkSwitch from '../toggle/darkswitch';
import ItemBoxSpring from '../animations/ItemBoxSpring';

const Pokemon = ({ name, heldItem }) => {

  
  const { data, item } = PokeAPI(name, heldItem);
  const [darkMode] = DarkSwitch();
  const [isHovered, setIsHovered] = useState(false);
  const [itemBoxHover, setItemBoxHover] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Formats the name to lowercase for compatibility
  const formatName = (name) => {
    return name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  // Item Box Animation
  const itemBoxSpring = ItemBoxSpring(itemBoxHover);

  const pokeChoice = (name, data) => {
    let movesToShow = data.moves.slice(0, 4);
    let selectedAbility = data.abilities[0];
    
    let heldItem = '';

    switch (name.toLowerCase()) {
      case 'marowak':
        movesToShow = [
          { move: { name: 'Bonemerang' } },
          { move: { name: 'Bonemerang' } },
          { move: { name: 'Rage' } },
          { move: { name: 'Bone Club' } }
        ];
        selectedAbility = data.abilities.find(ability => ability.ability.name === 'rock-head');
        break;

      case 'cloyster':
        movesToShow = [
          { move: { name: 'Shell Smash' } },
          { move: { name: 'Icicle Spear' } },
          { move: { name: 'Rock Blast' } },
          { move: { name: 'Ice Shard' } }
        ];
        selectedAbility = data.abilities.find(ability => ability.ability.name === 'skill-link');
        //heldItem = data.held_items.find(item => item.item.name === 'focus-sash');
        break;

      case 'flygon':
        movesToShow = [
          { move: { name: 'Earthquake' } },
          { move: { name: 'U-Turn' } },
          { move: { name: 'Rock Slide' } },
          { move: { name: 'Dragon Claw' } }
        ];
        selectedAbility = data.abilities.find(ability => ability.ability.name === 'levitate');
        //heldItem = data.held_items.find(item => item.item.name === 'choice-scarf');
        break;

      case 'zapdos':
        movesToShow = [
          { move: { name: 'Thunderbolt' } },
          { move: { name: 'Thunder Wave' } },
          { move: { name: 'Roost' } },
          { move: { name: 'Heat Wave' } }
        ];
        selectedAbility = data.abilities.find(ability => ability.ability.name === 'pressure');
        //heldItem = data.held_items.find(item => item.item.name === 'life-orb');
        break;

      case 'serperior':
        movesToShow = [
          { move: { name: 'Leaf Storm' } },
          { move: { name: 'Leaf Blade' } },
          { move: { name: 'Coil' } },
          { move: { name: 'Giga Drain' } }
        ];
        selectedAbility = data.abilities.find(ability => ability.ability.name === 'contrary');
        //heldItem = data.held_items.find(item => item.item.name === 'miracle-seed');
        break;

      case 'chandelure':
        movesToShow = [
          { move: { name: 'Shadow Ball' } },
          { move: { name: 'Flamethrower' } },
          { move: { name: 'Energy Ball' } },
          { move: { name: 'Dark Pulse' } }
        ];
        selectedAbility = data.abilities.find(ability => ability.ability.name === 'infiltrator');
        //heldItem = data.held_items.find(item => item.item.name === 'miracle-seed');
        break;

      default:
        selectedAbility = data.abilities[0];
        //heldItem = data.held_items.find(item => item.item.name === 'oran-berry');
        break;
    }

    return { movesToShow, selectedAbility };
  };


  const pokemonInfo = () => {


    if (!data) {
      return null;
    }

    if (!item) {
      return null;
    }


    const { movesToShow, selectedAbility} = pokeChoice(name, data, item);

    //console.log(item);


    return (
      <div
        className={darkMode ? 'pokemon-container-dark' : 'pokemon-container'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pokemon-image">
          <img src={data.sprites.front_default} alt={name} draggable="false" />
        </div>
        <div className="details">
          <div className="abilities">
            <h2 className={darkMode ? 'section-title-dark' : 'section-title'}>Ability:</h2>
            <ul className="abilities-list">
              <li>{formatName(selectedAbility.ability.name)}</li>
            </ul>

            <div className="items" style={{ marginTop: '20px' }}>
              <animated.div
                className="item-box"
                style={itemBoxSpring}
                onMouseEnter={() => setItemBoxHover(true)}
                onMouseLeave={() => setItemBoxHover(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(true);
                }}
              >
                <img src={item.sprites.default} alt={item.name} style={{ width: '45px', height: '45px' }} />
              </animated.div>
                  
              <Popup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
                name={item.name}
                description={item.effect_entries[0].effect.replace(/^Held:\s*/, '')}
              />

              <style jsx>{`
                .item-box {
                  background-color: ${darkMode ? '#4A5568' : '#CBD5E0'};
                  padding: 10px;
                  border-radius: 50%;
                  box-shadow: ${darkMode ? '0 0 5px rgba(255, 255, 255, 0.5), 0 0 5px rgba(0, 0, 0, 0.2)' : '0 0 5px rgba(0, 0, 0, 0.2)'};
                  margin: 0 auto;
                  width: 60px;
                  height: 60px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              `}</style>
            </div>
          </div>
          <div className="moves">
            <h2 className={darkMode ? 'section-title-dark' : 'section-title'}>Moves:</h2>
            <ul className="moves-list">
              {movesToShow.map((move, index) => (
                <li key={index}>{
                  formatName(move.move.name)
                }</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ color: darkMode ? '#F4F4F4' : '#242424' }}>
      <h1 style={{ position: 'relative' }}>
        {formatName(name)}
      </h1>

      {pokemonInfo()}

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
      `}</style>
    </div>
  );
};

export default Pokemon;

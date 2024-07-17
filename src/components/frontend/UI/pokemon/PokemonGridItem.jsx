import React, { useState } from 'react';
import Pokemon from './pokemon';
import { animated } from 'react-spring';
import GridItem from '../animations/GridItem';

const PokemonGridItem = ({ name, heldItem, darkMode, index, expandedIndex, setExpandedIndex }) => {
    const isExpanded = index === expandedIndex;
    const [hovered, setHovered] = useState(false);

    const handleToggle = () => {
        setExpandedIndex(isExpanded ? -1 : index);
    };

    const spring = GridItem(isExpanded, hovered, darkMode);

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
                        <Pokemon name={name} heldItem={heldItem} />
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

export default PokemonGridItem;

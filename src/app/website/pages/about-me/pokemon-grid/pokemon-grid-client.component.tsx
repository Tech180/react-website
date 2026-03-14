"use client";

import React, { useState } from 'react';
import { PokemonEntity } from '@/app/website/interfaces/pokemon/pokemon.interface';
import { PokemonGridClientView } from './pokemon-grid-client.view';
import { formatName } from '@/app/website/utils/string.util';

export function PokemonGridClientComponent({ pokemonEntities }: { pokemonEntities: PokemonEntity[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const getCustomPokemonDetails = (name: string, data: any) => {
    let movesToShow = data.moves.slice(0, 4);
    let selectedAbility = data.abilities[0];

    const lowName = name.toLowerCase();
    switch (lowName) {
      case 'marowak':
        movesToShow = [{ move: { name: 'Swords Dance' } }, { move: { name: 'Bonemerang' } }, { move: { name: 'Knock Off' } }, { move: { name: 'Double Edge' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'rock-head') || selectedAbility;
        break;
      case 'cloyster':
        movesToShow = [{ move: { name: 'Shell Smash' } }, { move: { name: 'Icicle Spear' } }, { move: { name: 'Rock Blast' } }, { move: { name: 'Ice Shard' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'skill-link') || selectedAbility;
        break;
      case 'flygon':
        movesToShow = [{ move: { name: 'Earthquake' } }, { move: { name: 'U-Turn' } }, { move: { name: 'Rock Slide' } }, { move: { name: 'Dragon Claw' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'levitate') || selectedAbility;
        break;
      case 'zapdos':
        movesToShow = [{ move: { name: 'Thunderbolt' } }, { move: { name: 'Thunder Wave' } }, { move: { name: 'Roost' } }, { move: { name: 'Heat Wave' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'pressure') || selectedAbility;
        break;
      case 'serperior':
        movesToShow = [{ move: { name: 'Leaf Storm' } }, { move: { name: 'Leaf Blade' } }, { move: { name: 'Coil' } }, { move: { name: 'Giga Drain' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'contrary') || selectedAbility;
        break;
      case 'chandelure':
        movesToShow = [{ move: { name: 'Shadow Ball' } }, { move: { name: 'Flamethrower' } }, { move: { name: 'Energy Ball' } }, { move: { name: 'Dark Pulse' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'infiltrator') || selectedAbility;
        break;
      case 'malamar':
        movesToShow = [{ move: { name: 'Superpower' } }, { move: { name: 'Psycho Cut' } }, { move: { name: 'Knock Off' } }, { move: { name: 'Tera Blast' } }];
        selectedAbility = data.abilities.find((a: any) => a.ability.name === 'contrary') || selectedAbility;
        break;
      default:
        break;
    }

    return { movesToShow, selectedAbility };
  };

  const handleItemClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <PokemonGridClientView 
      pokemonEntities={pokemonEntities}
      expandedIndex={expandedIndex}
      onItemClick={handleItemClick}
      formatName={formatName}
      getCustomPokemonDetails={getCustomPokemonDetails}
    />
  );
}

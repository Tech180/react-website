"use client";

import React, { useState } from 'react';
import { PokemonEntity } from '../../../interfaces/pokemon/pokemon.interface';
import { PokemonGridClientView } from './pokemon-grid-client.view';

export function PokemonGridClientComponent({ pokemonEntities }: { pokemonEntities: PokemonEntity[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleItemClick = (name: string) => {
    setSelectedId(selectedId === name ? null : name);
  };

  return (
    <PokemonGridClientView
      pokemonEntities={pokemonEntities}
      selectedId={selectedId}
      onItemClick={handleItemClick}
      onClose={() => setSelectedId(null)}
    />
  );
}

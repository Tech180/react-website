"use client";

import React, { useState, useCallback } from 'react';
import { PokemonEntity } from '@/features/pokemon/types/pokemon.interface';
import { PokemonGridClientView } from './pokemon-grid-client.view';

export function PokemonGridClientComponent({ pokemonEntities }: { pokemonEntities: PokemonEntity[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleItemClick = useCallback((name: string) => {
    setSelectedId(prev => (prev === name ? null : name));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedId(null);
  }, []);

  return (
    <PokemonGridClientView
      pokemonEntities={pokemonEntities}
      selectedId={selectedId}
      onItemClick={handleItemClick}
      onClose={handleClose}
    />
  );
}

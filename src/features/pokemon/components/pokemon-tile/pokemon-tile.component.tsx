import React, { useCallback } from 'react';
import { PokemonTileView } from './pokemon-tile.view';
import { PokemonTileProps } from '@/features/pokemon/types/pokemon-tile.interface';
import { useTheme } from '@/app/providers/theme-provider';

import { POKEMON_LIST } from '../../consts/pokemon-list.const';
import { prefetchPokemonProfile } from '@/features/pokemon/api/poke-api.service';

export const PokemonTile = React.memo(({ pkmn, isActive, onToggle }: PokemonTileProps) => {
  const { theme } = useTheme();

  const handleHover = useCallback((name: string) => {
    const selectedSet = POKEMON_LIST.find(p => p.name.toLowerCase() === name.toLowerCase());
    prefetchPokemonProfile(name, selectedSet?.item);
  }, []);

  return (
    <PokemonTileView
      pkmn={pkmn}
      isActive={isActive}
      onToggle={onToggle}
      onHover={handleHover}
    />
  );
});

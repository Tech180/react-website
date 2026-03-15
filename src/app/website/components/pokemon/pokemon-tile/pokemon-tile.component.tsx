import React from 'react';
import { PokemonTileView } from './pokemon-tile.view';
import { PokemonTileProps } from '../../../interfaces/pokemon/pokemon-tile.interface';
import { useTheme } from '../../../contexts/theme.context';

export function PokemonTile({ pkmn, isActive, onClick }: PokemonTileProps) {
  const { theme } = useTheme();

  // We extract the ID from the sprite URL for display purposes
  const idMatch = pkmn.pokeData?.species?.url?.match(/\/(\d+)\/$/);
  const displayId = idMatch ? idMatch[1] : '???';

  return (
    <PokemonTileView
      pkmn={pkmn}
      isActive={isActive}
      onClick={onClick}
      theme={theme}
      displayId={displayId}
    />
  );
}

import React from 'react';
import styles from './pokemon-grid.component.module.scss';
import { PokemonGridClientComponent } from './pokemon-grid-client.component';
import { PokemonGridViewProps } from '@/features/pokemon/types/pokemon-grid.interface';

export function PokemonGridView({ pokemonEntities }: PokemonGridViewProps) {
  return (
    <div className={styles.grid}>

      <PokemonGridClientComponent pokemonEntities={pokemonEntities} />
    </div>
  );
}

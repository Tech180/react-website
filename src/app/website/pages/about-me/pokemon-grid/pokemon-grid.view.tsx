import React from 'react';
import styles from './pokemon-grid.component.module.scss';
import { PokemonEntity } from '@/app/website/interfaces/pokemon/pokemon.interface';
import { PokemonGridClientComponent } from './pokemon-grid-client.component';

import { PokemonGridViewProps } from '@/app/website/interfaces/pokemon/pokemon-grid.interface';

export function PokemonGridView({ pokemonEntities }: PokemonGridViewProps) {
  return (
    <div className={styles.gridContainer}>
      <h1 className={styles.heading}>My Favorite Pokemon</h1>
      
      {/* Client Component used to hydrate the interactions (click to expand) */}
      <PokemonGridClientComponent pokemonEntities={pokemonEntities} />

      <div className={styles.imageContainer}>
        <img src="https://fontmeme.com/permalink/240209/e121f8bde9154a24dcb7d418ab4dccee.png" alt="pokemon-font" />
      </div>
    </div>
  );
}

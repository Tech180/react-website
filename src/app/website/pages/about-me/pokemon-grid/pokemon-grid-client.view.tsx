import React from 'react';
import { motion } from 'framer-motion';
import styles from './pokemon-grid.module.scss';
import { PokemonGridClientViewProps } from '../../../interfaces/pokemon/pokemon-grid.interface';
import { PokemonTile } from '../../../components/pokemon/pokemon-tile/pokemon-tile.component';
import { InformationCard } from '../../../components/pokemon/information-card/information-card.component';
import { gridSpringTransition } from '../../../consts/ui/motion.consts';

export function PokemonGridClientView({
  pokemonEntities,
  selectedId,
  onItemClick,
  onClose
}: PokemonGridClientViewProps) {
  const selectedPkmn = pokemonEntities.find(p => p.name === selectedId);

  return (
    <section className={styles['roster-section']}>
      <div className={styles.inner}>
        <div className={styles['expanded-section']}>
          {selectedPkmn && (
            <InformationCard pkmn={selectedPkmn} onClose={onClose} />
          )}
        </div>

        <motion.div layout transition={gridSpringTransition} className={styles.grid}>
          {pokemonEntities.map((pkmn) => (
            <PokemonTile
              key={pkmn.name}
              pkmn={pkmn}
              isActive={selectedId === pkmn.name}
              onClick={() => onItemClick(pkmn.name)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

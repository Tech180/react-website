import React from 'react';
import { motion } from 'framer-motion';
import styles from './pokemon-grid.module.scss';
import { PokemonGridClientViewProps } from '@/features/pokemon/types/pokemon-grid.interface';
import { PokemonTile } from '@/features/pokemon/components/pokemon-tile/pokemon-tile.component';
import { InformationCard } from '@/features/pokemon/components/information-card/information-card.component';
import { gridSpringTransition } from '@/shared/ui/consts/motion.const';

export const PokemonGridClientView = React.memo(({
  pokemonEntities,
  selectedId,
  onItemClick,
  onClose
}: PokemonGridClientViewProps) => {
  const selectedPkmn = pokemonEntities.find(p => p.name === selectedId);

  return (
    <section className={styles['roster-section']}>
      <div className={styles['roster-inner']}>
        <div className={styles['roster-expanded']}>
          {selectedPkmn && (
            <InformationCard pkmn={selectedPkmn} onClose={onClose} />
          )}
        </div>

        <motion.div layout transition={gridSpringTransition} className={styles['roster-grid']}>
          {pokemonEntities.map((pkmn) => (
            <PokemonTile
              key={pkmn.name}
              pkmn={pkmn}
              isActive={selectedId === pkmn.name}
              onToggle={onItemClick}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

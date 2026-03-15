import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import styles from './pokemon-grid.module.scss';
import { PokemonEntity } from '../../../interfaces/pokemon/pokemon.interface';
import { PokemonTile } from '../../../components/pokemon/pokemon-tile/pokemon-tile.component';
import { InformationCard } from '../../../components/pokemon/information-card/information-card.component';
import { useTheme } from '../../../contexts/theme.context';

interface PokemonGridClientViewProps {
  pokemonEntities: PokemonEntity[];
  selectedId: string | null;
  onItemClick: (name: string) => void;
  onClose: () => void;
}

import { Transition } from 'framer-motion';

const springTransition: Transition = {
  type: "spring",
  stiffness: 850,
  damping: 55,
  mass: 0.5,
  restDelta: 0.001,
  restSpeed: 0.001
};

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

        <motion.div layout transition={springTransition} className={styles.grid}>
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

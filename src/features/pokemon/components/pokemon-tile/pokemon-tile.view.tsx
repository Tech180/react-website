'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './pokemon-tile.module.scss';
import { PokemonTileViewProps } from '@/features/pokemon/types/pokemon-tile.interface';
import { AestheticShell } from '@/shared/ui/aesthetic-shell/aesthetic-shell.component';

export const PokemonTileView = React.memo(({ pkmn, isActive, onToggle, onHover }: PokemonTileViewProps) => {
  return (
    <AestheticShell
      className={`${styles.tile} ${isActive ? styles.active : ''}`}
      size="small"
      density="sparse"
    >
      <motion.div
        className={styles['tile-inner']}
        onClick={() => onToggle(pkmn.name)}
        onMouseEnter={() => onHover?.(pkmn.name)}
        whileHover="hover"
        animate={isActive ? 'active' : 'idle'}
      >
        <motion.img
          src={pkmn.spriteUrl}
          alt={pkmn.name}
          className={styles['tile-sprite']}
          draggable={false}
          variants={{
            idle: { opacity: 0.5, scale: 1 },
            hover: { opacity: 1, scale: 1.1 },
            active: { opacity: 1, scale: 1.1 }
          }}
          transition={{ duration: 0.3 }}
        />
        <span className={styles['tile-name']}>{pkmn.name}</span>
      </motion.div>
    </AestheticShell>
  );
});

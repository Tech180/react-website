import React from 'react';
import { motion } from 'framer-motion';
import styles from './pokemon-tile.module.scss';
import { PokemonTileViewProps } from '../../../interfaces/pokemon/pokemon-tile.interface';
import { AestheticShell } from '../../common/aesthetic-shell/aesthetic-shell.component';
import { ArmoredFrame } from '../../common/aesthetic-shell/shell-layers/armored-frame.view';

export function PokemonTileView({ pkmn, isActive, onClick, theme, displayId }: PokemonTileViewProps) {
  return (
    <AestheticShell
      className={`${styles['pokemon-tile']} ${isActive ? styles['is-active'] : ''}`}
      layers={theme === 'cyberpunk' && <ArmoredFrame />}
    >
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        animate={{ 
          scale: isActive ? 0.95 : 1,
          transition: { type: "spring", stiffness: 300, damping: 30 }
        }}
      >
        {theme === 'cyberpunk' && !isActive && (
          <div className={styles['cyber-indicator']} />
        )}
        <div className={styles.content}>
          <div className={styles.id}>#{displayId}</div>
          <motion.img 
            src={pkmn.spriteUrl} 
            alt={pkmn.name} 
            className={`${styles.sprite} ${isActive ? styles['is-active'] : styles['is-idle']}`}
            draggable={false}
            animate={{ scale: isActive ? 1.1 : 1 }}
          />
          <motion.span className={styles.name}>
            {pkmn.name.replace(/-/g, ' ')}
          </motion.span>
        </div>
      </motion.div>
    </AestheticShell>
  );
}

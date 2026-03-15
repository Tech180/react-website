import React from 'react';
import { motion } from 'framer-motion';
import styles from './pokemon-tile.module.scss';
import { PokemonTileViewProps } from '../../../interfaces/pokemon/pokemon-tile.interface';

export function PokemonTileView({ pkmn, isActive, onClick, theme, displayId }: PokemonTileViewProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`${styles['pokemon-tile']} ${isActive ? styles['is-active'] : ''}`}
    >
      {theme === 'cyberpunk' && !isActive && (
        <div className={styles['cyber-indicator']} />
      )}
      <div className={styles.content}>
        <div className={styles.id}>#{displayId}</div>
        <motion.img 
          layout 
          src={pkmn.spriteUrl} 
          alt={pkmn.name} 
          className={`${styles.sprite} ${isActive ? styles['is-active'] : styles['is-idle']}`}
          draggable={false}
        />
        <motion.span layout className={styles.name}>
          {pkmn.name.replace(/-/g, ' ')}
        </motion.span>
      </div>
    </motion.div>
  );
}

import React from 'react';
import styles from './pokemon-logo-loader.module.scss';

interface PokemonLogoLoaderProps {
  size?: string;
  className?: string;
}

/**
 * A modular, shared Pokemon "S" Logo Loading Spinner.
 */
export const PokemonLogoLoader: React.FC<PokemonLogoLoaderProps> = ({ 
  size = '100px',
  className = '' 
}) => {
  return (
    <div 
      className={`${styles['loader-container']} ${className}`} 
      style={{ '--logo-size': size } as React.CSSProperties}
    >
      <div className={styles['loader-logo']}>
        <div className={styles['loader-outer']}></div>
        <div className={styles['loader-left']}></div>
        <div className={styles['loader-right']}></div>
        <div className={styles['loader-center']}></div>
      </div>
    </div>
  );
};

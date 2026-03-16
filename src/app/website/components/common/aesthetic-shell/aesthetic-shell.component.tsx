import React from 'react';
import styles from './aesthetic-shell.module.scss';

interface AestheticShellProps {
  children: React.ReactNode;
  className?: string;
  layers?: React.ReactNode;
}

/**
 * AestheticShell: A premium, modular wrapper for UI containers.
 * Allows layering atomic visual effects (Scanlines, Grids, Glitches) 
 * using a compositional architecture.
 */
export function AestheticShell({ children, className = '', layers }: AestheticShellProps) {
  return (
    <div className={`${styles['aesthetic-shell']} ${className}`}>
      {/* Visual Effect Layers */}
      <div className={styles.layers}>
        {layers}
      </div>
      
      {/* Content Layer */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

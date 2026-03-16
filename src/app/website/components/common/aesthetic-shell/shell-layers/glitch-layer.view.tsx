import React from 'react';
import styles from './glitch-layer.module.scss';

export function GlitchLayer() {
  return (
    <>
      <div className={`${styles['glitch-layer']} ${styles.red}`} />
      <div className={`${styles['glitch-layer']} ${styles.cyan}`} />
    </>
  );
}

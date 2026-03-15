import React from 'react';
import styles from './cyber-decor.module.scss';

export function CyberDecorView() {
  return (
    <div className={styles['cyber-decor']} aria-hidden="true">
      <div className={`${styles.corner} ${styles.tl}`} />
      <div className={`${styles.corner} ${styles.tr}`} />
      <div className={`${styles.corner} ${styles.bl}`} />
      <div className={`${styles.corner} ${styles.br}`} />
      <div className={styles['center-line']} />
    </div>
  );
}

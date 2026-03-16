import React from 'react';
import styles from './armored-frame.module.scss';

export function ArmoredFrame() {
  return (
    <>
      <div className={`${styles.corner} ${styles['top-left']}`} />
      <div className={`${styles.corner} ${styles['top-right']}`} />
      <div className={`${styles.corner} ${styles['bottom-left']}`} />
      <div className={`${styles.corner} ${styles['bottom-right']}`} />
      <div className={styles['center-line']} />
    </>
  );
}

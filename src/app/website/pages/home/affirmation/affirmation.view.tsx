import React from 'react';
import Link from 'next/link';
import styles from './affirmation.component.module.scss';
import { AffirmationViewProps } from '../../../interfaces/home/affirmation.interface';

export function AffirmationView({ affirmation }: AffirmationViewProps) {
  return (
    <div className={styles.affirm}>
      <div className={styles['affirm-title']}>Daily Affirmation:</div>
      <div className={styles['affirm-subtitle']}>{affirmation}</div>
      <Link
        className={styles['affirm-logo']}
        href="https://github.com/annthurium/affirmations"
        target="_blank"
        rel="noopener noreferrer"
      >
        affirmation api
      </Link>
      <div className={styles['affirm-logo-small']}>a</div>
    </div>
  );
}

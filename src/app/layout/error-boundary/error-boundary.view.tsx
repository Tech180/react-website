import React from 'react';
import styles from './error-boundary.module.scss';

import { ErrorViewProps } from './types/error-boundary.interface';

export function ErrorView({ message, reset }: ErrorViewProps) {
  return (
    <div className={styles['error-boundary']}>
      <h2 className={styles['error-boundary-heading']}>Oops! Something went wrong</h2>
      <p className={styles['error-boundary-message']}>
        {message}
      </p>
      <button 
        className={styles['error-boundary-button']}
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}

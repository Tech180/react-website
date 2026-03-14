import React from 'react';
import styles from './global-error.module.scss';

interface GlobalErrorViewProps {
  reset: () => void;
}

export function GlobalErrorView({ reset }: GlobalErrorViewProps) {
  return (
    <div className={styles['global-error-container']}>
      <h1 className={styles['global-error-container-heading']}>Catastrophic Failure</h1>
      <p className={styles['global-error-container-text']}>
        A critical error has occurred. Our engineers have been notified.
      </p>
      <button 
        className={styles['global-error-container-button']}
        onClick={reset}
      >
        Attempt Recovery
      </button>
    </div>
  );
}

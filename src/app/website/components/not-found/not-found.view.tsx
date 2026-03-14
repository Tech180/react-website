import React from 'react';
import Link from "next/link";
import styles from './not-found.module.scss';

export function NotFoundView() {
  return (
    <div className={styles['not-found-container']}>
      <h1 className={styles['not-found-container-code']}>404</h1>
      <h2 className={styles['not-found-container-heading']}>Resource Not Found</h2>
      <p className={styles['not-found-container-description']}>
        The data or page you are looking for does not exist in our systems.
      </p>
      <Link 
        href="/"
        className={styles['not-found-container-link']}
      >
        Return to Dashboard
      </Link>
    </div>
  );
}

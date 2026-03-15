import React from 'react';
import Image from 'next/image';
import styles from './header.component.module.scss';
import { HeaderViewProps } from '../../interfaces/ui/header.interface';

export function HeaderView({ description, image }: HeaderViewProps) {
  return (
    <div className={styles['header-container']}>
      {image && (
        <Image
          src={image}
          alt="Header Background"
          fill
          priority
          className={styles['header-bg']}
        />
      )}
      <div className={styles['header-overlay']}></div>
      <div className={styles['header-content']}>
        <h1 dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

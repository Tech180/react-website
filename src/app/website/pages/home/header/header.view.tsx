import React from 'react';
import styles from './header.component.module.scss';

import { HeaderViewProps } from '@/app/website/interfaces/home/header.interface';

export function HeaderView({ description, image }: HeaderViewProps) {
  return (
    <div 
      className={styles['header-container']} 
      style={{ backgroundImage: `url('${image}')` }}
    >
      <h1 dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

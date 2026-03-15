import React from 'react';
import styles from './games-carousel.component.module.scss';
import { CarouselItem } from '../../../interfaces/carousel/carousel.interface';

export function GamesCarouselView({ items }: { items: CarouselItem[] }) {
  return (
    <div className={styles['games-carousel']}>
      <h1 className={styles.heading}>My Favorite Games</h1>

      <div className={styles['scroll-track']}>
        {items.map((item) => (
          <div key={item.id} className={styles.item} title={item.summary}>
            <img src={item.imageSrc} alt={item.label} className={styles['carousel-image']} />
            <div className={styles.overlay}>
              <p className={styles.label}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['igdb-container']}>
        <h1>Demonstrating</h1>
        <div className={styles['image-wrap']}>
          <a href="https://api-docs.igdb.com/#getting-started" target="_blank" rel="noopener noreferrer">
            <img src="/images/IGDB.svg" alt="IGDB" className={styles['igdb-img']} />
          </a>
        </div>
      </div>
    </div>
  );
}

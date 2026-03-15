import React from 'react';
import styles from './games-carousel.component.module.scss';
import { CarouselItem } from '../../../interfaces/carousel/carousel.interface';

export function GamesCarouselView({ items }: { items: CarouselItem[] }) {
  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.heading}>My Favorite Games</h1>

      <div className={styles.scrollTrack}>
        {items.map((item) => (
          <div key={item.id} className={styles.gameItem} title={item.summary}>
            <img src={item.imageSrc} alt={item.label} className={styles.gameImg} />
            <div className={styles.overlay}>
              <p className={styles.label}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.imageContainer}>
        <h1>Demonstrating</h1>
        <div className={styles.igdbImageWrap}>
          <a href="https://api-docs.igdb.com/#getting-started" target="_blank" rel="noopener noreferrer">
            <img src="/images/IGDB.svg" alt="IGDB" className={styles.igdbImg} />
          </a>
        </div>
      </div>
    </div>
  );
}

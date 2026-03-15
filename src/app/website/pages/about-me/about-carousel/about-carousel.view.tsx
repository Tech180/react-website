import React from 'react';
import styles from './about-carousel.component.module.scss';
import { CarouselItem } from '../../../interfaces/carousel/carousel.interface';

export function AboutCarouselView({ items }: { items: CarouselItem[] }) {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scrollTrack}>
        {items.map(item => (
          <div key={item.id} className={styles.carouselItem}>
            <div className={styles.imageWrapper}>
              <img src={item.imageSrc} alt={item.label} className={styles.carouselImg} />
            </div>
            <div className={styles.infoOverlay}>
              <span className={styles.label}>{item.label}</span>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

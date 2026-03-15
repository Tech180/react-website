import React from 'react';
import styles from './about-carousel.component.module.scss';
import { CarouselItem } from '../../../interfaces/carousel/carousel.interface';

export function AboutCarouselView({ items }: { items: CarouselItem[] }) {
  return (
    <div className={styles['about-carousel']}>
      <div className={styles['scroll-track']}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <div className={styles['image-wrapper']}>
              <img src={item.imageSrc} alt={item.label} className={styles['carousel-img']} />
            </div>
            <div className={styles['info-overlay']}>
              <span className={styles.label}>{item.label}</span>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

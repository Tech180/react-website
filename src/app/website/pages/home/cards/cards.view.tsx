import React from 'react';
import styles from './cards.component.module.scss';

import { CardItemProps } from '@/app/website/interfaces/home/cards.interface';

function CardItem({ src, text, label, path }: CardItemProps) {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={path} target="_blank" rel="noopener noreferrer">
        <figure className={styles['item-pic-wrap']} data-category={label}>
          <img className={styles['item-image']} alt={`${label} Image`} src={src} />
        </figure>
        <div className={styles['item-info']}>
          <h5 className={styles['item-text']}>{text}</h5>
        </div>
      </a>
    </li>
  );
}

export function CardsView() {
  return (
    <div className={styles.cards}>
      <h1>Check out what I have been up to!</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.items}>
            <CardItem
              src="/images/github.png"
              text="Explore my GitHub and check out some of the projects that I've been working on!"
              label="GitHub"
              path="https://github.com/Tech180"
            />
            <CardItem
              src="/images/linkedin.png"
              text="Check out my profile!"
              label="LinkedIn"
              path="https://www.linkedin.com/in/riley-lawson-a7a65b203/"
            />
          </ul>
          <ul className={styles.items}>
            <CardItem
              src="/images/twitter.png"
              text="Want to look at something I barely use? Look no further!"
              label="Twitter"
              path="https://twitter.com/Tech1808"
            />
            <CardItem
              src="/images/facebook.png"
              text="Feel like stalking my personal life? Got you covered ;)"
              label="Facebook"
              path="https://www.facebook.com/riley.lawson.161/"
            />
            <CardItem
              src="/images/instagram.png"
              text="If you are really trying to dig deep... Then I guess you could look here too."
              label="Instagram"
              path="https://www.instagram.com/the_real_wild/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

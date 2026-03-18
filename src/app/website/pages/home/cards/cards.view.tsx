'use client';

import React from 'react';
import styles from './cards.component.module.scss';
import { motion } from 'framer-motion';
import { CardItemProps } from '../../../interfaces/home/cards.interface';
import { AestheticShell } from '../../../components/common/aesthetic-shell/aesthetic-shell.component';

function CardItem({ src, text, label, path }: CardItemProps) {
  return (
    <motion.li
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <AestheticShell className={styles.shell}>
        <a className={styles.link} href={path} target="_blank" rel="noopener noreferrer">
          <div className={styles.iconWrapper}>
            <img className={styles.icon} alt={`${label} Icon`} src={src} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.categoryBadge}>
              <span className={styles.badgeDot}></span>
              {label}
            </div>
            <h3 className={styles.cardTitle}>{label}</h3>
            <p className={styles.itemText}>{text}</p>
          </div>
        </a>
      </AestheticShell>
    </motion.li>
  );
}

export function CardsView() {
  return (
    <section id="projects" className={styles.cards}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>What I&apos;ve Been Up To</h2>
          <p>A quick look at my professional journey, personal projects, and social presence across the web.</p>
        </motion.div>

        <ul className={styles.items}>
          <CardItem
            src="/images/github.png"
            text="Explore my repositories and check out the open-source projects and code experiments I've been building."
            label="GitHub"
            path="https://github.com/Tech180"
          />
          <CardItem
            src="/images/linkedin.png"
            text="Check out my professional background, experience, and let's connect in the industry space."
            label="LinkedIn"
            path="https://www.linkedin.com/in/riley-lawson-a7a65b203/"
          />
          <CardItem
            src="/images/twitter.png"
            text="Want to look at something I barely use? Look no further! Occasional tech thoughts here."
            label="X (Twitter)"
            path="https://twitter.com/Tech1808"
          />
          <CardItem
            src="/images/facebook.png"
            text="Feel like stalking my personal life? I've got you covered ;) Friends, family, and life updates."
            label="Facebook"
            path="https://www.facebook.com/riley.lawson.161/"
          />
          <CardItem
            src="/images/instagram.png"
            text="If you are really trying to dig deep... Then I guess you could look here too. Photo dumps and more."
            label="Instagram"
            path="https://www.instagram.com/the_real_wild/"
          />
        </ul>
      </div>
    </section>
  );
}

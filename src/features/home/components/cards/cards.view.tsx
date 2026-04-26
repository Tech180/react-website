'use client';

import React from 'react';
import styles from './cards.component.module.scss';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { CardItemProps } from '@/features/home/types/cards.interface';
import { AestheticShell } from '@/shared/ui/aesthetic-shell/aesthetic-shell.component';

function CardItem({ icon: Icon, text, label, path }: CardItemProps) {
  return (
    <motion.li
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <AestheticShell className={styles.shell} density='normal' >
        <a className={styles.link} href={path} target="_blank" rel="noopener noreferrer">
          <div className={styles['icon-wrapper']}>
            <Icon className={styles.icon} size={28} />
          </div>
          <div className={styles['card-content']}>
            <div className={styles['category-badge']}>
              <span className={styles['badge-dot']}></span>
              {label}
            </div>
            <h3 className={styles['card-title']}>{label}</h3>
            <p className={styles['item-text']}>{text}</p>
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
          className={styles['section-header']}
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
            icon={Github}
            text="Explore my repositories and check out the open-source projects and code experiments I've been building."
            label="GitHub"
            path="https://github.com/Tech180"
          />
          <CardItem
            icon={Linkedin}
            text="Check out my professional background, experience, and let's connect in the industry space."
            label="LinkedIn"
            path="https://www.linkedin.com/in/riley-lawson-a7a65b203/"
          />
          <CardItem
            icon={Facebook}
            text="Feel like stalking my personal life? I've got you covered ;) Friends, family, and life updates."
            label="Facebook"
            path="https://www.facebook.com/riley.lawson.161/"
          />
          <CardItem
            icon={Instagram}
            text="If you are really trying to dig deep... Then I guess you could look here too. Photo dumps and more."
            label="Instagram"
            path="https://www.instagram.com/the_real_wild/"
          />
        </ul>
      </div>
    </section>
  );
}

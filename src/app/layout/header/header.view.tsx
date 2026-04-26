'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './header.component.module.scss';
import { HeaderViewProps } from '@/shared/types/header.interface';

export function HeaderView({ description, image }: HeaderViewProps) {
  return (
    <header className={styles.header}>
      {/* Background Image Layer */}
      {image && (
        <div className={styles['bg-container']}>
          <Image
            src={image}
            alt="Hero Background"
            fill
            priority
            className={styles.bg}
          />
          <div className={styles.overlay}></div>
        </div>
      )}

      {/* Hero Content */}
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Status Badge */}
        <div className={styles.badge}>
          <div className={styles['dot-container']}>
            <span className={styles.ping}></span>
            <span className={styles.dot}></span>
          </div>
          Available for new opportunities
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Software <br className={styles['mobile-break']} />
          <span className={styles['gradient-text']}>Engineer.</span>
        </h1>

        {/* Sub-headline */}
        <p className={styles.subheadline}>
          Building robust, scalable applications and delivering 
          seamless digital experiences with modern technologies.
        </p>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="#projects" className={styles.cta}>
            View My Work
          </a>
        </div>
      </motion.div>

      {/* Ambient Glow */}
      <div className={styles.glow}></div>
    </header>
  );
}

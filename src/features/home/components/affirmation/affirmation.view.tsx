'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './affirmation.component.module.scss';
import { AffirmationViewProps } from '@/features/home/types/affirmation.interface';

export function AffirmationView({ affirmation }: AffirmationViewProps) {
  return (
    <section className={styles.affirm}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h4 className={styles.title}>Daily Affirmation</h4>
        <p className={styles.text}>
          &quot;{affirmation}&quot;
        </p>
        
        <Link
          className={styles.logo}
          href="https://github.com/annthurium/affirmations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data provided by Affirmation API
        </Link>
      </motion.div>
    </section>
  );
}

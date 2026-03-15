import React from 'react';
import { motion } from 'framer-motion';
import styles from './stat-bar.module.scss';
import { StatBarViewProps } from '../../../../../interfaces/pokemon/stat-bar.interface';

export function StatBarView({ label, value, max = 200, colorClass }: StatBarViewProps) {
  return (
    <div className={styles['stat-bar']}>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <div className={styles.bg}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(value / max) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`${styles.fill} ${colorClass}`}
          />
        </div>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}

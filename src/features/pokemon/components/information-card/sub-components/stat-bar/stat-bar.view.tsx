import React from 'react';
import { motion } from 'framer-motion';
import styles from './stat-bar.module.scss';
import { StatBarViewProps } from '@/features/pokemon/types/stat-bar.interface';

export const StatBarView = React.memo(({ label, value, max = 200, colorStyle }: StatBarViewProps) => {
  return (
    <div className={styles['stat-bar']}>
      <div className={styles['stat-bar-row']}>
        <span className={styles['stat-bar-label']}>{label}</span>
        <div className={styles['stat-bar-bg']}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(value / max) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={styles['stat-bar-fill']}
            style={{ '--stat-color': colorStyle } as any}
          />
        </div>
        <span className={styles['stat-bar-value']}>{value}</span>
      </div>
    </div>
  );
});

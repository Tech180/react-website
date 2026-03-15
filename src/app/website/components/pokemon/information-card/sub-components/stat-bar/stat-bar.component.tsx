import React from 'react';
import { StatBarView } from './stat-bar.view';
import { StatBarProps } from '../../../../../interfaces/pokemon/stat-bar.interface';
import styles from './stat-bar.module.scss';

export function StatBar({ label, value, max = 200 }: StatBarProps) {
  let colorClass = styles.low;
  if (value >= 120) colorClass = styles.excellent;
  else if (value >= 90) colorClass = styles.good;
  else if (value >= 60) colorClass = styles.medium;

  return (
    <StatBarView
      label={label}
      value={value}
      max={max}
      colorClass={colorClass}
    />
  );
}

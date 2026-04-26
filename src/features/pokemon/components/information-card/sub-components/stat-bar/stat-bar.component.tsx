import React from 'react';
import { StatBarView } from './stat-bar.view';
import { StatBarProps } from '@/features/pokemon/types/stat-bar.interface';
import styles from './stat-bar.module.scss';

export const StatBar = React.memo(({ label, value, max = 200 }: StatBarProps) => {
  let colorStyle = 'var(--stat-red)';
  if (value >= 120) colorStyle = 'var(--stat-cyan)';
  else if (value >= 90) colorStyle = 'var(--stat-green)';
  else if (value >= 60) colorStyle = 'var(--stat-orange)';

  return (
    <StatBarView
      label={label}
      value={value}
      max={max}
      colorStyle={colorStyle}
    />
  );
});

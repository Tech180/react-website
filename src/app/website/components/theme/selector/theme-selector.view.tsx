import React from 'react';
import { Palette } from 'lucide-react';
import styles from './theme-selector.module.scss';
import { ThemeSelectorViewProps } from '../../../interfaces/theme/theme-selector.interface';

export function ThemeSelectorView({ theme, onThemeChange }: ThemeSelectorViewProps) {
  return (
    <div className={styles['theme-selector']}>
      <button
        className={`${styles.theme_btn} ${theme === 'neon' ? styles['theme_btn--neon'] : ''}`}
        onClick={() => onThemeChange(theme === 'default' ? 'neon' : 'default')}
        aria-label="Switch Visual Theme"
      >
        <Palette size={20} />
      </button>
    </div>
  );
}

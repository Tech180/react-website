import React from 'react';
import styles from './theme-toggle.module.scss';
import { Theme, Appearance } from '@/app/website/contexts/theme.context';

interface ThemeToggleViewProps {
  appearance: Appearance;
  theme: Theme;
  onToggleAppearance: () => void;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeToggleView({ appearance, theme, onToggleAppearance, onThemeChange }: ThemeToggleViewProps) {
  const isDark = appearance === "dark";

  return (
    <div className={styles['theme-toggle']}>
      {/* Theme Selector (Cyclic Button for simplicity/aesthetic) */}
      <button 
        className={`${styles.theme_btn} ${theme === 'neon' ? styles['theme_btn--neon'] : ''}`}
        onClick={() => onThemeChange(theme === 'default' ? 'neon' : 'default')}
        aria-label="Switch Visual Theme"
      >
        <i className="fas fa-palette"></i>
      </button>

      {/* Appearance Switch */}
      <button 
        className={styles.switch} 
        onClick={onToggleAppearance} 
        aria-label="Toggle Dark Mode"
      >
        <div className={`${styles['switch-circle']} ${isDark ? styles['switch-circle--dark'] : ''}`}>
          {isDark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        </div>
      </button>
    </div>
  );
}

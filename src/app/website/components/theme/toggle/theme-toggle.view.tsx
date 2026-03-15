import React from 'react';
import { Moon, Sun, Power, Zap, Terminal } from 'lucide-react';
import styles from './theme-toggle.module.scss';
import { ThemeToggleViewProps } from '../../../interfaces/theme/theme-toggle.interface';

export function ThemeToggleView({
  appearance,
  theme,
  size = 'large',
  onToggleAppearance
}: ThemeToggleViewProps) {
  const isDark = appearance === "dark";

  /**
   * Renders the appropriate icon based on the active theme and appearance.
   */
  const renderIcon = () => {
    if (theme === 'neon') return <Power size={20} color={isDark ? "rgba(255,255,255,0.2)" : "white"} />;

    if (theme === 'cyberpunk') {
      return isDark ? (
        <Terminal size={22} color="white" style={{ filter: 'drop-shadow(0 0 5px #fff)' }} />
      ) : (
        <Zap size={22} color="#fcee0a" fill="#fcee0a" />
      );
    }

    return null;
  };

  return (
    <div className={`${styles['theme-toggle']} ${styles[`theme-toggle--${size}`]}`}>
      <button
        className={styles['toggle-track']}
        onClick={onToggleAppearance}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        data-appearance={appearance}
      >
        {/* 1. Default Theme Background */}
        <div className={`${styles['track-background']} ${styles['track-background--default']}`}>
          <div className={styles['stars-container']}>
            {[...Array(15)].map((_, i) => (
              <div key={i} className={styles.star} style={{
                top: `${(i * 13) % 85}%`,
                left: `${(i * 19) % 100}%`
              }} />
            ))}
          </div>
          <div className={styles['clouds-container']}>
            <div className={styles.cloud} style={{ width: '3rem', height: '0.75rem', top: '1rem', left: '1rem' }} />
            <div className={styles.cloud} style={{ width: '4rem', height: '1rem', top: '2.25rem', left: '2.5rem' }} />
          </div>
        </div>

        {/* 2. Neon Theme Background */}
        <div className={`${styles['track-background']} ${styles['track-background--neon']}`} />

        {/* 3. Cyberpunk Theme Background */}
        <div className={`${styles['track-background']} ${styles['track-background--cyberpunk']}`}>
          <div className={styles['terminal-grid']}>
            {[...Array(12)].map((_, i) => (
              <div key={i} className={styles['data-bit']} style={{
                left: `${(i * 14.5) % 95}%`,
                animationDelay: `${i * 0.15}s`
              }} />
            ))}
          </div>
          <div className={styles['hazard-overlay']} />
        </div>

        {/* Sliding Orb (The Body) */}
        <div
          className={styles['toggle-body']}
          style={{
            transform: isDark ? 'translateX(var(--toggle-orb-offset))' : 'translateX(0)'
          }}
        >
          {/* Glitch Wrapper for Cyberpunk (Separated from transform movement) */}
          <div className={`${styles['body-inner']} ${theme === 'cyberpunk' && isDark ? styles['glitch-active'] : ''}`}>
            {/* Default theme body details */}
            {theme === 'default' && (
              <>
                <div className={`${styles.crater} ${styles['crater--1']}`} />
                <div className={`${styles.crater} ${styles['crater--2']}`} />
              </>
            )}

            {/* Icons */}
            {renderIcon()}
          </div>
        </div>
      </button>

      {/* Floating Aura Glow */}
      {size === 'large' && (
        <div className={styles['outer-glow']} style={{ opacity: isDark ? 0.25 : 0 }} />
      )}
    </div>
  );
}

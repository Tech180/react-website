import React from "react";
import { Monitor, Sparkles, Zap, Palette } from "lucide-react";
import styles from "../theme-panel.module.scss";
import { ThemeToggleComponent } from "../../../../components/theme/toggle/theme-toggle.component";
import { ThemePanelMobileContentProps } from "../../../../interfaces/theme/theme-panel.interface";

export function ThemePanelMobileContent({
  isOpen,
  theme,
  onToggle,
  onThemeChange,
}: ThemePanelMobileContentProps) {
  return (
    <div className={styles['mobile-section']}>
      {/* Expandable content: theme selection only */}
      <div
        className={`${styles['mobile-expand']} ${isOpen ? styles['mobile-expand--open'] : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles['mobile-panel-inner']}>
          {/* Theme row — full width */}
          <div className={styles['mobile-row']}>
            <span className={styles['mobile-row-label']}>Style</span>
            <div className={styles['mobile-row-controls']}>
              <button
                className={`${styles['mobile-opt-btn']} ${theme === 'default' ? styles['mobile-opt-btn--active'] : ''}`}
                onClick={() => onThemeChange('default')}
                aria-pressed={theme === 'default'}
              >
                <Monitor size={13} />
                <span>Classic</span>
              </button>
              <button
                className={`${styles['mobile-opt-btn']} ${theme === 'neon' ? styles['mobile-opt-btn--active'] : ''}`}
                onClick={() => onThemeChange('neon')}
                aria-pressed={theme === 'neon'}
              >
                <Sparkles size={13} />
                <span>Neon</span>
              </button>
              <button
                className={`${styles['mobile-opt-btn']} ${theme === 'cyberpunk' ? styles['mobile-opt-btn--active'] : ''}`}
                onClick={() => onThemeChange('cyberpunk')}
                aria-pressed={theme === 'cyberpunk'}
              >
                <Zap size={13} />
                <span>Cyberpunk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trigger row: [Appearance + ThemeToggle] on left, [Palette] on right */}
      <div className={styles['mobile-trigger-row']}>
        <div className={styles['mobile-trigger-left']}>
          <span className={styles['mobile-section-label']}>Appearance</span>
          <ThemeToggleComponent size="small" />
        </div>
        <button
          className={`${styles['mobile-trigger-btn']} ${isOpen ? styles['mobile-trigger-btn--active'] : ''}`}
          onClick={onToggle}
          aria-label={isOpen ? 'Close theme settings' : 'Open theme settings'}
          aria-expanded={isOpen}
        >
          <Palette size={15} />
        </button>
      </div>
    </div>
  );
}

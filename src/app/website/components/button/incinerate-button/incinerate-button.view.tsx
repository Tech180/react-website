'use client';

import React from 'react';
import styles from './incinerate-button.module.scss';
import { useTheme } from '../../../contexts/theme.context';

export function IncinerateButton() {
  const { theme, incinerationStatus, setIncinerationStatus, isMysticVisible, closeMenus } = useTheme();

  // Only show if the theme is mystic AND vines have actually appeared
  if (theme !== 'mystic' || !isMysticVisible) return null;

  const handleClick = () => {
    if (incinerationStatus === 'none') {
      setIncinerationStatus('burning');
      closeMenus(); // Cinematic: close the menu immediately to view the fire
    }
  };

  const statusLabel = incinerationStatus === 'none' 
    ? 'Incinerate' 
    : incinerationStatus === 'burning' 
      ? 'Burning...' 
      : 'Ashes';

  return (
    <button 
      className={`${styles['incinerate-button']} ${incinerationStatus !== 'none' ? styles['is-burning'] : ''}`}
      onClick={handleClick}
      disabled={incinerationStatus !== 'none'}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
      {statusLabel}
    </button>
  );
}

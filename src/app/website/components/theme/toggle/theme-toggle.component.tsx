"use client";

import React from 'react';
import { ThemeToggleView } from './theme-toggle.view';
import { useTheme } from '../../../contexts/theme.context';

export function ThemeToggleComponent({ size }: { size?: 'small' | 'medium' | 'large' }) {
  const { appearance, theme, toggleAppearance } = useTheme();

  return (
    <ThemeToggleView
      appearance={appearance}
      theme={theme}
      size={size}
      onToggleAppearance={toggleAppearance}
    />
  );
}

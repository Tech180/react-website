"use client";

import React from 'react';
import { ThemeToggleView } from './theme-toggle.view';
import { useTheme, Theme, Appearance } from '@/app/website/contexts/theme.context';

export function ThemeToggleComponent() {
  const { theme, appearance, setTheme, toggleAppearance } = useTheme();
  const isDark = appearance === "dark";

  return (
    <ThemeToggleView 
      appearance={appearance}
      theme={theme}
      onToggleAppearance={toggleAppearance}
      onThemeChange={setTheme}
    />
  );
}

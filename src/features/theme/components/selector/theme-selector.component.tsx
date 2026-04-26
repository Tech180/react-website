"use client";

import React from 'react';
import { ThemeSelectorView } from './theme-selector.view';
import { useTheme } from '@/app/providers/theme-provider';

export function ThemeSelectorComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSelectorView
      theme={theme}
      onThemeChange={setTheme}
    />
  );
}

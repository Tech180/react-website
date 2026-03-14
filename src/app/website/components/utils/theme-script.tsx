import React from "react";

/**
 * Injected script to prevent the "Dark Mode Flash" (FOUC) on page load.
 * This runs before React hydration.
 */
export function ThemeScript() {
  const code = `
    (function() {
      try {
        const savedAppearance = localStorage.getItem('appearance');
        const systemAppearance = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const appearance = savedAppearance || systemAppearance;

        const savedTheme = localStorage.getItem('theme');
        const theme = savedTheme || 'default';

        document.documentElement.setAttribute('data-appearance', appearance);
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {}
    })();
  `.replace(/\s{2,}/g, ' ');

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

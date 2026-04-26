"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

import { Theme, Appearance, IncinerationStatus } from '@/features/theme/types/theme.type';
import { ThemeContext } from '@/features/theme/consts/theme.const';
import { ThemeFilters } from './theme-filters';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");
  const [appearance, setAppearanceState] = useState<Appearance>("light");
  const [incinerationStatus, setIncinerationStatus] = useState<IncinerationStatus>("none");
  const [unlockedThemes, setUnlockedThemes] = useState<Theme[]>(["default", "cyberpunk", "neon", "mystic"]);
  const [isMysticVisible, setIsMysticVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // We need a way to close menus

  useEffect(() => {
    // 1. Initialize Appearance (Light/Dark/System)
    const savedAppearance = localStorage.getItem("appearance") as Appearance | null;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemChange = (e: MediaQueryListEvent | MediaQueryList) => {
      // We need to check the state directly because this effect might have stale closure for 'appearance'
      // but 'localStorage' is a good source of truth for the *intended* mode.
      const currentMode = localStorage.getItem("appearance") as Appearance | null;
      if (!currentMode || currentMode === "system") {
        const newEffective = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-appearance", newEffective);
      }
    };

    const initialAppearance = savedAppearance || "system";
    const effectiveAppearance = initialAppearance === "system"
      ? (mediaQuery.matches ? "dark" : "light")
      : initialAppearance;

    // 2. Initialize Theme (Style)
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || "default";

    // 3. Initialize Unlocked Themes
    const savedUnlocked = localStorage.getItem("unlockedThemes");
    if (savedUnlocked) {
      setUnlockedThemes(JSON.parse(savedUnlocked));
    }

    setAppearanceState(initialAppearance);
    setThemeState(initialTheme);

    document.documentElement.setAttribute("data-appearance", effectiveAppearance);
    document.documentElement.setAttribute("data-theme", initialTheme);

    // 4. Listen for system changes
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const unlockTheme = (newTheme: Theme) => {
    if (!unlockedThemes.includes(newTheme)) {
      const updated = [...unlockedThemes, newTheme];
      setUnlockedThemes(updated);
      localStorage.setItem("unlockedThemes", JSON.stringify(updated));
    }
  };

  const setAppearance = (newAppearance: Appearance) => {
    setAppearanceState(newAppearance);
    const effectiveAppearance = newAppearance === "system" 
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : newAppearance;
    
    document.documentElement.setAttribute("data-appearance", effectiveAppearance);
    localStorage.setItem("appearance", newAppearance);
  };

  const toggleAppearance = () => {
    // Basic cycle: light -> dark -> system -> light
    let newAppearance: Appearance;
    if (appearance === "light") newAppearance = "dark";
    else if (appearance === "dark") newAppearance = "system";
    else newAppearance = "light";
    
    setAppearance(newAppearance);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    // This requires external components to listen to this state or we dispatch an event
    window.dispatchEvent(new CustomEvent('close-all-menus'));
  };

  // Timer to transition from 'burning' to 'burnt'
  useEffect(() => {
    if (incinerationStatus === 'burning') {
      // Auto-close menus on ignition
      closeMenus();
      document.documentElement.setAttribute("data-incinerating", "true");

      const timer = setTimeout(() => {
        setIncinerationStatus('burnt');
        unlockTheme('burnt-forest');
        setTheme('burnt-forest');
        document.documentElement.removeAttribute("data-incinerating");
      }, 3500); 
      return () => {
        clearTimeout(timer);
        document.documentElement.removeAttribute("data-incinerating");
      };
    }
  }, [incinerationStatus]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      appearance, 
      incinerationStatus, 
      unlockedThemes,
      isMysticVisible,
      setTheme, 
      setAppearance, 
      setIncinerationStatus, 
      unlockTheme,
      setIsMysticVisible,
      toggleAppearance,
      closeMenus
    }}>
      <ThemeFilters />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

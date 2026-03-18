"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

import { Theme, Appearance, IncinerationStatus } from '../types/theme/theme.type';
import { ThemeContext } from '../consts/theme/theme.const';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");
  const [appearance, setAppearanceState] = useState<Appearance>("light");
  const [incinerationStatus, setIncinerationStatus] = useState<IncinerationStatus>("none");
  const [unlockedThemes, setUnlockedThemes] = useState<Theme[]>(["default", "cyberpunk", "neon", "mystic"]);
  const [isMysticVisible, setIsMysticVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // We need a way to close menus

  useEffect(() => {
    // 1. Initialize Appearance (Light/Dark)
    const savedAppearance = localStorage.getItem("appearance") as Appearance | null;
    const systemAppearance = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialAppearance = savedAppearance || systemAppearance;

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

    document.documentElement.setAttribute("data-appearance", initialAppearance);
    document.documentElement.setAttribute("data-theme", initialTheme);
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
    document.documentElement.setAttribute("data-appearance", newAppearance);
    localStorage.setItem("appearance", newAppearance);
  };

  const toggleAppearance = () => {
    const newAppearance = appearance === "light" ? "dark" : "light";
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

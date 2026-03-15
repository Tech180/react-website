"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

import { Theme, Appearance } from '../types/theme/theme.type';
import { ThemeContext } from '../consts/theme/theme.const';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");
  const [appearance, setAppearanceState] = useState<Appearance>("light");

  useEffect(() => {
    // 1. Initialize Appearance (Light/Dark)
    const savedAppearance = localStorage.getItem("appearance") as Appearance | null;
    const systemAppearance = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialAppearance = savedAppearance || systemAppearance;

    // 2. Initialize Theme (Style)
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || "default";

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

  const setAppearance = (newAppearance: Appearance) => {
    setAppearanceState(newAppearance);
    document.documentElement.setAttribute("data-appearance", newAppearance);
    localStorage.setItem("appearance", newAppearance);
  };

  const toggleAppearance = () => {
    const newAppearance = appearance === "light" ? "dark" : "light";
    setAppearance(newAppearance);
  };

  return (
    <ThemeContext.Provider value={{ theme, appearance, setTheme, setAppearance, toggleAppearance }}>
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

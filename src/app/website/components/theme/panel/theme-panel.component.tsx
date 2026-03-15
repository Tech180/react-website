"use client";

import React, { useState, useEffect, useRef } from "react";
import { ThemePanelView } from "./theme-panel.view";
import { useTheme } from "../../../contexts/theme.context";
import { Theme, Appearance } from "../../../types/theme/theme.type";

export function ThemePanelComponent() {
  const { theme, setTheme, appearance, setAppearance } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Detect mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Close panel on outside click (desktop only)
  useEffect(() => {
    if (!isOpen || isMobile) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobile]);

  const handleThemeChange = (t: Theme) => setTheme(t);
  const handleAppearanceChange = (a: Appearance) => setAppearance(a);
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <div ref={panelRef}>
      <ThemePanelView
        isOpen={isOpen}
        isMobile={isMobile}
        theme={theme}
        appearance={appearance}
        onToggle={handleToggle}
        onClose={handleClose}
        onThemeChange={handleThemeChange}
        onAppearanceChange={handleAppearanceChange}
      />
    </div>
  );
}

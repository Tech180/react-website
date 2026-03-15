import React from "react";
import { Layout, X, Sun, Moon, Monitor, Sparkles, Zap } from "lucide-react";
import styles from "../theme-panel.module.scss";
import { AppearanceButton } from "./appearance-button";
import { ThemeOption } from "./theme-option";

import { ThemePanelContentProps } from "../../../../interfaces/theme/theme-panel.interface";

export function ThemePanelContent({
  theme,
  appearance,
  isMobile,
  onClose,
  onThemeChange,
  onAppearanceChange,
}: ThemePanelContentProps) {
  return (
    <div className={styles["panel-content"]}>
      <div className={styles["panel-header"]}>
        <span className={styles["panel-header-label"]}>
          <Layout size={16} />
          Interface Settings
        </span>
        <button className={styles["panel-close"]} onClick={onClose} aria-label="Close panel" hidden={isMobile}>
          <X size={16} />
        </button>
      </div>
      <p className={styles["panel-header-sub"]}>Customize your workspace</p>

      {/* Appearance */}
      <section className={styles.section}>
        <label className={styles["section-label"]}>Color Mode</label>
        <div className={styles["appearance-grid"]}>
          <AppearanceButton
            active={appearance === "light"}
            onClick={() => onAppearanceChange("light")}
            icon={<Sun size={18} />}
            label="Light"
          />
          <AppearanceButton
            active={appearance === "dark"}
            onClick={() => onAppearanceChange("dark")}
            icon={<Moon size={18} />}
            label="Dark"
          />
        </div>
      </section>

      {/* Theme */}
      <section className={styles.section}>
        <label className={styles["section-label"]}>Visual Theme</label>
        <div className={styles["theme-list"]}>
          <ThemeOption
            active={theme === "default"}
            onClick={() => onThemeChange("default")}
            icon={<Monitor size={18} />}
            label="Classic"
            description="Clean, balanced, and productive colors."
            gradient="linear-gradient(135deg, #9AC2E6, #B39DDB)"
          />
          <ThemeOption
            active={theme === "neon"}
            onClick={() => onThemeChange("neon")}
            icon={<Sparkles size={18} />}
            label="Cyber Neon"
            description="High-energy palette for creative focus."
            gradient="linear-gradient(135deg, #00f3ff, #ff00ff)"
          />
          <ThemeOption
            active={theme === "cyberpunk"}
            onClick={() => onThemeChange("cyberpunk")}
            icon={<Zap size={18} />}
            label="Cyberpunk"
            description="Distorted, high-contrast hazard theme."
            gradient="linear-gradient(135deg, #fcee0a, #ff003c)"
          />
        </div>
      </section>

      <p className={styles["panel-footer-note"]}>Settings are saved automatically.</p>
    </div>
  );
}

import React from "react";
import { Check } from "lucide-react";
import styles from "../theme-panel.module.scss";

import { ThemeOptionProps } from "@/app/website/interfaces/theme/theme-panel.interface";

export function ThemeOption({ active, onClick, icon, label, description, gradient }: ThemeOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles["theme-option"]} ${active ? styles["theme-option--active"] : ""}`}
      aria-pressed={active}
    >
      <div className={styles["theme-option-swatch"]} style={{ background: gradient }}>
        <div className={styles["theme-option-swatch-overlay"]} />
        <span className={styles["theme-option-swatch-icon"]}>{icon}</span>
        {active && (
          <div className={styles["theme-option-check"]}>
            <Check size={10} strokeWidth={4} />
          </div>
        )}
      </div>
      <div className={styles["theme-option-info"]}>
        <span className={styles["theme-option-label"]}>{label}</span>
        <span className={styles["theme-option-desc"]}>{description}</span>
      </div>
    </button>
  );
}

import React from "react";
import { Check } from "lucide-react";
import styles from "../theme-panel.module.scss";
import { motion } from "framer-motion";

import { ThemeOptionProps } from "@/features/theme/types/theme-panel.interface";

export function ThemeOption({ active, onClick, icon, label, description, gradient }: ThemeOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10, filter: "brightness(2) saturate(0)" }}
      animate={{ opacity: 1, x: 0, filter: "brightness(1) saturate(1)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
    </motion.button>
  );
}

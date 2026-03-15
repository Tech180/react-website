import React from "react";
import styles from "../theme-panel.module.scss";

import { AppearanceButtonProps } from "@/app/website/interfaces/theme/theme-panel.interface";

export function AppearanceButton({ active, onClick, icon, label }: AppearanceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles["appearance-btn"]} ${active ? styles["appearance-btn--active"] : ""}`}
      aria-pressed={active}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

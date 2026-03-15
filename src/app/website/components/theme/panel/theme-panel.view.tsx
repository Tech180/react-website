import React from "react";
import { Palette, X, Monitor, Sparkles, Zap } from "lucide-react";
import styles from "./theme-panel.module.scss";
import { ThemePanelViewProps } from "../../../interfaces/theme/theme-panel.interface";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { DrawerOverlayComponent } from "../../sidebar/drawer-overlay.component";
import { ThemePanelContent } from "./sub-components/theme-panel-content";
import { ThemePanelMobileContent } from "./sub-components/theme-panel-mobile-content";

export function ThemePanelView({
  isOpen,
  isMobile,
  scrolled,
  theme,
  appearance,
  onToggle,
  onClose,
  onThemeChange,
  onAppearanceChange,
}: ThemePanelViewProps) {
  return (
    <div className={`${styles["panel-root"]} ${isMobile ? styles["panel-root--mobile"] : ""}`}>

      {/* Desktop: trigger button + shared SidebarComponent */}
      {!isMobile && (
        <>
          <button
            className={`${styles.trigger} ${isOpen ? styles["trigger--active"] : ""}`}
            onClick={onToggle}
            aria-label={isOpen ? "Close theme panel" : "Open theme panel"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Palette size={20} />}
          </button>

          {/* Shared blurred overlay closes the panel on outside click */}
          <DrawerOverlayComponent open={isOpen} onClick={onClose} />

          {/* Shared sidebar shell — same look as the mobile nav drawer */}
          <SidebarComponent
            open={isOpen}
            side="left"
            variant="theme"
            id="theme-panel-sidebar"
            scrolled={scrolled}
            aria-label="Theme Settings"
            aria-hidden={!isOpen}
          >
            <ThemePanelContent
              theme={theme}
              appearance={appearance}
              isMobile={false}
              onClose={onClose}
              onThemeChange={onThemeChange}
              onAppearanceChange={onAppearanceChange}
            />
          </SidebarComponent>
        </>
      )}

      {/* Mobile: self-contained accordion section */}
      {isMobile && (
        <ThemePanelMobileContent
          isOpen={isOpen}
          theme={theme}
          onToggle={onToggle}
          onThemeChange={onThemeChange}
        />
      )}
    </div>
  );
}

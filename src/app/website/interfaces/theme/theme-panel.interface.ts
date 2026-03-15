import { Theme, Appearance } from "../../types/theme/theme.type";

export interface ThemePanelViewProps {
  isOpen: boolean;
  isMobile: boolean;
  scrolled?: boolean | undefined;
  theme: Theme;
  appearance: Appearance;
  onToggle: () => void;
  onClose: () => void;
  onThemeChange: (t: Theme) => void;
  onAppearanceChange: (a: Appearance) => void;
}

export interface AppearanceButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

export interface ThemeOptionProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  description: string;
  gradient: string;
}

export interface ThemePanelContentProps {
  theme: Theme;
  appearance: Appearance;
  isMobile: boolean;
  onClose: () => void;
  onThemeChange: (t: Theme) => void;
  onAppearanceChange: (a: Appearance) => void;
}

export interface ThemePanelMobileContentProps {
  isOpen: boolean;
  theme: Theme;
  onToggle: () => void;
  onThemeChange: (t: Theme) => void;
}

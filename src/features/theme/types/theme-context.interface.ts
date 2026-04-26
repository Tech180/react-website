import { Theme, Appearance, IncinerationStatus } from "./theme.type";

export interface ThemeContextType {
  theme: Theme;
  appearance: Appearance;
  incinerationStatus: IncinerationStatus;
  unlockedThemes: Theme[];
  isMysticVisible: boolean;
  setTheme: (theme: Theme) => void;
  setAppearance: (appearance: Appearance) => void;
  setIncinerationStatus: (status: IncinerationStatus) => void;
  unlockTheme: (theme: Theme) => void;
  setIsMysticVisible: (visible: boolean) => void;
  toggleAppearance: () => void;
  closeMenus: () => void;
}

import { Theme, Appearance } from "../../types/theme/theme.type";

export interface ThemeContextType {
  theme: Theme;
  appearance: Appearance;
  setTheme: (theme: Theme) => void;
  setAppearance: (appearance: Appearance) => void;
  toggleAppearance: () => void;
}

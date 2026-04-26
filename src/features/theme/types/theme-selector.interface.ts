import { Theme } from "./theme.type";

export interface ThemeSelectorViewProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

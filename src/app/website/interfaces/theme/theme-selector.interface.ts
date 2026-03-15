import { Theme } from "../../types/theme/theme.type";

export interface ThemeSelectorViewProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

import { Appearance, Theme } from "../../types/theme/theme.type";

export interface ThemeToggleViewProps {
  appearance: Appearance;
  theme: Theme;
  size?: 'small' | 'medium' | 'large' | undefined;
  onToggleAppearance: () => void;
}

export interface StatBarProps {
  label: string;
  value: number;
  max?: number;
}

export interface StatBarViewProps extends StatBarProps {
  colorClass: string;
}

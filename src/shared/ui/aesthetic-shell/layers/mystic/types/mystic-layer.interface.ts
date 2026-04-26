export interface Point {
  x: number;
  y: number;
  nx: number;
  ny: number;
}

export interface MysticLayerProps {
  size?: 'small' | 'medium' | 'large';
  density?: 'sparse' | 'normal' | 'dense';
}

import { IncinerationStatus } from '../../features/theme/types/theme.type';
import React from 'react';

export interface AestheticShellProps {
  children: React.ReactNode;
  className?: string;
  layers?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  density?: 'sparse' | 'normal' | 'dense';
  forceAnimate?: boolean;
  incinerationStatus?: IncinerationStatus;
}

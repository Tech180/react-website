import React from 'react';
import { Theme } from '../../../../features/theme/types/theme.type';
import { ScanlineLayer } from '../layers/scanline/scanline-layer.view';
import { ScanningGridLayer } from '../layers/scanning-grid/scanning-grid-layer.view';
import { ArmoredFrame } from '../layers/armored-frame/armored-frame.view';
import { MysticLayer } from '../layers/mystic/mystic-layer.view';

/**
 * Registry of default visual layers for each theme.
 */
export const SHELL_LAYER_REGISTRY: Record<Theme, React.ReactNode> = {
  cyberpunk: (
    <>
      <ScanlineLayer />
      <ScanningGridLayer />
      <ArmoredFrame />
    </>
  ),
  neon: (
    <>
      <ScanlineLayer />
      <ArmoredFrame />
    </>
  ),
  mystic: <MysticLayer size="medium" density="normal" />,
  'burnt-forest': <MysticLayer size="medium" density="normal" />,
  default: null
};

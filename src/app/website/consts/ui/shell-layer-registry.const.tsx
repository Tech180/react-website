import React from 'react';
import { Theme } from '../../types/theme/theme.type';
import { ScanlineLayer } from '../../components/common/aesthetic-shell/shell-layers/scanline-layer.view';
import { TacticalGridLayer } from '../../components/common/aesthetic-shell/shell-layers/tactical-grid-layer.view';
import { ArmoredFrame } from '../../components/common/aesthetic-shell/shell-layers/armored-frame.view';
import { MysticLayer } from '../../components/common/aesthetic-shell/shell-layers/mystic-layer.view';

/**
 * Registry of default visual layers for each theme.
 */
export const SHELL_LAYER_REGISTRY: Record<Theme, React.ReactNode> = {
  cyberpunk: (
    <>
      <ScanlineLayer />
      <TacticalGridLayer />
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

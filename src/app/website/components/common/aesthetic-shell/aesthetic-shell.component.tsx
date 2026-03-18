'use client';

import React from 'react';
import styles from './aesthetic-shell.module.scss';
import { useTheme } from '../../../contexts/theme.context';
import { SHELL_LAYER_REGISTRY } from '../../../consts/ui/shell-layer-registry.const';
import { AestheticShellProps } from '../../../interfaces/ui/aesthetic-shell.interface';

/**
 * AestheticShell: A premium, modular wrapper for UI containers.
 * Automatically applies themed visual layers (Scanlines, Grids, etc.)
 * based on the active theme, while allowing for explicit overrides.
 * 
 * @param size - Used by the 'mystic' theme to set vine thickness: 'small' | 'medium' | 'large'
 * @param density - Used by the 'mystic' theme to set foliage/orb density: 'sparse' | 'normal' | 'dense'
 */
export function AestheticShell({ children, className = '', layers, size, density, forceAnimate, incinerationStatus: propIncineration }: AestheticShellProps) {
  const { theme, incinerationStatus: globalIncineration } = useTheme();
  const [isActive, setIsActive] = React.useState(forceAnimate || false);

  const incinerationStatus = theme === 'burnt-forest' ? 'burnt' : (propIncineration || globalIncineration);

  // Sync state if forceAnimate changes (e.g. on mount)
  React.useEffect(() => {
    if (forceAnimate) setIsActive(true);
  }, [forceAnimate]);

  // Use explicit layers if provided, otherwise resolve from registry based on theme
  let resolvedLayers = layers !== undefined ? layers : SHELL_LAYER_REGISTRY[theme];

  // If size/density are passed, and we're in the mystic or burnt-forest theme, clone the MysticLayer with those props
  if ((theme === 'mystic' || theme === 'burnt-forest') && resolvedLayers) {
    resolvedLayers = React.Children.map(resolvedLayers, (child) => {
      if (React.isValidElement(child) && (child.type as any).name === 'MysticLayer') {
         return React.cloneElement(child, { 
           size: size || (child.props as any).size, 
           density: density || (child.props as any).density,
           incinerationStatus // Pass this down!
         } as any);
      }
      return child;
    });
  }

  return (
    <div 
      className={`${styles['aesthetic-shell']} aesthetic-shell ${isActive ? 'is-active' : ''} ${styles[`is-${incinerationStatus}`]} ${className}`}
      onMouseEnter={() => setIsActive(true)}
    >
      {/* Visual Effect Layers */}
      <div className={styles.layers}>
        {resolvedLayers}
      </div>

      {/* Content Layer */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

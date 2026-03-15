import React from 'react';
import styles from './sidebar.module.scss';
import { SidebarProps } from '../../interfaces/ui/sidebar.interface';

/**
 * Shared sidebar shell component.
 * Provides the unified glassmorphism visual style for all drawers/panels.
 *
 * @param open    - Whether the sidebar is visible
 * @param side    - Which edge to anchor to ('left' | 'right'), defaults 'left'
 * @param wide    - Use wide variant (fixed 22rem) for settings panels
 */
export function SidebarComponent({
  open,
  side = 'left',
  children,
  className = '',
  ...rest
}: SidebarProps & { wide?: boolean }) {
  const sideClass = side === 'right' ? styles['sidebar--right'] : styles['sidebar--left'];
  const openClass = open ? styles['sidebar--open'] : '';

  return (
    <aside
      className={`${styles.sidebar} ${sideClass} ${openClass} ${className}`}
      {...rest}
    >
      {children}
    </aside>
  );
}

import React from 'react';
import styles from './sidebar.module.scss';
import { DrawerOverlayProps } from '../../interfaces/ui/sidebar.interface';

/**
 * Shared blurred backdrop overlay.
 * Used alongside SidebarComponent to dim and blur the page content.
 *
 * @param open    - Whether the overlay is visible
 * @param onClick - Click handler (typically closes the sidebar)
 */
export function DrawerOverlayComponent({ open, onClick }: DrawerOverlayProps) {
  return (
    <div
      className={`${styles.overlay} ${open ? styles['overlay--open'] : ''}`}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

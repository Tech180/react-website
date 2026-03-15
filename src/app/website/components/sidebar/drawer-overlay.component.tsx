"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './sidebar.module.scss';
import { DrawerOverlayProps } from '../../interfaces/ui/sidebar.interface';

/**
 * Shared blurred backdrop overlay.
 * Uses React Portals to render at the document root to avoid CSS clipping.
 *
 * @param open    - Whether the overlay is visible
 * @param onClick - Click handler (typically closes the sidebar)
 */
export function DrawerOverlayComponent({ open, onClick }: DrawerOverlayProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${open ? styles['overlay--open'] : ''}`}
      onClick={onClick}
      aria-hidden="true"
    />,
    document.body
  );
}

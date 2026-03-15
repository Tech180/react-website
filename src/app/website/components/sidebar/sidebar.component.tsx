"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './sidebar.module.scss';
import { SidebarProps } from '../../interfaces/ui/sidebar.interface';

/**
 * Shared sidebar shell component.
 * Uses React Portals to render at the document root to avoid CSS clipping.
 *
 * @param open    - Whether the sidebar is visible
 * @param side    - Which edge to anchor to ('left' | 'right'), defaults 'left'
 * @param wide    - Use wide variant (fixed 22rem) for settings panels
 */
export function SidebarComponent({
  open,
  scrolled,
  variant = 'default',
  side = 'left',
  children,
  className = '',
  ...rest
}: SidebarProps & { wide?: boolean }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sideClass = side === 'right' ? styles['sidebar--right'] : styles['sidebar--left'];
  const openClass = open ? styles['sidebar--open'] : '';
  const scrolledClass = scrolled ? styles['sidebar--scrolled'] : '';
  const variantClass = variant === 'theme' ? styles['sidebar--theme'] : styles['sidebar--padded'];

  if (!isMounted) return null;

  return createPortal(
    <aside
      className={`${styles.sidebar} ${sideClass} ${openClass} ${scrolledClass} ${variantClass} ${className}`}
      {...rest}
    >
      {children}
    </aside>,
    document.body
  );
}

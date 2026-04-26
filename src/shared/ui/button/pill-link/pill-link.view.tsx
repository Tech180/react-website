import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './pill-link.module.scss';
import { UrlObject } from 'url';

export interface PillLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: ReactNode;
  href: string | UrlObject;
  className?: string;
  isMobile?: boolean;
  rightIcon?: ReactNode;
}

export function PillLink({
  children,
  className = '',
  isMobile = false,
  rightIcon,
  ...props
}: PillLinkProps) {
  return (
    <Link 
      className={`${styles['pill-link']} ${isMobile ? styles['mobile'] : ''} ${className}`}
      {...props}
    >
      <span className={styles['text-content']}>{children}</span>
      {rightIcon && <span className={styles['icon-content']}>{rightIcon}</span>}
    </Link>
  );
}

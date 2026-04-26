"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtonComponent } from '@/shared/ui/button/button.component';
import styles from './footer.component.module.scss';

import { FooterView } from './footer.view';

export function FooterComponent() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return <FooterView isContactPage={isContactPage} />;
}

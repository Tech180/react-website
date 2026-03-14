"use client";

import React, { useState, useEffect } from 'react';
import { NavbarView } from './navbar.view';
import { UIService } from '@/app/website/services/ui.service';

export function NavbarComponent() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const toggleNav = () => setNavMenuOpen(!navMenuOpen);

  // Handle body scroll locking
  useEffect(() => {
    UIService.setBodyScroll(navMenuOpen);
  }, [navMenuOpen]);

  return (
    <NavbarView 
      navMenuOpen={navMenuOpen}
      toggleNav={toggleNav}
    />
  );
}

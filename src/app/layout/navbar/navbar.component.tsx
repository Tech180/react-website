"use client";

import React, { useState, useEffect } from 'react';
import { NavbarView } from './navbar.view';
import { UIService } from '@/core/api/ui.service';

export function NavbarComponent() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNavMenuOpen(!navMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 768 && navMenuOpen) setNavMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [navMenuOpen]);

  // Handle body scroll locking
  useEffect(() => {
    UIService.setBodyScroll(navMenuOpen);
  }, [navMenuOpen]);

  return (
    <NavbarView
      navMenuOpen={navMenuOpen}
      toggleNav={toggleNav}
      scrolled={scrolled}
    />
  );
}

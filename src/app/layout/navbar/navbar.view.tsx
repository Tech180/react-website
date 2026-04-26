import React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import styles from './navbar.component.module.scss';
import { NavbarViewState } from '@/shared/types/navbar.interface';
import { ThemePanelComponent } from '@/features/theme/components/panel/theme-panel.component';
import { SidebarComponent } from '@/app/layout/sidebar/sidebar.component';
import { DrawerOverlayComponent } from '@/app/layout/sidebar/drawer-overlay.component';
import { PillLink } from '@/shared/ui/button/pill-link/pill-link.view';

export function NavbarView({
  navMenuOpen,
  toggleNav,
  scrolled
}: NavbarViewState) {
  return (
    <>
      {/* Mobile Hamburger (Promoted to root to bypass CSS stacking contexts) */}
      <button
        className={styles['mobile-hamburger']}
        onClick={toggleNav}
        aria-label={navMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={navMenuOpen}
      >
        {navMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Main Navigation">

        {/* Brand Logo + Theme Trigger (Desktop: side by side) */}
        <div className={styles['logo-container']}>
          <Link href="/" className={styles['brand-logo']}>
            <h2>Riley Lawson</h2>
          </Link>
          {/* Desktop-only theme panel trigger sits next to the brand */}
          <div className={styles['brand-theme-trigger']}>
            <ThemePanelComponent scrolled={scrolled} />
          </div>
        </div>

        {/* Desktop Menu: Only visible on desktop, positioned on far right */}
        <ul className={styles['desktop-menu']}>
          <li><PillLink href="/">Home</PillLink></li>
          <li><PillLink href="/resume">Resume</PillLink></li>
          <li><PillLink href="/about">About Me</PillLink></li>
        </ul>
      </nav>

      {/* Shared Drawer Overlay */}
      <DrawerOverlayComponent
        open={navMenuOpen}
        onClick={() => navMenuOpen && toggleNav()}
      />

      {/* Mobile Sidebar — uses shared SidebarComponent */}
      <SidebarComponent
        open={navMenuOpen}
        side="left"
        variant="default"
        aria-hidden={!navMenuOpen}
        aria-label="Navigation menu"
      >
        <ul className={`${styles['mobile-menu-list']} ${navMenuOpen ? styles['drawer-content-open'] : ''}`}>
          <li className={styles['menu-item-wrapper']}>
            <PillLink href="/" isMobile onClick={toggleNav} rightIcon={<ArrowRight size={16} />}>
              Home
            </PillLink>
          </li>
          <li className={styles['menu-item-wrapper']}>
            <PillLink href="/resume" isMobile onClick={toggleNav} rightIcon={<ArrowRight size={16} />}>
              Resume
            </PillLink>
          </li>
          <li className={styles['menu-item-wrapper']}>
            <PillLink href="/about" isMobile onClick={toggleNav} rightIcon={<ArrowRight size={16} />}>
              About Me
            </PillLink>
          </li>
        </ul>

        <footer className={`${styles['mobile-footer']} ${navMenuOpen ? styles['mobile-footer--open'] : ''}`}>
          {/* Mobile theme panel: self-contained section with label, trigger, and expandable content */}
          <ThemePanelComponent scrolled={scrolled} />

          <div className={styles['footer-row']}>
            <span className={styles['footer-label']}>Connect</span>
            <div className={styles['social-icons']}>
              <a href="https://github.com/Tech180" target="_blank" rel="noopener noreferrer" className={styles['social-link']} aria-label="Github"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/riley-lawson-a7a65b203/" target="_blank" rel="noopener noreferrer" className={styles['social-link']} aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/the_real_wild/" target="_blank" rel="noopener noreferrer" className={styles['social-link']} aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
        </footer>
      </SidebarComponent>
    </>
  );
}

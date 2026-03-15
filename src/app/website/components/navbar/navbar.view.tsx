import React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import styles from './navbar.component.module.scss';
import { NavbarViewState } from '../../interfaces/navigation/navbar.interface';
import { ThemePanelComponent } from '../theme/panel/theme-panel.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DrawerOverlayComponent } from '../sidebar/drawer-overlay.component';

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
          <Link href="/" className={`${styles['pill-btn']} ${styles['brand-logo']}`}>
            <h2>Riley Lawson</h2>
          </Link>
          {/* Desktop-only theme panel trigger sits next to the brand */}
          <div className={styles['brand-theme-trigger']}>
            <ThemePanelComponent scrolled={scrolled} />
          </div>
        </div>

        {/* Desktop Menu: Only visible on desktop, positioned on far right */}
        <ul className={styles['desktop-menu']}>
          <li><Link href="/" className={styles['pill-btn']}>Home</Link></li>
          <li><Link href="/resume" className={styles['pill-btn']}>Resume</Link></li>
          <li><Link href="/about" className={styles['pill-btn']}>About Me</Link></li>
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
            <Link href="/" className={`${styles['pill-btn']} ${styles['mobile-pill']}`} onClick={toggleNav}>
              <span>Home</span>
              <ArrowRight size={16} />
            </Link>
          </li>
          <li className={styles['menu-item-wrapper']}>
            <Link href="/resume" className={`${styles['pill-btn']} ${styles['mobile-pill']}`} onClick={toggleNav}>
              <span>Resume</span>
              <ArrowRight size={16} />
            </Link>
          </li>
          <li className={styles['menu-item-wrapper']}>
            <Link href="/about" className={`${styles['pill-btn']} ${styles['mobile-pill']}`} onClick={toggleNav}>
              <span>About Me</span>
              <ArrowRight size={16} />
            </Link>
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

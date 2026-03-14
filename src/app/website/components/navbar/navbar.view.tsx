import React from 'react';
import Link from 'next/link';
import styles from './navbar.component.module.scss';
import { NavbarViewState } from '@/app/website/interfaces/navigation/navbar.interface';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

export function NavbarView({ 
  navMenuOpen, 
  toggleNav 
}: NavbarViewState) {
  return (
    <div className={styles.navbar}>
      
      {/* Mobile Hamburger Menu */}
      <button 
        className={`${styles.hamburger} ${navMenuOpen ? styles['hamburger--active'] : ''}`}
        onClick={toggleNav}
        aria-label="Toggle Navigation"
      >
        <i className={`fas fa-bars`}></i>
      </button>

      {/* Brand Logo */}
      <Link href="/" className={styles.logo}>
        <h2>Riley Lawson</h2>
      </Link>

      {/* Desktop Navigation */}
      <ul className={styles['nav-menu']}>
        <li><Link href="/" className={styles['nav-link']}>Home</Link></li>
        <li><Link href="/resume" className={styles['nav-link']}>Resume</Link></li>
        <li><Link href="/about" className={styles['nav-link']}>About Me</Link></li>
        
        <li className={styles['darklight-container']}>
          <ThemeToggleComponent />
        </li>
      </ul>

      {/* Mobile Drawer Navigation */}
      <div className={`${styles['mobile-menu']} ${navMenuOpen ? styles['mobile-menu--active'] : ''}`}>
        <div className={styles['mobile-menu-top']}>
          <ul className={styles['mobile-nav']}>
            <li><Link href="/" className={styles['nav-link']} onClick={toggleNav}>Home</Link></li>
            <li><Link href="/resume" className={styles['nav-link']} onClick={toggleNav}>Resume</Link></li>
            <li><Link href="/about" className={styles['nav-link']} onClick={toggleNav}>About Me</Link></li>
          </ul>

          <div className={styles['mobile-menu-bottom']}>
            <ThemeToggleComponent />

            <div className={styles.social}>
              <a href="https://www.facebook.com/riley.lawson.161/" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><i className="fab fa-facebook-square" style={{color: '#3b5998'}}></i></a>
              <a href="https://www.instagram.com/the_real_wild/" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><i className="fab fa-instagram" style={{color: '#d62976'}}></i></a>
              <a href="https://github.com/Tech180" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><i className="fab fa-github-square"></i></a>
              <a href="https://twitter.com/Tech1808" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><i className="fab fa-twitter-square" style={{color: '#00acee'}}></i></a>
              <a href="https://www.linkedin.com/in/riley-lawson-a7a65b203/" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><i className="fab fa-linkedin" style={{color: '#0072b1'}}></i></a>
            </div>

            <button className={styles['close-btn']} onClick={toggleNav}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

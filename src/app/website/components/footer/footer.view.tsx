import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Github, Twitter, Linkedin } from 'lucide-react';
import { ButtonComponent } from '../button/button.component';
import { FooterViewProps } from '../../interfaces/ui/footer.interface';
import styles from './footer.component.module.scss';

export function FooterView({ isContactPage }: FooterViewProps) {
  return (
    <footer className={styles['footer-container']}>
      {!isContactPage && (
        <section className={styles['footer-subscription']}>
          <p className={styles['footer-subscription-heading']}>
            Want to get in contact?
          </p>
          <div className={styles['footer-form']}>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <ButtonComponent variant="secondary">Click Here!</ButtonComponent>
            </Link>
          </div>
        </section>
      )}

      <section className={styles['social-media']}>
        <div className={styles['social-media-wrap']}>
          <small className={styles['website-rights']}>Riley Lawson © 2024</small>

          <small className={styles['react-made']}>
            Made with React
          </small>

          <div className={styles['social-icons']}>
            <a
              className={`${styles['social-icon-link']} ${styles.facebook}`}
              href='https://www.facebook.com/riley.lawson.161/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <Facebook size={20} />
            </a>
            <a
              className={`${styles['social-icon-link']} ${styles.instagram}`}
              href='https://www.instagram.com/the_real_wild/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <Instagram size={20} />
            </a>
            <a
              className={`${styles['social-icon-link']} ${styles.github}`}
              href='https://github.com/Tech180'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Github size={20} />
            </a>
            <a
              className={`${styles['social-icon-link']} ${styles.twitter}`}
              href='https://twitter.com/Tech1808'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <Twitter size={20} />
            </a>
            <a
              className={`${styles['social-icon-link']} ${styles.linkedin}`}
              href='https://www.linkedin.com/in/riley-lawson-a7a65b203/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

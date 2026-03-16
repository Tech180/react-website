import { Variants, Transition } from 'framer-motion';

/**
 * Standard transition for spring animations
 */
export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 1
};

/**
 * High-stiffness spring for grid layout animations
 */
export const gridSpringTransition: Transition = {
  type: 'spring',
  stiffness: 850,
  damping: 55,
  mass: 0.5,
  restDelta: 0.001,
  restSpeed: 0.001
};

/**
 * Smooth height expansion variants
 */
export const expandVariants: Variants = {
  initial: { 
    height: 0, 
    opacity: 0,
    overflow: 'hidden'
  },
  animate: { 
    height: 'auto', 
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, delay: 0.1 }
    }
  },
  exit: { 
    height: 0, 
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 1, 1] },
      opacity: { duration: 0.2 }
    }
  }
};

/**
 * Fade and slide variant for panel entrances
 */
export const fadeInSlideVariants: Variants = {
  initial: { opacity: 0, y: -10, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};

/**
 * Simple fade variants for content swaps
 */
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expandVariants } from '../../consts/motion.const';
import { ExpandableProps } from '../../../types/expandable.interface';

/**
 * A reusable component for smooth height expansion.
 * Uses layout animations to ensure parents adapt correctly to height changes.
 */
export function Expandable({ isExpanded, children, className }: ExpandableProps) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {isExpanded && (
        <motion.div
          variants={expandVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

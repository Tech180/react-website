import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, X } from 'lucide-react';
import styles from './description-display.module.scss';
import { DescriptionDisplayViewProps } from '../../../../../interfaces/pokemon/description-display.interface';
import { StatBar } from '../stat-bar/stat-bar.component';
import { formatName } from '../../../../../utils/string.util';

export function DescriptionDisplayView({ 
  detail, 
  onClose, 
  isLoading, 
  data, 
  activeGen, 
  activeDescription, 
  availableGenerations, 
  onSetGeneratedActiveGen,
  onAbbreviateGen
}: DescriptionDisplayViewProps) {
  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={styles['description-display']}
        >
          <div className={styles.content}>
            <button onClick={onClose} className={styles['close-btn']}>
              <X size={12} />
            </button>

            {isLoading ? (
              <div className={styles['loader-container']}>
                <Loader2 size={16} className={styles.loader} />
                <span>Decrypting {detail.type} data...</span>
              </div>
            ) : data ? (
              <div className={styles.layout}>
                {/* Left Side: Info */}
                <div className={styles.info}>
                  <div className={styles.header}>
                    <p className={styles.label}>{detail.type}:</p>
                    <h5 className={styles.name}>{formatName(detail.name)}</h5>
                  </div>
                  
                  <p className={styles.description}>
                    {activeDescription}
                  </p>

                  <div className={styles.tabs}>
                    {availableGenerations.slice(-4).map((gen) => (
                      <button
                        key={gen}
                        className={`${styles.tab} ${activeGen === gen ? styles.active : ''}`}
                        onClick={() => onSetGeneratedActiveGen(gen)}
                      >
                        {onAbbreviateGen(gen)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side: Move Stats */}
                {detail.type === 'move' && (
                  <div className={styles['stats-preview']}>
                    <StatBar label="PWR" value={data.power || 0} max={150} />
                    <StatBar label="ACC" value={data.accuracy || 100} max={100} />
                    <StatBar label="PP" value={data.pp || 0} max={40} />
                  </div>
                )}
              </div>
            ) : (
              <p className={styles.error}>Data cascade failed for {detail.name}.</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

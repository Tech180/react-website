import React from 'react';
import styles from './move-card.module.scss';
import { PokemonMove } from '@/features/pokemon/types/pokemon.interface';
import { PokemonDetailType } from '@/features/pokemon/types/pokemon.type';

import { MoveCardProps } from '@/features/pokemon/types/move-card.interface';

export const MoveCard: React.FC<MoveCardProps> = React.memo(({ move, isActive, onToggle }) => {
    const getCatIcon = (cat: string) => {
        if (cat === 'physical') {
            return (
                <svg className={`${styles['move-cat-svg']} ${styles.physical}`} viewBox="0 0 24 24">
                    <polygon points="12,1 15,9 23,12 15,15 12,23 9,15 1,12 9,9" fill="currentColor" />
                </svg>
            );
        }
        if (cat === 'special') {
            return (
                <svg className={`${styles['move-cat-svg']} ${styles.special}`} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                </svg>
            );
        }
        if (cat === 'status') {
            return (
                <svg className={`${styles['move-cat-svg']} ${styles.status}`} viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2Zm0 18A8 8 0 1 1 20 12 8 8 0 0 1 12 20Z" fill="currentColor" opacity="0.3" />
                    <path d="M12 4A8 8 0 0 1 12 20 4 4 0 0 0 12 12 4 4 0 0 1 12 4Z" fill="currentColor" />
                </svg>
            );
        }
        return null;
    };

    return (
        <div
            className={`${styles['move-card']} ${isActive ? styles.active : ''} ${move.isCompetitive ? styles.competitive : ''}`}
            style={{ '--move-color': `var(--type-${move.type})` } as React.CSSProperties}
            onClick={() => onToggle(move.name, 'move')}
        >
            <div className={styles['move-header-row']}>
              <div className={styles['move-pill']}>{move.type.substring(0, 3).toUpperCase()}</div>
              {move.isCompetitive && <span className={styles['move-badge-selected']}>SELECTED</span>}
            </div>
            <div className={styles['move-name-group']}>
                <span className={styles['move-name']}>{move.name}</span>
                <div className={`${styles['move-cat-wrapper']} ${styles[move.cat]}`} title={move.cat.toUpperCase()}>
                    {getCatIcon(move.cat)}
                </div>
            </div>
            <div className={styles['move-stats-compact']}>
                <div className={styles['move-stat-box']}>
                    <span className={styles['move-stat-lbl']}>PWR</span>
                    <span className={styles['move-stat-val']}>{move.pwr || '--'}</span>
                </div>
                <div className={styles['move-stat-box']}>
                    <span className={styles['move-stat-lbl']}>ACC</span>
                    <span className={styles['move-stat-val']}>{move.acc || '--'}</span>
                </div>
                <div className={styles['move-stat-box']}>
                    <span className={styles['move-stat-lbl']}>PP</span>
                    <span className={styles['move-stat-val']}>{move.pp}</span>
                </div>
            </div>
        </div>
    );
});

import React from 'react';
import { X } from 'lucide-react';
import styles from './profile-terminal.module.scss';
import { PokemonMove, PokemonAbility, PokemonItem } from '@/features/pokemon/types/pokemon.interface';

import { ProfileTerminalProps } from '@/features/pokemon/types/profile-terminal.interface';

export const ProfileTerminal: React.FC<ProfileTerminalProps> = React.memo(({ type, data, isOpen, onClose }) => {
    if (!isOpen || !data) return <div className={`${styles.dropdown}`} />;

    const renderMoveDetails = (m: PokemonMove) => {
        const typeColor = `var(--type-${m.type})`;
        return (
            <>
                <div className={styles['dd-header']} style={{ '--type-color': typeColor } as any}>
                    <h3 className={styles['dd-title']}>
                        {m.name}
                    </h3>
                    <div className={styles['dd-badges']}>
                        <span className={styles['dd-badge']}>{m.type}</span>
                        <span className={`${styles['dd-badge']} ${styles.category}`}>{m.cat}</span>
                    </div>
                </div>

                <div className={styles['dd-stats-grid']} style={{ '--type-color': typeColor } as any}>
                    <div className={`${styles['dd-stat-card']} ${styles['primary-stat']}`}>
                        <span className={styles['dd-stat-lbl']}>POWER</span>
                        <span className={`${styles['dd-stat-val']} ${styles.highlight}`}>{m.pwr || '--'}</span>
                    </div>
                    <div className={`${styles['dd-stat-card']} ${styles['primary-stat']}`}>
                        <span className={styles['dd-stat-lbl']}>ACCURACY</span>
                        <span className={`${styles['dd-stat-val']} ${styles.highlight}`}>{m.acc ? m.acc + '%' : '--'}</span>
                    </div>
                    <div className={styles['dd-stat-card']}>
                        <span className={styles['dd-stat-lbl']}>PP (MAX)</span>
                        <span className={styles['dd-stat-val']}>{m.pp}</span>
                    </div>
                    <div className={styles['dd-stat-card']}>
                        <span className={styles['dd-stat-lbl']}>PRIORITY</span>
                        <span className={`${styles['dd-stat-val']} ${m.priority !== 0 ? styles.highlight : ''}`}>{m.priority > 0 ? '+' + m.priority : m.priority}</span>
                    </div>
                    <div className={styles['dd-stat-card']}>
                        <span className={styles['dd-stat-lbl']}>TARGET</span>
                        <span className={styles['dd-stat-val']} style={{ fontSize: '0.7rem' }}>{m.target.replace(/-/g, ' ')}</span>
                    </div>
                    <div className={styles['dd-stat-card']}>
                        <span className={styles['dd-stat-lbl']}>EFFECT</span>
                        <span className={`${styles['dd-stat-val']} ${m.effect !== '--' ? styles.highlight : ''}`} style={{ fontSize: '0.8rem' }}>{m.effect}</span>
                    </div>
                </div>

                <div className={styles['dd-info-split']} style={{ '--theme-color': typeColor } as any}>
                    <div className={styles['dd-block']}>
                        <span className={styles['dd-block-title']}>Combat Protocol</span>
                        <div className={styles['dd-desc-text']}>{m.desc}</div>
                    </div>
                    <div className={styles['dd-block']}>
                        <span className={styles['dd-block-title']} style={{ color: 'var(--text-muted)' }}><span className={styles['dd-dot']}></span> Database Entry</span>
                        <div className={styles['dd-flavor']}>"{m.flavor || m.desc}"</div>
                    </div>
                </div>
            </>
        );
    };

    const renderAbilityDetails = (a: PokemonAbility) => {
        const themeColor = a.hidden ? 'var(--stat-orange)' : 'var(--primary)';
        return (
            <>
                <div className={styles['dd-header']} style={{ '--type-color': themeColor } as any}>
                    <h3 className={styles['dd-title']}>
                        {a.name}
                    </h3>
                    <div className={styles['dd-badges']}>
                        <span className={styles['dd-badge']}>{a.hidden ? 'HIDDEN ABILITY' : 'CORE ABILITY'}</span>
                    </div>
                </div>
                <div className={styles['dd-block']} style={{ marginTop: '0.5rem', maxWidth: '40rem', '--theme-color': themeColor } as any}>
                    <span className={styles['dd-block-title']}>System Effect</span>
                    <div className={styles['dd-desc-text']}>{a.desc}</div>
                </div>
            </>
        );
    };

    const renderItemDetails = (i: PokemonItem) => {
        const themeColor = '#ededed';
        return (
            <>
                <div className={styles['dd-header']} style={{ '--type-color': themeColor } as any}>
                    <h3 className={styles['dd-title']}>
                        {i.name}
                    </h3>
                    <div className={styles['dd-badges']}>
                        <span className={styles['dd-badge']}>ITEM</span>
                    </div>
                </div>
                <div className={styles['dd-info-split']} style={{ marginTop: '0.5rem', '--theme-color': themeColor } as any}>
                    <div className={styles['dd-block']}>
                        <span className={styles['dd-block-title']}>System Effect</span>
                        <div className={styles['dd-desc-text']}>{i.flavor}</div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className={`${styles.dropdown} ${isOpen ? styles.expanded : ''}`}>
            <div className={styles['dropdown-content']}>
                <button className={styles['btn-close-desc']} onClick={onClose}>
                    <X size={14} strokeWidth={3} />
                </button>
                {type === 'move' && renderMoveDetails(data as PokemonMove)}
                {type === 'ability' && renderAbilityDetails(data as PokemonAbility)}
                {type === 'item' && renderItemDetails(data as PokemonItem)}
            </div>
        </div>
    );
});

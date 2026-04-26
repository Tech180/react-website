import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './item-trigger.module.scss';

import { ItemTriggerProps } from '@/features/pokemon/types/item-trigger.interface';

export const ItemTrigger: React.FC<ItemTriggerProps> = React.memo(({ item, isActive, onToggle }) => {
    return (
        <div
            className={`${styles['trigger-box']} ${isActive ? styles.active : ''}`}
            onClick={() => onToggle(item.name, 'item')}
        >
            <div className={styles['trigger-icon']}>
                <img src={item.sprite} alt={item.name} draggable={false} />
            </div>
            <div className={styles['trigger-details']}>
                <p className={styles['trigger-label']}>Held Item</p>
                <p className={styles['trigger-value']}>{item.name || '---'}</p>
            </div>
            <ChevronDown
                size={12}
                className={`${styles['trigger-chevron']} ${isActive ? styles.rotated : ''}`}
                strokeWidth={3}
            />
        </div>
    );
});

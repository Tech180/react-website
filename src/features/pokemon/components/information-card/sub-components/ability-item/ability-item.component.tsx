import React from 'react';
import styles from './ability-item.module.scss';
import { PokemonAbility } from '@/features/pokemon/types/pokemon.interface';
import { PokemonDetailType } from '@/features/pokemon/types/pokemon.type';

import { AbilityItemProps } from '@/features/pokemon/types/ability-item.interface';

export const AbilityItem: React.FC<AbilityItemProps> = React.memo(({ ability, isActive, onToggle }) => {
    return (
        <div
            className={`${styles['skill-item']} ${isActive ? styles.active : ''} ${ability.isCompetitive ? styles.competitive : ''}`}
            onClick={() => onToggle(ability.name, 'ability')}
        >
            <span className={styles['skill-name']}>
                {ability.name}
            </span>
            {ability.isCompetitive && <span className={styles['skill-badge-selected']}>SELECTED</span>}
            {ability.hidden && <span className={styles['skill-badge']}>HIDDEN</span>}
        </div>
    );
});

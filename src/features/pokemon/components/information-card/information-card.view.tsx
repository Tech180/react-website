import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Box, FileText, X } from 'lucide-react';
import styles from './information-card.module.scss';
import { PokemonEntity, PokemonDetail } from '@/features/pokemon/types/pokemon.interface';
import { PokemonDetailType } from '@/features/pokemon/types/pokemon.type';
import { StatBar } from './sub-components/stat-bar/stat-bar.component';
import { MoveCard } from './sub-components/move-card/move-card.component';
import { AbilityItem } from './sub-components/ability-item/ability-item.component';
import { ItemTrigger } from './sub-components/item-trigger/item-trigger.component';
import { ProfileTerminal } from './sub-components/profile-terminal/profile-terminal.component';
import { AestheticShell } from '@/shared/ui/aesthetic-shell/aesthetic-shell.component';

import { InformationCardViewProps } from '@/features/pokemon/types/information-card-view.interface';

export const InformationCardView = React.memo(({
  pkmn,
  theme,
  selectedDetail,
  onToggleDetail,
  onCloseDetail,
  onClose
}: InformationCardViewProps) => {
  return (
    <AnimatePresence mode="popLayout">
      <AestheticShell className={styles.card} size="small" density="normal" forceAnimate={true}>
        <div className={styles['card-content']}>
          <button className={styles['card-btn-close']} onClick={onClose}>
            TERMINATE_SESSION
          </button>

          <div className={styles['card-main']}>
            {/* Panel 1: Brand & Core Equipment */}
            <div className={styles['card-panel']}>
              <div className={styles['card-sprite-box']}>
                <img
                  id="card-sprite"
                  src={pkmn.spriteUrl}
                  alt={pkmn.name}
                  className={styles.pixelated}
                />
              </div>
              <h3 className={styles['card-title']}>{pkmn.name}</h3>
                <div className={styles['card-type-badges']}>
                  {(pkmn.types || []).map(type => (
                    <span 
                      key={type} 
                      className={`${styles['card-type-badge']} ${styles[type]}`}
                    >
                      {type.toUpperCase()}
                    </span>
                  ))}
                </div>

              <div className={styles['card-equipment-box']}>
                <div className={styles['card-panel-header']}>
                  <Box size={12} strokeWidth={3} className={styles['card-header-icon']} />
                  <h4>Equipment</h4>
                </div>
                  {pkmn.item && (
                    <ItemTrigger 
                      item={pkmn.item}
                      isActive={selectedDetail?.type === 'item'}
                      onToggle={onToggleDetail}
                    />
                  )}
              </div>
            </div>

            {/* Panel 2: Stats & Skills */}
            <div className={styles['card-panel']}>
              <div className={styles['card-panel-header']}>
                <Activity size={12} strokeWidth={3} className={styles['card-header-icon']} />
                <h4>Metrics</h4>
              </div>
                <div className={styles['card-stats-list']}>
                  {Object.entries(pkmn.stats || {}).map(([label, value]) => (
                    <StatBar key={label} label={label} value={value} />
                  ))}
                </div>

              <div className={styles['card-panel-header']}>
                <Zap size={12} strokeWidth={3} className={styles['card-header-icon']} />
                <h4>Skills (Abilities)</h4>
              </div>
              <div className={styles['card-ability-list']}>
                <h3 className={styles['card-section-title']}><Activity size={12} /> ABILITIES</h3>
                <div className={styles['card-abilities-grid']}>
                  {(pkmn.abilities || []).map((ability) => (
                    <AbilityItem 
                      key={ability.name} 
                      ability={ability}
                      isActive={selectedDetail?.name === ability.name}
                      onToggle={onToggleDetail}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Panel 3: Moves / Operations */}
            <div className={styles['card-panel']}>
              <div className={styles['card-panel-header']}>
                <FileText size={12} strokeWidth={3} className={styles['card-header-icon']} />
                <h4>Operations</h4>
              </div>
              <div className={styles['card-moves-list']}>
                <h3 className={styles['card-section-title']}><Activity size={12} /> COMBAT_MOVES</h3>
                <div className={styles['card-moves-grid']}>
                  {(pkmn.moves || []).map((move) => (
                    <MoveCard 
                      key={move.name} 
                      move={move}
                      isActive={selectedDetail?.name === move.name}
                      onToggle={onToggleDetail}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Terminal Dropdown */}
          <ProfileTerminal
            type={selectedDetail?.type || null}
            data={selectedDetail?.data || null}
            isOpen={!!selectedDetail}
            onClose={onCloseDetail}
          />
        </div>
      </AestheticShell>
    </AnimatePresence>
  );
});

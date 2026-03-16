import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, ChevronDown } from 'lucide-react';
import styles from './information-card.module.scss';
import { InformationCardViewProps } from '../../../interfaces/pokemon/information-card.interface';
import { StatBar } from './sub-components/stat-bar/stat-bar.component';

import { DescriptionDisplay } from './sub-components/description-display/description-display.component';
import { formatName } from '../../../utils/string.util';
import { AestheticShell } from '../../common/aesthetic-shell/aesthetic-shell.component';
import { ScanlineLayer } from '../../common/aesthetic-shell/shell-layers/scanline-layer.view';
import { TacticalGridLayer } from '../../common/aesthetic-shell/shell-layers/tactical-grid-layer.view';
import { ArmoredFrame } from '../../common/aesthetic-shell/shell-layers/armored-frame.view';

export function InformationCardView({
  pkmn,
  theme,
  selectedDetail,
  data,
  onToggleDetail,
  onCloseDetail,
  onClose
}: InformationCardViewProps) {
  return (
    <AnimatePresence mode="popLayout">
      <AestheticShell
        className={styles['information-card']}
        layers={theme === 'cyberpunk' && (
          <>
            <ScanlineLayer />
            <TacticalGridLayer />
            <ArmoredFrame />
          </>
        )}
      >

        <div className={styles.inner}>
          <div className={styles['main-content']}>
            {/* Identification Panel */}
            <div className={`${styles.panel} ${styles.brand}`}>
              {theme === 'cyberpunk' && (
                <div className={styles['scanner-label']}>Scanner_Active</div>
              )}
              <div className={styles['sprite-container']}>
                <img src={pkmn.spriteUrl} alt={pkmn.name} className={styles.pixelated} draggable={false} />
              </div>
              <h3 className={styles['card-title']}>{pkmn.name.replace(/-/g, ' ')}</h3>
              <div className={styles['type-box']}>
                <div className={styles['type-badges']}>
                  {data.types.map((t: string) => (
                    <span key={t} className={`${styles['type-badge']} ${styles[`type-${t}`]}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {pkmn.itemData && (
                <div className={styles['selection-group']}>
                  <button
                    className={`${styles['item-trigger']} ${selectedDetail?.name === pkmn.itemData.name ? styles['is-active'] : ''}`}
                    onClick={() => onToggleDetail(pkmn.itemData!.name, 'item')}
                  >
                    <div className={styles['trigger-icon']}>
                      <img src={pkmn.itemData.sprites.default} alt={pkmn.itemData.name} draggable={false} />
                    </div>
                    <div className={styles['trigger-text']}>
                      <p className={styles['trigger-label']}>Item</p>
                      <p className={styles['trigger-value']}>{formatName(pkmn.itemData.name)}</p>
                    </div>
                    <ChevronDown size={12} className={`${styles.chevron} ${selectedDetail?.name === pkmn.itemData.name ? styles['is-rotated'] : ''}`} />
                  </button>

                  <div className={styles['ability-section']}>
                    <p className={styles['ability-label']}>Abilities</p>
                    <div className={styles['ability-list']}>
                      {pkmn.pokeData?.abilities.map((a: any) => (
                        <button
                          key={a.ability.name}
                          className={`${styles['ability-trigger']} ${selectedDetail?.name === a.ability.name ? styles['is-active'] : ''}`}
                          onClick={() => onToggleDetail(a.ability.name, 'ability')}
                        >
                          <span className={styles['ability-title']}>
                            {formatName(a.ability.name)}
                            {a.is_hidden && <span className={styles['is-hidden-tag']}>H</span>}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Performance Metrics Panel */}
            <div className={`${styles.panel} ${styles.stats}`}>
              {theme === 'cyberpunk' && (
                <div className={styles['logic-version']}>v.0.98_LOGIC</div>
              )}
              <div className={styles['panel-header']}>
                <Activity size={12} className={styles['header-icon']} />
                <h4>Stats</h4>
              </div>
              <div className={styles['stats-grid']}>
                <StatBar label="HP" value={data.hp} />
                <StatBar label="ATK" value={data.atk} />
                <StatBar label="DEF" value={data.def} />
                <StatBar label="SPA" value={data.spa} />
                <StatBar label="SPD" value={data.spd} />
                <StatBar label="SPE" value={data.spe} />
              </div>
            </div>

            {/* Operations / Routines Panel */}
            <div className={`${styles.panel} ${styles.moves}`}>
              <div className={styles['panel-header']}>
                <Zap size={12} className={styles['header-icon']} />
                <h4>Moves</h4>
              </div>
              <div className={styles['moves-list']}>
                {data.moves.map((move: string, i: number) => (
                  <button
                    key={i}
                    className={`${styles['move-trigger']} ${selectedDetail?.name === move ? styles['is-active'] : ''}`}
                    onClick={() => onToggleDetail(move, 'move')}
                  >
                    <span className={styles['move-name']}>{formatName(move)}</span>
                    <span className={styles['move-code']}>0{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Unified Detail Area */}
          <div className={styles['detail-wrapper']}>
            <DescriptionDisplay
              detail={selectedDetail}
              onClose={onCloseDetail}
            />
          </div>
        </div>
      </AestheticShell>
    </AnimatePresence>
  );
}

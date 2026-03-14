import React from 'react';
import styles from './pokemon-grid.component.module.scss';
import { PokemonEntity } from '@/app/website/interfaces/pokemon/pokemon.interface';
import { PokemonGridClientViewProps } from '@/app/website/interfaces/pokemon/pokemon-grid.interface';

export function PokemonGridClientView({ 
  pokemonEntities, 
  expandedIndex, 
  onItemClick,
  formatName,
  getCustomPokemonDetails
}: PokemonGridClientViewProps) {
  return (
    <div className={styles.grid}>
      {pokemonEntities.map((pkmn, index) => {
        const isExpanded = index === expandedIndex;
        let expandedContent = null;

        if (isExpanded && pkmn.pokeData && pkmn.itemData) {
          const { movesToShow, selectedAbility } = getCustomPokemonDetails(pkmn.name, pkmn.pokeData);

          expandedContent = (
            <div className={styles.expandedInfo}>
              <h1 className={styles.pokemonNameHeader}>{formatName(pkmn.name)}</h1>
              <div className={styles.pokemonDetailsContainer}>
                <div className={styles.pokemonImageBlock}>
                  <img src={pkmn.pokeData.sprites.front_default} alt={pkmn.name} draggable={false} />
                </div>
                <div className={styles.pokemonSpecs}>
                  <div className={styles.abilitiesCol}>
                    <h2 className={styles.sectionTitle}>Ability:</h2>
                    <ul className={styles.abilitiesList}>
                      <li>{formatName(selectedAbility.ability.name)}</li>
                    </ul>
                    <div className={styles.itemBoxWrapper}>
                      <div className={styles.itemBox} title={pkmn.itemData.effect_entries?.[0]?.effect.replace(/^Held(?:\sin\sbattle)?\s*:\s*/, '')}>
                        <img src={pkmn.itemData.sprites.default} alt={pkmn.itemData.name} className={styles.itemSprite} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.movesCol}>
                    <h2 className={styles.sectionTitle}>Moves:</h2>
                    <ul className={styles.movesList}>
                      {movesToShow.map((m: any, i: number) => (
                        <li key={i}>{formatName(m.move.name)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            key={index}
            className={`${styles.gridItem} ${isExpanded ? styles.expanded : ''}`}
            onClick={() => onItemClick(index)}
          >
            <div className={styles.gridItemContent}>
              {isExpanded ? expandedContent : (
                <img src={pkmn.spriteUrl} alt={pkmn.name} className={styles.mainSprite} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

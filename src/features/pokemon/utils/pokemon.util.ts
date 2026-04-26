import {
  PokemonEntity,
  PokemonAbility,
  PokemonMove,
  PokemonItem,
  PokemonSet
} from '../types/pokemon.interface';
import { formatName } from '../../../shared/utils/string.util';

/**
 * Transforms raw PokeAPI data into the Detailed Profile V2 format.
 */
export function transformToPokemonEntity(
  pokeData: any,
  itemData: any,
  abilityDetails: any[],
  moveDetails: any[],
  selectedSet?: PokemonSet
): PokemonEntity {
  // 1. Transform Stats
  const stats: Record<string, number> = {};
  const statMap: Record<string, string> = {
    'hp': 'HP',
    'attack': 'ATK',
    'defense': 'DEF',
    'special-attack': 'SPA',
    'special-defense': 'SPD',
    'speed': 'SPE'
  };

  pokeData.stats.forEach((s: any) => {
    const label = statMap[s.stat.name] || s.stat.name.toUpperCase();
    stats[label] = s.base_stat;
  });

  // 2. Transform Item
  const item: PokemonItem = {
    name: itemData ? formatName(itemData.name) : 'UNKNOWN_ITEM',
    sprite: itemData?.sprites?.default || '',
    flavor: getFlavorText(itemData?.flavor_text_entries) || 'No profile data available.'
  };

  // 3. Transform Abilities
  const abilities: PokemonAbility[] = (abilityDetails || [])
    .map((detail): PokemonAbility | null => {
      if (!detail) return null;
      const rawAbility = pokeData.abilities.find((a: any) => a.ability.name === detail.name);
      return {
        name: formatName(detail.name),
        hidden: rawAbility?.is_hidden || false,
        desc: getEffectText(detail.effect_entries, false) || 'No effect data available.',
        isCompetitive: !!(selectedSet?.ability && detail.name === selectedSet.ability)
      };
    })
    .filter((a): a is PokemonAbility => a !== null);

  // 4. Transform Moves
  const moves: PokemonMove[] = (moveDetails || [])
    .map((detail): PokemonMove | null => {
      if (!detail) return null;
      return {
        name: formatName(detail.name),
        type: detail.type?.name || 'unknown',
        cat: detail.damage_class?.name || 'status',
        pwr: detail.power,
        acc: detail.accuracy,
        pp: detail.pp,
        priority: detail.priority,
        target: formatName(detail.target?.name || 'unknown'),
        effect: getEffectText(detail.effect_entries, true) || '--',
        desc: getEffectText(detail.effect_entries, false) || 'No data provided.',
        flavor: getFlavorText(detail.flavor_text_entries) || 'No move data provided.',
        isCompetitive: !!(selectedSet?.moves?.includes(detail.name))
      };
    })
    .filter((m): m is PokemonMove => m !== null);

  const spriteUrl = pokeData?.sprites?.other?.['official-artwork']?.front_default ||
    pokeData?.sprites?.other?.showdown?.front_default ||
    pokeData?.sprites?.front_default ||
    '';

  return {
    name: formatName(pokeData.name),
    spriteUrl,
    types: pokeData.types.map((t: any) => t.type.name),
    stats,
    item,
    abilities,
    moves
  };
}

/**
 * Extracts English flavor text from PokeAPI entries.
 */
function getFlavorText(entries: any[] | undefined): string | null {
  if (!entries) return null;
  const entry = entries.find((e: any) => e.language.name === 'en');
  if (!entry) return null;
  const rawText = entry.text || entry.flavor_text;
  return rawText ? rawText.replace(/[\f\n]/g, ' ') : null;
}

/**
 * Extracts English effect text from PokeAPI entries.
 */
function getEffectText(entries: any[] | undefined, short: boolean): string | null {
  if (!entries) return null;
  const entry = entries.find((e: any) => e.language.name === 'en');
  if (!entry) return null;
  return short ? (entry.short_effect || entry.effect) : (entry.effect || entry.short_effect);
}

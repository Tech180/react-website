import { PokemonSet } from '../types/pokemon.interface';

export interface PokemonConfig extends PokemonSet {
  name: string;
}

export const POKEMON_LIST: PokemonConfig[] = [
  {
    name: 'Cloyster',
    item: 'focus-sash',
    ability: 'skill-link',
    moves: ['shell-smash', 'icicle-spear', 'rock-blast', 'ice-shard']
  },
  {
    name: 'Flygon',
    item: 'choice-scarf',
    ability: 'levitate',
    moves: ['u-turn', 'earthquake', 'outrage', 'dragon-claw']
  },
  {
    name: 'Marowak-Alola',
    item: 'thick-club',
    ability: 'rock-head',
    moves: ['flare-blitz', 'shadow-bone', 'bonemerang', 'swords-dance']
  },
  {
    name: 'Zapdos',
    item: 'leftovers',
    ability: 'static',
    moves: ['roost', 'thunderbolt', 'hurricane', 'energy-ball']
  },
  {
    name: 'Serperior',
    item: 'choice-specs',
    ability: 'contrary',
    moves: ['leaf-storm', 'dragon-pulse', 'energy-ball', 'glare']
  },
  {
    name: 'Chandelure',
    item: 'choice-specs',
    ability: 'flash-fire',
    moves: ['shadow-ball', 'flamethrower', 'energy-ball', 'trick']
  },
  {
    name: 'Malamar',
    item: 'choice-band',
    ability: 'contrary',
    moves: ['superpower', 'knock-off', 'psycho-cut', 'topsy-turvy']
  }
];

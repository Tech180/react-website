import { PokemonEntity } from "../interfaces/pokemon/pokemon.interface";
import { formatName } from "./string.util";

export interface FormattedPokemonData {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
  types: string[];
  abilities: string[];
  moves: string[];
}

export function formatPokemonData(pokemon: PokemonEntity): FormattedPokemonData {
  if (!pokemon.pokeData) {
    return {
      hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0,
      types: [], abilities: [], moves: []
    };
  }

  const { pokeData } = pokemon;

  // Extract Stats
  const getStat = (name: string) => {
    const statObj = pokeData.stats.find((s: any) => s.stat.name === name);
    return statObj ? statObj.base_stat : 0;
  };

  const hp = getStat('hp');
  const atk = getStat('attack');
  const def = getStat('defense');
  const spa = getStat('special-attack');
  const spd = getStat('special-defense');
  const spe = getStat('speed');

  // Extract Types
  const types = pokeData.types.map((t: any) => t.type.name);

  // Extract Abilities & Moves using the existing custom logic
  let movesToShow = pokeData.moves.slice(0, 4);
  let selectedAbility = pokeData.abilities[0];

  const lowName = pokemon.name.toLowerCase();
  switch (lowName) {
    case 'marowak':
      movesToShow = [{ move: { name: 'swords-dance' } }, { move: { name: 'bonemerang' } }, { move: { name: 'knock-off' } }, { move: { name: 'shadow-bone' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'rock-head') || selectedAbility;
      break;
    case 'cloyster':
      movesToShow = [{ move: { name: 'shell-smash' } }, { move: { name: 'icicle-spear' } }, { move: { name: 'rock-blast' } }, { move: { name: 'ice-shard' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'skill-link') || selectedAbility;
      break;
    case 'flygon':
      movesToShow = [{ move: { name: 'earthquake' } }, { move: { name: 'u-turn' } }, { move: { name: 'dragon-claw' } }, { move: { name: 'roost' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'levitate') || selectedAbility;
      break;
    case 'zapdos':
      movesToShow = [{ move: { name: 'thunderbolt' } }, { move: { name: 'roost' } }, { move: { name: 'heat-wave' } }, { move: { name: 'defog' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'pressure') || selectedAbility;
      break;
    case 'serperior':
      movesToShow = [{ move: { name: 'leaf-storm' } }, { move: { name: 'glare' } }, { move: { name: 'substitute' } }, { move: { name: 'giga-drain' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'contrary') || selectedAbility;
      break;
    case 'chandelure':
      movesToShow = [{ move: { name: 'shadow-ball' } }, { move: { name: 'overheat' } }, { move: { name: 'energy-ball' } }, { move: { name: 'trick' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'infiltrator') || selectedAbility;
      break;
    case 'malamar':
      movesToShow = [{ move: { name: 'superpower' } }, { move: { name: 'psycho-cut' } }, { move: { name: 'knock-off' } }, { move: { name: 'tera-blast' } }];
      selectedAbility = pokeData.abilities.find((a: any) => a.ability.name === 'contrary') || selectedAbility;
      break;
    default:
      break;
  }

  return {
    hp,
    atk,
    def,
    spa,
    spd,
    spe,
    types,
    abilities: [formatName(selectedAbility?.ability?.name)],
    moves: movesToShow.map((m: any) => formatName(m.move.name))
  };
}

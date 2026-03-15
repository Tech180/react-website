import { PokemonDetailType } from '../../types/pokemon/pokemon.type';

export interface PokemonDetail {
  name: string;
  type: PokemonDetailType;
}

export interface PokemonEntity {
  name: string;
  heldItem: string;
  spriteUrl: string;
  pokeData: any;
  itemData: any;
}

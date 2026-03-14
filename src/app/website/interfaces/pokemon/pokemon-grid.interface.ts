import { PokemonEntity } from './pokemon.interface';

export interface PokemonGridClientViewProps {
  pokemonEntities: PokemonEntity[];
  expandedIndex: number;
  onItemClick: (index: number) => void;
  formatName: (name: string) => string;
  getCustomPokemonDetails: (name: string, data: any) => { movesToShow: any[]; selectedAbility: any };
}

export interface PokemonGridViewProps {
  pokemonEntities: PokemonEntity[];
}

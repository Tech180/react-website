import { PokemonEntity } from './pokemon.interface';

export interface PokemonGridClientViewProps {
  pokemonEntities: PokemonEntity[];
  selectedId: string | null;
  onItemClick: (name: string) => void;
  onClose: () => void;
}

export interface PokemonGridViewProps {
  pokemonEntities: PokemonEntity[];
}

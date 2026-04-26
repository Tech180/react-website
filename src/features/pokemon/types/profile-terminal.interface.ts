import { PokemonMove, PokemonAbility, PokemonItem } from './pokemon.interface';
import { PokemonDetailType } from './pokemon.type';

export interface ProfileTerminalProps {
  type: PokemonDetailType | null;
  data: PokemonMove | PokemonAbility | PokemonItem | null;
    isOpen: boolean;
    onClose: () => void;
}

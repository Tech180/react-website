import { PokemonMove } from './pokemon.interface';
import { PokemonDetailType } from './pokemon.type';

export interface MoveCardProps {
    move: PokemonMove;
    isActive: boolean;
    onToggle: (name: string, type: PokemonDetailType) => void;
}

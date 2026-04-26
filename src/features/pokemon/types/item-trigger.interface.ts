import { PokemonItem } from './pokemon.interface';
import { PokemonDetailType } from './pokemon.type';

export interface ItemTriggerProps {
    item: PokemonItem;
    isActive: boolean;
    onToggle: (name: string, type: PokemonDetailType) => void;
}

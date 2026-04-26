import { PokemonAbility } from './pokemon.interface';
import { PokemonDetailType } from './pokemon.type';

export interface AbilityItemProps {
    ability: PokemonAbility;
    isActive: boolean;
    onToggle: (name: string, type: PokemonDetailType) => void;
}

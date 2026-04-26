import { PokemonEntity } from './pokemon.interface';

export interface PokemonTileProps {
  pkmn: PokemonEntity;
  isActive: boolean;
  onToggle: (id: string) => void;
  onHover?: (id: string) => void;
}

export interface PokemonTileViewProps extends PokemonTileProps {
}

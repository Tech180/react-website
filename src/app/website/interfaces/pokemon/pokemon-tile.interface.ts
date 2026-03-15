import { PokemonEntity } from './pokemon.interface';

export interface PokemonTileProps {
  pkmn: PokemonEntity;
  isActive: boolean;
  onClick: () => void;
}

export interface PokemonTileViewProps extends PokemonTileProps {
  theme: string;
  displayId: string;
}

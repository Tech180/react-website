import { PokemonEntity, PokemonDetail } from './pokemon.interface';
import { PokemonDetailType } from './pokemon.type';

export interface InformationCardViewProps {
  pkmn: PokemonEntity;
  theme: string;
  selectedDetail: PokemonDetail | null;
  onToggleDetail: (name: string, type: PokemonDetailType) => void;
  onCloseDetail: () => void;
  onClose: () => void;
}

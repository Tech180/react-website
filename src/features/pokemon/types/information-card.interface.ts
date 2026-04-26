import { PokemonEntity, PokemonDetail } from './pokemon.interface';
import { PokemonDetailType } from '@/features/pokemon/types/pokemon.type';

export interface InformationCardProps {
  pkmn: PokemonEntity;
  onClose: () => void;
}

export interface InformationCardViewProps extends InformationCardProps {
  theme: string;
  selectedDetail: PokemonDetail | null;
  data: any; // Ideally more specific, but using 'any' to match current usage if not available
  onToggleDetail: (name: string, type: PokemonDetailType) => void;
  onCloseDetail: () => void;
}

import { PokemonDetail } from './pokemon.interface';

export interface DescriptionDisplayProps {
  detail: PokemonDetail | null;
  onClose: () => void;
}

export interface DescriptionDisplayViewProps extends DescriptionDisplayProps {
  isLoading: boolean;
  data: any;
  activeGen: string;
  activeDescription: string;
  availableGenerations: string[];
  onSetGeneratedActiveGen: (gen: string) => void;
  onAbbreviateGen: (gen: string) => string;
}

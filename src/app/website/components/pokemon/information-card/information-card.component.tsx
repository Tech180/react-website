import React, { useState } from 'react';
import { InformationCardView } from './information-card.view';
import { InformationCardProps } from '../../../interfaces/pokemon/information-card.interface';
import { formatPokemonData } from '../../../utils/pokemon-formatter.util';
import { useTheme } from '../../../contexts/theme.context';
import { PokemonDetailType } from '../../../types/pokemon/pokemon.type';
import { PokemonDetail } from '../../../interfaces/pokemon/pokemon.interface';

export function InformationCard({ pkmn, onClose }: InformationCardProps) {
  const { theme } = useTheme();
  const [selectedDetail, setSelectedDetail] = useState<PokemonDetail | null>(null);

  // Reset selected detail when switching pokemon without remounting the whole card
  React.useEffect(() => {
    setSelectedDetail(null);
  }, [pkmn.name]);
  
  // Prepare data using our new utility
  const data = formatPokemonData(pkmn);

  const handleToggleDetail = (name: string, type: PokemonDetailType) => {
    if (selectedDetail?.name === name) {
      setSelectedDetail(null);
    } else {
      setSelectedDetail({ name, type });
    }
  };

  const handleCloseDetail = () => setSelectedDetail(null);

  return (
    <InformationCardView
      pkmn={pkmn}
      theme={theme}
      selectedDetail={selectedDetail}
      data={data}
      onToggleDetail={handleToggleDetail}
      onCloseDetail={handleCloseDetail}
      onClose={onClose}
    />
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import { InformationCardView } from './information-card.view';
import { InformationCardProps } from '@/features/pokemon/types/information-card.interface';
import { useTheme } from '@/app/providers/theme-provider';
import { PokemonDetailType } from '@/features/pokemon/types/pokemon.type';
import { PokemonDetail, PokemonEntity } from '@/features/pokemon/types/pokemon.interface';
import { getPokemonProfile } from '@/features/pokemon/api/poke-api.service';
import { transformToPokemonEntity } from '@/features/pokemon/utils/pokemon.util';
import { PokemonLogoLoader } from '@/shared/ui/pokemon-logo-loader/pokemon-logo-loader.component';
import { POKEMON_LIST } from '../../consts/pokemon-list.const';
import styles from './information-card.module.scss';

export function InformationCard({ pkmn: initialPkmn, onClose }: InformationCardProps) {
  const { theme } = useTheme();
  const [profileData, setProfileData] = useState<PokemonEntity | null>(null);
  
  // Find competitive set configuration from the local list
  const selectedSet = POKEMON_LIST.find(p => p.name.toLowerCase() === initialPkmn.name.toLowerCase());
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDetail, setSelectedDetail] = useState<PokemonDetail | null>(null);

  // Fetch High-Fidelity Profile Data on Mount/Change
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const raw = await getPokemonProfile(initialPkmn.name, selectedSet?.item);
        if (!isMounted) return;

        if (!raw) {
          setIsLoading(false);
          return;
        }

        const transformed = transformToPokemonEntity(
          raw.pokemon,
          raw.itemData,
          raw.abilityDetails,
          raw.moveDetails,
          selectedSet
        );
        
        if (isMounted) {
          setProfileData(transformed);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Fetch/Transformation error:', err);
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [initialPkmn.name]);

  // Reset selected detail when switching pokemon
  useEffect(() => {
    setSelectedDetail(null);
  }, [initialPkmn.name]);

  const handleToggleDetail = useCallback((name: string, type: PokemonDetailType) => {
    if (!profileData) return;

    setSelectedDetail(prev => {
      if (prev?.name === name) {
        return null;
      }
      let data: any = null;
      if (type === 'move') {
        data = profileData.moves?.find(m => m.name === name);
      } else if (type === 'ability') {
        data = profileData.abilities?.find(a => a.name === name);
      } else if (type === 'item') {
        data = profileData.item;
      }
      return { name, type, data };
    });
  }, [profileData]);

  const handleCloseDetail = useCallback(() => {
    setSelectedDetail(null);
  }, []);

  if (isLoading) {
    return (
      <div className={styles['card-loader']}>
        <PokemonLogoLoader size="80px" />
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className={styles['card-error']}>
        ERROR: FAILED_TO_RETRIEVE_PROFILE_DATA
      </div>
    );
  }

  return (
    <InformationCardView
      pkmn={profileData}
      theme={theme}
      selectedDetail={selectedDetail}
      onToggleDetail={handleToggleDetail}
      onCloseDetail={handleCloseDetail}
      onClose={onClose}
    />
  );
}

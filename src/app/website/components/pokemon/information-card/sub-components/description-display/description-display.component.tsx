import React, { useState, useEffect } from 'react';
import { DescriptionDisplayView } from './description-display.view';
import { DescriptionDisplayProps } from '../../../../../interfaces/pokemon/description-display.interface';
import { fetchItem, fetchMove, fetchAbility } from '../../../../../services/poke-api.service';
import { formatName } from '../../../../../utils/string.util';
import { POKEMON_GEN_ABBREVIATIONS } from '../../../../../consts/pokemon/pokemon.const';
import { PokemonDetailType } from '../../../../../types/pokemon/pokemon.type';

const abbreviateGen = (gen: string) => POKEMON_GEN_ABBREVIATIONS[gen] || formatName(gen);

export function DescriptionDisplay({ detail, onClose }: DescriptionDisplayProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [activeGen, setActiveGen] = useState<string>('');

  useEffect(() => {
    if (detail) {
      loadData(detail.name, detail.type);
    } else {
      setData(null);
    }
  }, [detail]);

  const loadData = async (name: string, type: PokemonDetailType) => {
    setIsLoading(true);
    let res;
    if (type === 'move') res = await fetchMove(name);
    else if (type === 'item') res = await fetchItem(name);
    else res = await fetchAbility(name);

    setIsLoading(false);

    if (res) {
      setData(res);
      const flavorEntries = res.flavor_text_entries || [];
      const entries = flavorEntries.filter((e: any) => e.language?.name === 'en');

      if (entries.length > 0) {
        const lastGen = entries[entries.length - 1].version_group?.name;
        if (lastGen) setActiveGen(lastGen);
      } else if ((type === 'item' || type === 'ability') && res.effect_entries) {
        setActiveGen('item-effect');
      }
    }
  };

  const getActiveDescription = () => {
    if (!data) return '';

    if (activeGen !== 'item-effect') {
      const flavorEntries = data.flavor_text_entries || [];
      const entry = flavorEntries.find(
        (e: any) => e.language?.name === 'en' && e.version_group?.name === activeGen
      );
      if (entry) return entry.text ? entry.text.replace(/[\n\f]/g, ' ') : entry.flavor_text.replace(/[\n\f]/g, ' ');
    }

    if ((detail?.type === 'item' || detail?.type === 'ability') && data.effect_entries) {
      const effectEntry = data.effect_entries.find((e: any) => e.language?.name === 'en');
      return effectEntry ? effectEntry.short_effect || effectEntry.effect : 'Effect data unavailable.';
    }

    return 'Description not available.';
  };

  const getAvailableGenerations = () => {
    if (!data || !data.flavor_text_entries) return [];
    const gens = data.flavor_text_entries
      .filter((e: any) => e.language?.name === 'en' && e.version_group)
      .map((e: any) => e.version_group.name);
    return Array.from(new Set(gens)) as string[];
  };

  return (
    <DescriptionDisplayView
      detail={detail}
      onClose={onClose}
      isLoading={isLoading}
      data={data}
      activeGen={activeGen}
      activeDescription={getActiveDescription()}
      availableGenerations={getAvailableGenerations()}
      onSetGeneratedActiveGen={setActiveGen}
      onAbbreviateGen={abbreviateGen}
    />
  );
}

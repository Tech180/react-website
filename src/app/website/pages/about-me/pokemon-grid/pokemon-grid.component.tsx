import { getFavoritePokemonData } from '@/app/website/services/poke-api.service';
import { PokemonGridView } from './pokemon-grid.view';

export async function PokemonGridComponent() {
  const pokemonEntities = await getFavoritePokemonData();
  return <PokemonGridView pokemonEntities={pokemonEntities} />;
}

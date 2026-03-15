import { PokemonEntity } from "../interfaces/pokemon/pokemon.interface";
import { POKEMON_LIST } from "../consts/pokemon/pokemon-list.const";
import { interceptor } from "../interceptors/http.interceptor";

export async function fetchPokemon(name: string) {
  try {
    return await interceptor<any>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  } catch (error) {
    console.error(`Error fetching pokemon ${name}:`, error);
    return null;
  }
}

export async function fetchItem(name: string) {
  try {
    return await interceptor<any>(`https://pokeapi.co/api/v2/item/${name.toLowerCase()}`);
  } catch (error) {
    console.error(`Error fetching item ${name}:`, error);
    return null;
  }
}

export async function fetchHeldItem(url: string) {
  try {
    return await interceptor<any>(url);
  } catch (error) {
    console.error(`Error fetching held item from ${url}:`, error);
    return null;
  }
}

/**
 * Fetches and transforms the favorite Pokemon list into entities for the grid.
 */
export async function getFavoritePokemonData(): Promise<PokemonEntity[]> {
  const dataPromises = POKEMON_LIST.map(async (pkmn) => {
    const pokeData = await fetchPokemon(pkmn.name);
    const itemData = await fetchItem(pkmn.item);

    // Enrich item data with sprite if available
    // (The view expects itemData.sprites.default)

    return {
      name: pkmn.name,
      heldItem: pkmn.item,
      spriteUrl: `https://play.pokemonshowdown.com/sprites/gen5ani/${pkmn.name.toLowerCase()}.gif`,
      pokeData,
      itemData
    } as PokemonEntity;
  });

  return await Promise.all(dataPromises);
}

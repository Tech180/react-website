import { PokemonEntity } from "../interfaces/pokemon/pokemon.interface";
import { POKEMON_LIST } from "../consts/pokemon/pokemon-list.const";
import { interceptor } from "../interceptors/http.interceptor";
import { environment } from "../../../environments/environment";

export async function fetchPokemon(name: string) {
  try {
    return await interceptor<any>(`${environment.apiUrl}/pokemon/${name.toLowerCase()}`);
  } catch (error) {
    console.error(`Error fetching pokemon ${name}:`, error);
    return null;
  }
}

export async function fetchItem(name: string) {
  try {
    return await interceptor<any>(`${environment.apiUrl}/item/${name.toLowerCase()}`);
  } catch (error) {
    console.error(`Error fetching item ${name}:`, error);
    return null;
  }
}

export async function fetchMove(name: string) {
  try {
    return await interceptor<any>(`${environment.apiUrl}/move/${name.toLowerCase()}`);
  } catch (error) {
    console.error(`Error fetching move ${name}:`, error);
    return null;
  }
}

export async function fetchAbility(name: string) {
  try {
    return await interceptor<any>(`${environment.apiUrl}/ability/${name.toLowerCase()}`);
  } catch (error) {
    console.error(`Error fetching ability ${name}:`, error);
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

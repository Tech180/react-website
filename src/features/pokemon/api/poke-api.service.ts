import { PokemonEntity } from '@/features/pokemon/types/pokemon.interface';
import { interceptor } from '@/core/api/interceptors/http.interceptor';
import { environment } from '@/core/config/consts/environment.const';
import { POKEMON_LIST } from '../consts/pokemon-list.const';
import { transformToPokemonEntity } from '../utils/pokemon.util';

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

// In-memory cache for pokemon profiles to support immediate lookup and pre-fetching
const profileCache = new Map<string, any>();

/**
 * Orchestrates multi-endpoint fetches to construct a full profile.
 * Uses a simple in-memory cache to ensure snappy UI and support pre-fetching.
 */
export async function getPokemonProfile(name: string, item?: string) {
  const cacheKey = `${name.toLowerCase()}${item ? `-${item.toLowerCase()}` : ''}`;
  
  if (profileCache.has(cacheKey)) {
    return profileCache.get(cacheKey);
  }

  try {
    const itemQuery = item ? `?item=${item}` : '';
    const profilePromise = interceptor<any>(`${environment.apiUrl}/pokemon/${name.toLowerCase()}/profile${itemQuery}`);
    
    // Store the promise in cache immediately to avoid duplicate requests
    profileCache.set(cacheKey, profilePromise);
    
    const result = await profilePromise;
    profileCache.set(cacheKey, result); // Update with final result
    return result;
  } catch (error) {
    console.error(`Error fetching profile for ${name}:`, error);
    profileCache.delete(cacheKey); // Clean up on failure
    return null;
  }
}

/**
 * Pre-fetches a Pokemon profile without blocking UI or returning data immediately.
 * Intended for use in onMouseEnter events.
 */
export function prefetchPokemonProfile(name: string, item?: string) {
  const cacheKey = `${name.toLowerCase()}${item ? `-${item.toLowerCase()}` : ''}`;
  if (!profileCache.has(cacheKey)) {
    // Just trigger the fetch; the result will be cached for subsequent getPokemonProfile calls
    getPokemonProfile(name, item);
  }
}

/**
 * Fetches and transforms the favorite Pokemon list into entities for the grid.
 */
export async function getFavoritePokemonData(): Promise<PokemonEntity[]> {
  const dataPromises = POKEMON_LIST.map(async (pkmn) => {
    const pokeData = await fetchPokemon(pkmn.name);
    if (!pokeData) return null;
    
    // Fallback sprite logic: prefer high-quality official artwork or showdown animation
    const spriteUrl = 
      pokeData?.sprites?.other?.['official-artwork']?.front_default ||
      pokeData?.sprites?.other?.showdown?.front_default ||
      pokeData?.sprites?.front_default ||
      `https://img.pokemondb.net/sprites/black-white/anim/normal/${pkmn.name.toLowerCase()}.gif`;

    return {
      name: pkmn.name,
      spriteUrl: spriteUrl,
    } as PokemonEntity;
  });

  return (await Promise.all(dataPromises)).filter((p): p is PokemonEntity => p !== null);
}

import { CarouselItem } from "../interfaces/carousel/carousel.interface";
import { GAME_IDS } from "../consts/igdb/game-ids.const";
import { interceptor } from "../interceptors/http.interceptor";

const IGDB_BASE_URL = 'https://api.igdb.com/v4';

export async function fetchIGDBGames() {
  const clientId = process.env.IGDB_CLIENT_ID;
  const token = process.env.IGDB_ACCESS_TOKEN;

  if (!clientId || !token) {
    // Silent skip during build if credentials aren't provided
    return [];
  }

  try {
    return await interceptor<any[]>(`${IGDB_BASE_URL}/games`, {
      method: 'POST',
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${token}`
      },
      body: `fields *; where id = (${GAME_IDS.join(', ')}); limit 20;`,
      next: { revalidate: 3600 } 
    });
  } catch (error) {
    console.error('Error fetching IGDB games:', error);
    return [];
  }
}

export async function fetchIGDBCovers() {
  const clientId = process.env.IGDB_CLIENT_ID;
  const token = process.env.IGDB_ACCESS_TOKEN;

  if (!clientId || !token) {
    return [];
  }

  try {
    return await interceptor<any[]>(`${IGDB_BASE_URL}/covers`, {
      method: 'POST',
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${token}`
      },
      body: `fields *; where game = (${GAME_IDS.join(', ')}); limit 20;`,
      next: { revalidate: 3600 }
    });
  } catch (error) {
    console.error('Error fetching IGDB covers:', error);
    return [];
  }
}

/**
 * Fetches and transforms IGDB game data into CarouselItem format.
 */
export async function getGamesCarouselItems(): Promise<CarouselItem[]> {
  const [games, covers] = await Promise.all([
    fetchIGDBGames(),
    fetchIGDBCovers()
  ]);

  if (!games.length) return [];

  return games.map((game: any) => {
    const coverData = covers.find((cover: any) => cover.game === game.id);
    const coverUrl = coverData && coverData.url.replace('t_thumb', 't_cover_big');

    return {
      id: game.id,
      imageSrc: coverUrl || '',
      label: game.name,
      summary: game.summary,
    };
  });
}

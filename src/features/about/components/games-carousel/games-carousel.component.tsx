import { getGamesCarouselItems } from '@/features/about/api/igdb.service';
import { GamesCarouselView } from './games-carousel.view';

export async function GamesCarouselComponent() {
  const carouselItems = await getGamesCarouselItems();
  return <GamesCarouselView items={carouselItems} />;
}

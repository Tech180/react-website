import { AboutCarouselComponent } from './about-carousel/about-carousel.component';
import { GamesCarouselComponent } from './games-carousel/games-carousel.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';

export async function AboutMeComponent() {
  return (
    <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <AboutCarouselComponent />
      <GamesCarouselComponent />
      <PokemonGridComponent />
    </main>
  );
}

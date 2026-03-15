import { HeaderComponent } from '../../components/header/header.component';
import { AboutCarouselComponent } from './about-carousel/about-carousel.component';
import { GamesCarouselComponent } from './games-carousel/games-carousel.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import styles from './about-me.module.scss';

export async function AboutMeComponent() {
  return (
    <main className={styles['about-me']}>
      <HeaderComponent description="<span>about me</span>" image="/images/about-me.jpg" />
      <AboutCarouselComponent />
      <GamesCarouselComponent />
      <PokemonGridComponent />
    </main>
  );
}

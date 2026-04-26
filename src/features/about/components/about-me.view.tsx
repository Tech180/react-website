import { HeaderComponent } from '@/app/layout/header/header.component';
import { AboutCarouselComponent } from './about-carousel/about-carousel.component';
import { GamesCarouselComponent } from './games-carousel/games-carousel.component';
import { PokemonGridComponent } from '../../pokemon/components/pokemon-grid/pokemon-grid.component';
import styles from './about-me.component.module.scss';

export function AboutMeView() {
    return (
        <main className={styles['about-me']}>
            <HeaderComponent description="<span>about me</span>" image="/images/about-me.jpg" />
            <AboutCarouselComponent />
            <GamesCarouselComponent />
            <PokemonGridComponent />
        </main>
    );
}

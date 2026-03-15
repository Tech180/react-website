import { HeaderComponent } from '../../components/header/header.component';
import { CardsComponent } from '../../pages/home/cards/cards.component';
import { AffirmationComponent } from '../../pages/home/affirmation/affirmation.component';
import styles from './home.module.scss';

export function HomeComponent() {
  return (
    <main className={styles.home}>
      <HeaderComponent />
      <CardsComponent />
      <AffirmationComponent />
    </main>
  );
}

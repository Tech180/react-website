import { HeaderComponent } from '@/app/layout/header/header.component';
import { CardsComponent } from '@/features/home/components/cards/cards.component';
import { AffirmationComponent } from '@/features/home/components/affirmation/affirmation.component';
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

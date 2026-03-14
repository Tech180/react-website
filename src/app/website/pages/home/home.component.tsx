import { HeaderComponent } from '@/app/website/pages/home/header/header.component';
import { CardsComponent } from '@/app/website/pages/home/cards/cards.component';
import { AffirmationComponent } from '@/app/website/pages/home/affirmation/affirmation.component';

export function HomeComponent() {
  return (
    <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <HeaderComponent />
      <CardsComponent />
      <AffirmationComponent />
    </main>
  );
}

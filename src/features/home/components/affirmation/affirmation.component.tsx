import { fetchAffirmation } from '@/features/home/api/affirmation.service';
import { AffirmationView } from './affirmation.view';

export async function AffirmationComponent() {
  const affirmation = await fetchAffirmation();
  return <AffirmationView affirmation={affirmation} />;
}

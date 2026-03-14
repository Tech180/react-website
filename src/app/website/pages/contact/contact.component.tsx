import { EmailComponent } from './email/email.component';

export function ContactComponent() {
  return (
    <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <EmailComponent />
    </main>
  );
}

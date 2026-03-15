import { EmailComponent } from './email/email.component';
import styles from './contact.module.scss';

export function ContactComponent() {
  return (
    <main className={styles.contact}>
      <EmailComponent />
    </main>
  );
}

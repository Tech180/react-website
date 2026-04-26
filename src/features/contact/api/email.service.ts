import { interceptor } from '@/core/api/interceptors/http.interceptor';
import { environment } from '@/core/config/consts/environment.const';

/**
 * Service to handle email sending via the Bun backend.
 */
export async function sendEmail(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  const templateParams = Object.fromEntries(formData.entries());

  try {
    await interceptor(`${environment.apiUrl}/email/send`, {
      method: 'POST',
      body: JSON.stringify({ templateParams })
    });
    console.log('Email sent successfully');
  } catch (error: any) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

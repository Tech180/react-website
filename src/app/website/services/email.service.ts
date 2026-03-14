import emailjs from "emailjs-com";
import { AppError } from "../errors/app.error";

/**
 * Service to handle email sending via EmailJS.
 */
export async function sendEmail(form: HTMLFormElement): Promise<void> {
  try {
    const result = await emailjs.sendForm(
      'gmail', 
      'template_1d0vx78', 
      form, 
      'hsykmYeNpceISsM-g'
    );
    console.log('Email sent successfully:', result.text);
  } catch (error: any) {
    console.error('Failed to send email:', error?.text || error);
    throw new AppError(
      error?.text || 'Failed to send the email...',
      'ERR_EMAIL_SUBMISSION',
      500,
      'medium'
    );
  }
}

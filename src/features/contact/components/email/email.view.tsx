import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextBoxComponent } from '../text-box/text-box.component';
import styles from './email.component.module.scss';

import { EmailViewProps } from '@/features/contact/types/email.interface';

export function EmailView({
  name,
  email,
  subject,
  message,
  error,
  setName,
  setEmail,
  setSubject,
  setMessage,
  onSubmit
}: EmailViewProps) {
  return (
    <div className={styles['contact-container']}>
      <h1 className={styles.heading}>Contact Page</h1>
      <form onSubmit={onSubmit} className={styles['form-wrap']}>
        <div className={styles['form-group']}>
          <TextBoxComponent
            text="Name"
            value={name}
            name="name"
            textType="text"
            onChange={(e) => setName(e.target.value)}
            rows={2}
          />
        </div>

        <div className={styles['form-group']}>
          <TextBoxComponent
            text="Email Address"
            value={email}
            name="email"
            textType="email"
            onChange={(e) => setEmail(e.target.value)}
            rows={2}
          />
        </div>

        <div className={styles['form-group']}>
          <TextBoxComponent
            text="Subject"
            value={subject}
            name="subject"
            textType="text"
            onChange={(e) => setSubject(e.target.value)}
            rows={2}
          />
        </div>

        <div className={styles.formGroup}>
          <TextBoxComponent
            text="Message"
            value={message}
            name="message"
            textType="text"
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
          />
        </div>

        <button className={styles['contact-btn']} type="submit">
          Send Message
        </button>
      </form>

      {error && <p className={styles['error-text']}>{error}</p>}
      <ToastContainer />
    </div>
  );
}

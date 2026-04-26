"use client";

import { useState } from 'react';
import { toast } from 'react-toastify';
import { EmailView } from './email.view';
import { sendEmail } from '@/features/contact/api/email.service';

export function EmailComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await sendEmail(e.currentTarget);
      toast.success('Email sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <EmailView
      name={name}
      email={email}
      subject={subject}
      message={message}
      error={error}
      setName={setName}
      setEmail={setEmail}
      setSubject={setSubject}
      setMessage={setMessage}
      onSubmit={handleSendEmail}
    />
  );
}

import React from 'react';

export interface EmailViewProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  error: string | null;
  setName: (val: string) => void;
  setEmail: (val: string) => void;
  setSubject: (val: string) => void;
  setMessage: (val: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

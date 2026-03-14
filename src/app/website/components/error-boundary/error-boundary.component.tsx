"use client";

import React, { useEffect } from 'react';
import { ErrorView } from './error-boundary.view';

export interface ErrorBoundaryProps {
  error: Error & { digest?: string; isPublic?: boolean; status?: number };
  reset: () => void;
}

export function ErrorBoundaryComponent({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error("App Error Boundary Caught:", error);
  }, [error]);

  const message = error.isPublic 
    ? error.message 
    : "An unexpected application error occurred.";

  return <ErrorView message={message} reset={reset} />;
}

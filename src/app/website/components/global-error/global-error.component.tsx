"use client";

import React from 'react';
import { GlobalErrorView } from './global-error.view';

export function GlobalErrorComponent({ reset }: { reset: () => void }) {
  return <GlobalErrorView reset={reset} />;
}

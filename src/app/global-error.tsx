"use client";

import { INTER_FONT } from '@/shared/ui/consts/fonts.const';
import { GlobalErrorComponent } from '@/app/layout/global-error/global-error.component';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={INTER_FONT.variable}>
        <GlobalErrorComponent reset={reset} />
      </body>
    </html>
  );
}

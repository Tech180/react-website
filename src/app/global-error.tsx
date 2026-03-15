"use client";

import { INTER_FONT } from "./website/consts/ui/fonts.const";
import { GlobalErrorComponent } from "./website/components/common/global-error/global-error.component";

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

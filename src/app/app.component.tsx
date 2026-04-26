import React from 'react';
import { NavbarComponent } from '@/app/layout/navbar/navbar.component';
import { FooterComponent } from '@/app/layout/footer/footer.component';
import { INTER_FONT } from '@/shared/ui/consts/fonts.const';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { ThemeScript } from '@/shared/utils/theme-script';

export function AppComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={INTER_FONT.variable}>
        <ThemeProvider>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}

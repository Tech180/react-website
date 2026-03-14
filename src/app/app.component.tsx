import React from 'react';
import { NavbarComponent } from './website/components/navbar/navbar.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { INTER_FONT } from './website/consts/ui/fonts.const';
import { ThemeProvider } from './website/contexts/theme.context';
import { ThemeScript } from './website/components/utils/theme-script';

export function AppComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.css" integrity="sha512-U9Y1sGB3sLIpZm3ePcrKbXVhXlnQNcuwGQJ2WjPjnp6XHqVTdgIlbaDzJXJIAuCTp3y22t+nhI4B88F/5ldjFA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
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

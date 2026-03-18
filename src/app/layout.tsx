import type {Metadata} from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: "BlackTech | Dev AI",
  description: "Portfolio de N'GATTA Anoh Marc-Antoine Cédric, Dev AI & Développeur Web. React, Next.js, Node.js, Supabase. Lauréat Hackathon JETIC 2026.",
  icons: {
    icon: '/logo-code.png',
  },
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-accent-foreground"
        >
          Passer au contenu principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

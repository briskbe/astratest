import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './media.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Armatex | Sterk in stroom. Thuis in techniek.',
  description:
    'Armatex brengt energie, comfort en zekerheid in je woning of onderneming. Ontdek onze aanpak voor elektriciteit, verlichting en slimme installaties.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl-BE">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

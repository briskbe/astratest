import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './brisk.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Brisk | Websites, webshops & software op maat',
  description:
    'Brisk ontwerpt en bouwt websites, webshops en software op maat. Bekijk ons werk en ontdek wat we voor jouw digitale ambities kunnen betekenen.',
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

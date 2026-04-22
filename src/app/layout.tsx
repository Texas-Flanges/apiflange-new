import { type Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    template: '%s | API Flange',
    default: 'API Flange | Industrial Steel Flanges & Pipe Fittings',
  },
  description:
    'Industrial steel flanges and pipe fittings to ASME, ANSI, AWWA, and DIN standards. Custom machining, full traceability, rapid turnaround. Request a quote today.',
  metadataBase: new URL('https://www.apiflange.com'),
  keywords: [
    'steel flanges',
    'industrial flanges',
    'pipe fittings',
    'custom machining',
    'ASME flanges',
    'ANSI flanges',
    'AWWA flanges',
    'flange supplier',
    'custom flanges',
    'weld neck flanges',
    'blind flanges',
    'slip on flanges',
  ],
  authors: [{ name: 'API Flange', url: 'https://www.apiflange.com' }],
  creator: 'API Flange',
  publisher: 'API Flange',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.apiflange.com',
    title: 'API Flange | Industrial Steel Flanges & Pipe Fittings',
    description:
      'Industrial steel flanges and pipe fittings to ASME, ANSI, AWWA, and DIN standards. Custom machining available.',
    siteName: 'API Flange',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API Flange | Industrial Steel Flanges & Pipe Fittings',
    description:
      'Industrial steel flanges and pipe fittings. ASME, ANSI, AWWA, DIN standards.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F6F0' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1C1E' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1C1C1E" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Chu Qiao',
    template: '%s | Chu Qiao',
  },
  description: "Chu Qiao's personal website.",
  keywords: ['Chu Qiao'],
  authors: [{ name: 'Chu Qiao' }],
  creator: 'Chu Qiao',
  metadataBase: new URL('https://mrjackqiao.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mrjackqiao.github.io',
    siteName: 'Chu Qiao',
    title: 'Chu Qiao',
    description: 'Data scientist, machine learning engineer, and full-stack developer.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Chu Qiao',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

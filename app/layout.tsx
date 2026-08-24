import type { Metadata } from 'next';
import './globals.css';

const siteOrigin =
  process.env.SITE_ORIGIN ?? 'https://larrie-quote-card.larrieknights.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Quote Card',
  description: 'A little perspective, one quote at a time.',
  openGraph: {
    title: 'Quote Card',
    description: 'A little perspective, one quote at a time.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quote Card',
    description: 'A little perspective, one quote at a time.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

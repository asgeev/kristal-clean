import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Kristal Clean',
  description: 'Kristal Clean company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="black">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="color-scheme" content="only dark" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

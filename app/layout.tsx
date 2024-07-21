import Navigation from '@/components/navigation/Navigation';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '100'],
});

export const metadata: Metadata = {
  title: 'Blog Portfolio Boris Dimitrijevic',
  description: 'Simple fullstack blog portfolio built in nextjs 14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

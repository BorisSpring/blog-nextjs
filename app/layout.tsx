import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ReactQueryProvider from '@/components/providers/ReactQueryProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '100'],
  variable: '--roboto',
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
    <ClerkProvider>
      <html lang='en'>
        <body className={roboto.className}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import NextAuthProvider from '@/providers/NextAuth';

export const metadata: Metadata = {
  title: 'Collection management app.',
  description:
    'このアプリは通常のルーティンの集金業務から支払いが遅れている、滞納者向けの集金管理アプリに使うのに適してます',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </NextAuthProvider>
  );
}

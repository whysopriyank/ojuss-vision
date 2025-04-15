// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doctor Ojuss',
  description: 'Doctor Ojuss: Your personal doctor-friend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <main className="min-h-screen p-8 flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}

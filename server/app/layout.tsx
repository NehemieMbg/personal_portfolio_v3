import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/navigations/Sidebar';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navigations/Navbar';
import Image from 'next/image';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nehemie Mombanga',
  description:
    'Specialized in web development. Dedicated to redefining technological limits.',
  icons: {
    icon: '/favicon.png', // /public path
  },
};

/**
 * Root layout component
 * @param children - The children to render
 * @returns The RootLayout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('main-grid', {
          [raleway.className]: raleway.className,
        })}
      >
        {/* Bruit */}

        <div className="fixed z-[1000000] top-0 bottom-0 right-0 left-0 overlay pointer-events-none"></div>

        <Sidebar />
        <Navbar />

        <div className="p-side py-10 w-full">{children}</div>
      </body>
    </html>
  );
}

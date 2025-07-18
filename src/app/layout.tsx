import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '../styles/project-colors.css';
import { Footer, NavBar } from '@/mellc-ui-kit';
import { navLinks } from '@/data/navlinks';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MarcDevCEO Portfolio',
  description:
    'Explore the digital portfolio of Marcus Kimber — developer, strategist, and CEO of MELLC. Built with custom systems, emotional clarity, and soul-infused design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar
          links={navLinks}
          title={'MarcDevCEO'}
          titleHref={'/'}
          bg={'bgprimary'}
          color={'textprimary'}
          padding={'md'}
          navButtonClass={'text-white'}
          menuContainerProps={{ bg: 'bglight', padding: 'xl' }}
          cardProps={{ bg: 'bgprimary' }}
        />
        {children}
        <Footer bg={'bgprimary'} color={'textprimary'} />
      </body>
    </html>
  );
}

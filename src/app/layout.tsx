import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-clash',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Purple Minds Tech | Transforming Ideas Into Digital Reality',
  description:
    'Purple Minds Tech - Technology startup offering Web Development, Mobile Apps, SaaS, Digital Marketing, Cloud & DevOps, AI Solutions, UI/UX Design, and Tech Consulting.',
  keywords: [
    'web development',
    'mobile app development',
    'SaaS',
    'digital marketing',
    'cloud devops',
    'AI solutions',
    'UI UX design',
    'tech consulting',
  ],
  openGraph: {
    title: 'Purple Minds Tech | Transforming Ideas Into Digital Reality',
    description: 'Premium technology solutions for modern businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

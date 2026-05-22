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
      <body className="font-sans antialiased relative">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Floating Social Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* Instagram Button */}
          <a
            href="https://instagram.com/purplemindstech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#FBCF4F] via-[#F29CB7] to-[#522A6F] flex items-center justify-center text-white shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group"
            aria-label="Follow us on Instagram"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="absolute right-14 bg-[#19181A] border border-white/5 text-white font-mono text-[9px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none uppercase tracking-wider">
              Instagram
            </span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919999999999?text=Hi%20PurpleMinds%20Tech,%20I'd%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group shadow-[#25D366]/20"
            aria-label="Contact us on WhatsApp"
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
            <svg className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 fill-current relative z-10" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <span className="absolute right-14 bg-[#19181A] border border-white/5 text-white font-mono text-[9px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none uppercase tracking-wider">
              WhatsApp Chat
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}

'use client';

import Link from 'next/link';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  { href: '#', label: 'LinkedIn', icon: 'in' },
  { href: '#', label: 'Twitter', icon: '𝕏' },
  { href: '#', label: 'GitHub', icon: '⌘' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <span className="text-xl font-display font-bold gradient-text">
                Purple Minds
              </span>
              <span className="text-lg font-display font-semibold text-white/90">
                {' '}Tech
              </span>
            </Link>
            <p className="text-slate-400 text-sm mt-2 max-w-xs">
              Transforming ideas into digital reality.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Purple Minds Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

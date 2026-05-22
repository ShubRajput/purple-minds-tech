'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#packages', label: 'Packages' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    >
      <nav className={`container mx-auto px-6 py-3 flex items-center justify-between transition-all duration-300 rounded-2xl ${
        scrolled 
          ? 'glass-strong border border-white/5 shadow-glass' 
          : 'bg-transparent border border-transparent'
      }`}>
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="PurpleMinds Tech Logo"
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-display font-extrabold text-white tracking-tight">
            Purple Minds <span className="text-neon-violet font-semibold">Tech</span>
          </span>
        </Link>

        {/* Center floating nav capsule */}
        <div className="hidden lg:flex items-center justify-center flex-grow max-w-xl mx-auto">
          <ul className="flex items-center gap-1 bg-white/[0.02] backdrop-blur-md py-1.5 px-4 rounded-full border border-white/5 shadow-glass">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-all relative group block whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-neon-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-xs tracking-wider uppercase transition-all hover:shadow-glow hover:translate-y-[-1px] duration-300"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 rounded-2xl glass-strong border border-white/5 overflow-hidden max-w-sm mx-auto"
          >
            <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-semibold text-slate-300 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="inline-block w-full text-center px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

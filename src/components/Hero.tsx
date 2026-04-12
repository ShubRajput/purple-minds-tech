'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(
  () => import('@/components/HeroScene').then((m) => ({ default: m.HeroScene })),
  { ssr: false }
);

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 0.5,
        y: (e.clientY / window.innerHeight - 0.5) * 0.5,
      });
    };
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene mouse={mouse} isMobile={isMobile} />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-primary font-medium text-sm sm:text-base tracking-widest uppercase mb-4"
          >
            Welcome to Purple Minds Tech
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
          >
            Transforming Ideas Into{' '}
            <span className="gradient-text text-glow">Digital Reality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            We build web & mobile apps, SaaS products, and AI solutions that scale.
            Your vision, our technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold transition-all hover:shadow-glow"
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full glass border border-white/10 text-white hover:border-primary/50 font-semibold transition-all"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

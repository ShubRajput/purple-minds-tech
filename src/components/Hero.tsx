'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(
  () => import('@/components/HeroScene').then((m) => ({ default: m.HeroScene })),
  { ssr: false }
);

const stats = [
  { 
    value: '150+', 
    label: 'Projects Delivered', 
    desc: 'Successfully deployed apps',
    icon: (
      <svg className="w-5 h-5 text-neon-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 2.5a15.7 15.7 0 0 0-8.5 8.5L3 18l3-3 3 3 7-2.5a15.7 15.7 0 0 0 8.5-8.5L21.5 2.5Z"/>
      </svg>
    )
  },
  { 
    value: '98%', 
    label: 'Client Satisfaction', 
    desc: 'Top-rated client reviews',
    icon: (
      <svg className="w-5 h-5 text-accent-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  { 
    value: '8+', 
    label: 'Years Experience', 
    desc: 'Industry-leading expertise',
    icon: (
      <svg className="w-5 h-5 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  { 
    value: '50+', 
    label: 'Tech Experts', 
    desc: 'Skilled devs & designers',
    icon: (
      <svg className="w-5 h-5 text-neon-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  }
];

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
];

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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-32 sm:py-40">
      <HeroScene mouse={mouse} isMobile={isMobile} />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-transparent to-dark-bg" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Top Spaced Tag Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              Ideate • Build • Scale
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            We Build the Software that{' '}
            <span className="border border-[#F29CB7]/30 px-4 py-1.5 rounded-2xl mx-1 inline-block bg-gradient-to-r from-[#522A6F]/30 to-[#F29CB7]/10 shadow-[0_0_30px_rgba(242,156,183,0.15)] backdrop-blur-sm text-glow gradient-text">
              Scale-ups & Brands
            </span>{' '}
            Need to Lead!
          </motion.h1>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            We build web & mobile apps, SaaS products, and custom AI integrations.
            Your business goals, solved with high-performing technology.
          </motion.p>

          {/* Overlapping Client Avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
          >
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  className="w-8.5 h-8.5 rounded-full border-2 border-[#222023] object-cover"
                  src={url}
                  alt={`Client avatar ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F29CB7] animate-pulse shadow-[0_0_8px_#F29CB7]" />
              <span className="font-semibold text-[#FAEADD]">50+ Global Clients</span> trust our solutions
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[#7B2FF7] hover:from-[#603383] hover:to-[#6c23db] text-white font-semibold transition-all hover:shadow-[0_0_30px_rgba(82,42,111,0.5)] flex items-center gap-2 group hover:translate-y-[-2px] duration-300 animate-float"
            >
              Start Journey <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-xl glass border border-[#DDAAFF]/20 text-slate-200 hover:text-white hover:border-[#F29CB7]/50 font-semibold transition-all hover:translate-y-[-2px] duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Horizontal Stats Dashboard Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-20 w-full"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-5 text-left border border-white/5 hover:border-[#F29CB7]/30 hover:shadow-[0_0_20px_rgba(242,156,183,0.08)] transition-all duration-300 hover:bg-white/[0.02] flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight group-hover:text-glow transition-all duration-300">
                  {stat.value}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center border border-white/5 group-hover:border-[#FBCF4F]/20 group-hover:bg-[#FBCF4F]/5 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div>
                <div className="text-white text-sm font-semibold mb-1 group-hover:text-[#FAEADD] transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-slate-400 text-xs leading-normal">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-10 rounded-full border-2 border-white/20 flex justify-center pt-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

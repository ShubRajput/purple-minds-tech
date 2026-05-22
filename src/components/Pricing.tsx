'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const pricingPackages = [
  {
    name: 'Content Creation',
    tagline: 'Instagram & Facebook Social Engine',
    inrPrice: '₹5K',
    usdPrice: '$249',
    period: 'starts from',
    features: [
      '12+ Custom Graphic/Video Posts',
      'Profile Optimization (Instagram & Facebook)',
      'Reel Planning & Scripts (2 Reels/week)',
      'Direct Ad Manager Campaign Setup',
      'Monthly Engagement & Analytics Report'
    ],
    highlight: false,
    badge: 'Social Growth'
  },
  {
    name: 'Web Development',
    tagline: 'High-Performance Modern Web',
    inrPrice: '₹10K',
    usdPrice: '$499',
    period: 'starts from',
    features: [
      'Custom Layout & Brand-Tailored Design',
      'Fully Responsive Layouts (Mobile & Desktop)',
      'React / Next.js / Tailwind CSS Modern Stack',
      'Core Web Vitals SEO Audited & Optimized',
      'Forms, Analytics & CMS Integration'
    ],
    highlight: true,
    badge: 'Most Popular'
  },
  {
    name: 'App Development',
    tagline: 'Cross-Platform Mobile Ecosystem',
    inrPrice: '₹50K',
    usdPrice: '$2,499',
    period: 'starts from',
    features: [
      'Hybrid App Development (iOS & Android)',
      'Core MVP Architecture for Fast Release',
      'Integrated Backend API & Services',
      'Authentication, Database & Push Notifications',
      '3 Months Post-Launch Support & Support SLA'
    ],
    highlight: false,
    badge: 'Enterprise Grade'
  }
];

export function Pricing() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="packages" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 rounded-full bg-[#F29CB7]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4"
          >
            Choose Your <span className="gradient-text">Growth Package</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg mb-8"
          >
            Custom, transparent pricing tailored to launch and scale your products globally.
          </motion.p>

          {/* Currency Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center bg-[#19181A] border border-white/10 p-1.5 rounded-full shadow-glass"
          >
            <button
              onClick={() => setCurrency('INR')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-gradient-to-r from-primary to-[#F29CB7] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-primary to-[#F29CB7] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricingPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative rounded-3xl p-8 transition-all flex flex-col justify-between cursor-default ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-[#522A6F]/20 to-[#19181A]/80 border-2 border-[#F29CB7] shadow-[0_0_40px_rgba(242,156,183,0.15)]'
                  : 'bg-[#19181A]/40 border border-white/5 hover:border-[#F29CB7]/30 hover:shadow-[0_0_30px_rgba(242,156,183,0.05)]'
              }`}
            >
              {/* Highlight background elements */}
              {pkg.highlight && (
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                  <span className="px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#FAEADD] bg-[#F29CB7] rounded-full shadow-[0_0_15px_#F29CB7]">
                    {pkg.badge}
                  </span>
                </div>
              )}
              {!pkg.highlight && (
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                  <span className="px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-[#222023] border border-white/5 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-display font-extrabold text-white mb-2 group-hover:text-glow transition-all">
                  {pkg.name}
                </h3>
                <p className="text-slate-400 text-xs font-medium mb-6 font-mono">
                  {pkg.tagline}
                </p>

                {/* Pricing Area */}
                <div className="mb-6 pb-6 border-b border-white/5 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                    {currency === 'INR' ? pkg.inrPrice : pkg.usdPrice}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {pkg.period} onwards
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                      <svg className="w-5 h-5 text-[#FBCF4F] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action */}
              <Link
                href="#contact"
                className={`w-full py-4 rounded-2xl text-center text-xs font-extrabold tracking-widest uppercase transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-[#F29CB7] to-primary hover:shadow-glow text-white hover:translate-y-[-1px]'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                Inquire Now
              </Link>
            </motion.div>
          ))}
        </div>

        {/* T&C Footer Notice */}
        <div className="text-center mt-16 max-w-md mx-auto">
          <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            * All Terms & Conditions Apply. Custom plans and SLA contracts available.
          </p>
        </div>
      </div>
    </section>
  );
}

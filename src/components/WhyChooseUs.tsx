'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: 'Results-Driven Dev',
    description: 'We build for ROI. Every component is designed to maximize conversion rates and customer retention.',
    badge: 'Conversion Opt',
    widget: (
      <div className="h-28 w-full bg-[#222023]/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between mb-4 font-mono text-[9px] relative overflow-hidden">
        <span className="text-slate-500 uppercase tracking-widest block">ROI PERFORMANCE</span>
        <div className="flex items-baseline gap-1 my-1">
          <span className="text-xl font-bold text-white">4.8%</span>
          <span className="text-[8px] text-emerald-400 font-bold font-mono">▲ +18.4%</span>
        </div>
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-[#F29CB7] h-full w-[78%]" />
        </div>
        <div className="flex justify-between text-slate-500 text-[8px]">
          <span>Industry Avg: 2.1%</span>
          <span className="text-[#FAEADD]/80">PMT Target: 5.0%</span>
        </div>
      </div>
    )
  },
  {
    title: 'Co-Founder Transparency',
    description: 'No black boxes. You get daily slack progress reports, Jira check-ins, and active staging deployment URLs.',
    badge: '100% Visibility',
    widget: (
      <div className="h-28 w-full bg-[#222023]/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between mb-4 font-mono text-[8px] relative overflow-hidden">
        <div className="flex items-center gap-1 border-b border-white/5 pb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-400">SLACK INTEGRATION</span>
        </div>
        <div className="my-1 text-left text-slate-300">
          <p className="text-[7px] text-slate-500">PMT TEAM [10:42 AM]:</p>
          <p className="bg-[#522A6F]/20 border border-[#F29CB7]/20 px-2 py-1 rounded-lg text-white text-[7px] truncate">
            Sprint 2 ready! Staging link live 🚀
          </p>
        </div>
        <div className="flex justify-between text-slate-500">
          <span>#project-updates</span>
          <span className="text-emerald-400 font-bold">STAGING LIVE</span>
        </div>
      </div>
    )
  },
  {
    title: 'High-Performance Scale',
    description: 'Built on optimized edge CDNs for sub-second load times and scale-ready user traffic expansion.',
    badge: 'Sub-Second Speeds',
    widget: (
      <div className="h-28 w-full bg-[#222023]/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between mb-4 font-mono text-[9px] relative overflow-hidden">
        <span className="text-slate-500 uppercase tracking-widest block">SYSTEM HEALTH</span>
        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="bg-white/[0.02] border border-white/5 p-1 rounded-lg text-center">
            <span className="text-[7px] text-slate-500 block">UPTIME</span>
            <span className="text-emerald-400 font-bold">99.99%</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-1 rounded-lg text-center">
            <span className="text-[7px] text-slate-500 block">SPEED</span>
            <span className="text-white font-bold">0.18s</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-slate-500 text-[8px]">
          <span>Edge Cache: Hit</span>
          <span className="text-[#FBCF4F] font-bold">Global CDN</span>
        </div>
      </div>
    )
  },
  {
    title: 'Growth & SEO Engineered',
    description: 'We configure programmatic schemas, metadata structures, and search parameters to rank on Google.',
    badge: 'Search Rank #1',
    widget: (
      <div className="h-28 w-full bg-[#222023]/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between mb-4 text-left relative overflow-hidden font-sans">
        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">GOOGLE SEARCH INDEX</span>
        <div className="bg-[#19181A] border border-white/5 p-2 rounded-lg my-1 flex flex-col justify-between h-[52px]">
          <div className="flex items-center justify-between">
            <span className="text-[6px] text-slate-400 font-mono">https://yourbrand.com</span>
            <span className="text-[7px] font-bold text-[#FBCF4F] bg-[#FBCF4F]/10 px-1 rounded">Rank #1</span>
          </div>
          <span className="text-[9px] font-bold text-white truncate">Next-Gen SaaS Platform</span>
          <span className="text-[7px] text-slate-400 truncate">Ranked #1 for core keywords in 14 days.</span>
        </div>
      </div>
    )
  }
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              The PMT Difference
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4"
          >
            Why Clients <span className="gradient-text">Choose Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            We merge robust enterprise-grade engineering with a hands-on startup partnership model.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-3xl p-6 transition-all flex flex-col justify-between cursor-default bg-[#19181A]/40 border border-white/5 hover:border-[#F29CB7]/30 hover:shadow-[0_0_30px_rgba(242,156,183,0.05)]"
            >
              {/* Feature Badge indicator */}
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 rounded-full group-hover:border-[#F29CB7]/30 group-hover:text-white transition-all">
                  {feature.badge}
                </span>
              </div>

              <div>
                {/* Visual Widget */}
                {feature.widget}

                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#F29CB7] transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

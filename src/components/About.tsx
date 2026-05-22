'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            About <span className="gradient-text">Purple Minds Tech</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We are a technology startup on a mission to turn your bold ideas into
            scalable digital products. Innovation and quality drive everything we do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#F29CB7]/10 border border-[#F29CB7]/30 text-[#F29CB7] rounded-full mb-3 inline-block">
                Our Core DNA
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight mb-2">
                Driven by a Bold Mindset, Built for Scalability
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We are a team of young tech innovators challenging legacy norms and treating your products as our own creations.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Pillar 1 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F29CB7]/25 hover:bg-[#F29CB7]/[0.02] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#F29CB7]/10 border border-[#F29CB7]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#F29CB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#F29CB7] transition-colors">Bold & Disruptive Mindset</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    We discard slow, generic legacy templates. Our agile team challenges tech conventions, designing high-impact platforms that give you an unfair competitive edge.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F29CB7]/25 hover:bg-[#F29CB7]/[0.02] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#DDAAFF]/10 border border-[#DDAAFF]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#DDAAFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#DDAAFF] transition-colors">Extreme Ownership (&quot;Our Own Thing&quot;)</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    We do not work as disconnected vendors. We treat your software like our own creation, investing quality styling, clean architecture, and co-founder level dedication.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F29CB7]/25 hover:bg-[#F29CB7]/[0.02] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#FBCF4F]/10 border border-[#FBCF4F]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#FBCF4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#FBCF4F] transition-colors">Scalable Future Growth</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Built to scale for millions. From database indexing to server-side optimization, we write clean, modular systems ready to support rapid scaling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl border border-white/5 p-6 sm:p-8 relative min-h-[440px] overflow-hidden flex flex-col justify-between shadow-glass bg-[#19181A]/40"
          >
            {/* Top row: Dashboard Header */}
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Client Success Matrix
              </span>
              <div className="flex items-center gap-2 bg-[#F29CB7]/10 border border-[#F29CB7]/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F29CB7] animate-pulse" />
                <span className="text-[9px] font-bold text-[#F29CB7] tracking-wider uppercase">Live Partner Dashboard</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 z-10">
              <div className="bg-[#222023]/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-[#F29CB7]/20 transition-all duration-300">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Avg. Launch Time</span>
                <span className="text-2xl sm:text-3xl font-display font-black text-white my-1">32 Days</span>
                <span className="text-[9px] text-[#FBCF4F] font-mono font-bold">🚀 2x Faster than Industry</span>
              </div>
              <div className="bg-[#222023]/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-[#DDAAFF]/20 transition-all duration-300">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Conversion Boost</span>
                <span className="text-2xl sm:text-3xl font-display font-black text-[#F29CB7] my-1">+24.8%</span>
                <span className="text-[9px] text-emerald-400 font-mono font-bold">📈 Verified Post-Launch</span>
              </div>
            </div>

            {/* Growth Curve Visualization */}
            <div className="relative flex-grow bg-[#222023]/40 border border-white/5 rounded-2xl p-4 mb-4 flex flex-col justify-between z-10 overflow-hidden hover:border-white/10 transition-colors">
              <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block">User Traffic Growth Scale</span>
              
              {/* Line Chart Grid & SVG Path */}
              <div className="relative h-24 my-2 flex items-end">
                {/* Y-axis helper lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                  <div className="border-b border-white w-full" />
                  <div className="border-b border-white w-full" />
                  <div className="border-b border-white w-full" />
                </div>
                
                {/* SVG Curve */}
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F29CB7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#522A6F" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill Area */}
                  <path d="M 0 75 Q 40 70 70 50 T 130 35 T 200 5 L 200 80 L 0 80 Z" fill="url(#chartGlow)" />
                  {/* Glowing Stroke */}
                  <path d="M 0 75 Q 40 70 70 50 T 130 35 T 200 5" stroke="url(#chartLineGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  
                  {/* Gradient definitions */}
                  <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#522A6F" />
                    <stop offset="50%" stopColor="#DDAAFF" />
                    <stop offset="100%" stopColor="#F29CB7" />
                  </linearGradient>
                </svg>

                {/* Growth indicators */}
                <span className="absolute left-1/3 top-[50%] w-2 h-2 rounded-full bg-[#DDAAFF] shadow-[0_0_8px_#DDAAFF] animate-ping" />
                <span className="absolute right-0 top-0 w-2.5 h-2.5 rounded-full bg-[#F29CB7] shadow-[0_0_12px_#F29CB7] animate-pulse" />
              </div>
              
              <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                <span>Month 1 (MVP)</span>
                <span>Month 3 (PMF)</span>
                <span className="text-[#FBCF4F]">Scale Peak</span>
              </div>
            </div>

            {/* Launch Roadmap Progress Tracker */}
            <div className="bg-[#222023]/60 border border-white/5 rounded-2xl p-4 font-mono text-[9px] text-slate-400 z-10">
              <span className="text-white font-bold uppercase tracking-wider block border-b border-white/5 pb-2 mb-2">Our Workflow Blueprint</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="flex flex-col gap-1 border-r border-white/5 sm:pr-1 text-center">
                  <span className="text-emerald-400 font-bold">✓ Phase 1</span>
                  <span className="text-[8px] text-white">Strategy</span>
                </div>
                <div className="flex flex-col gap-1 sm:border-r border-white/5 sm:pr-1 text-center">
                  <span className="text-emerald-400 font-bold">✓ Phase 2</span>
                  <span className="text-[8px] text-white">UX/UI</span>
                </div>
                <div className="flex flex-col gap-1 border-r border-white/5 pr-1 text-center">
                  <span className="text-[#F29CB7] font-bold animate-pulse">● Phase 3</span>
                  <span className="text-[8px] text-white">Build</span>
                </div>
                <div className="flex flex-col gap-1 text-center">
                  <span className="text-slate-600 font-bold">Phase 4</span>
                  <span className="text-[8px]">Scale</span>
                </div>
              </div>
            </div>

            {/* Glowing background decorative blur */}
            <div className="absolute top-[-50%] right-[-50%] w-80 h-80 rounded-full bg-primary/10 blur-[90px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

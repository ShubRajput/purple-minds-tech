'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState('Reasonable');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-96 h-96 rounded-full bg-[#F29CB7]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              No Boring Meetings
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
            Let&apos;s Build <span className="gradient-text">Something Epic</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Skip the corporate jargon. Drop your idea and we&apos;ll get coding in no time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-8 items-stretch"
        >
          {/* Form */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/5 lg:col-span-3 bg-[#19181A]/40 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Human Name (or alias)
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#222023]/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#F29CB7]/50 transition-colors text-sm"
                  placeholder="e.g. John Doe (or Batman)"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Reply Address (no spam, promise)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#222023]/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#F29CB7]/50 transition-colors text-sm"
                  placeholder="e.g. your-inbox-magnet@domain.com"
                />
              </div>

              {/* Sarcastic Budget Range */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                  Select your financial vibe:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: 'Shoestring', val: 'Shoestring 💸', desc: 'Fix it yesterday vibe' },
                    { key: 'Reasonable', val: 'Reasonable 🤝', desc: 'Partnership sweet spot' },
                    { key: 'VentureBurn', val: 'Venture Burn 🚀', desc: 'Let\'s burn investor cash' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setBudget(opt.key)}
                      className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
                        budget === opt.key
                          ? 'bg-[#522A6F]/30 border-[#F29CB7] shadow-[0_0_15px_rgba(242,156,183,0.1)]'
                          : 'bg-[#222023]/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-bold text-white">{opt.val}</span>
                      <span className="text-[9px] text-slate-500 font-mono mt-0.5">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  The Blueprint (Explain like I&apos;m five)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#222023]/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#F29CB7]/50 transition-colors resize-none text-sm"
                  placeholder="Describe your world-dominating app idea that needs to be built yesterday..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-[#F29CB7] hover:opacity-95 text-white font-bold transition-all shadow-[0_0_30px_rgba(82,42,111,0.2)] flex items-center justify-center gap-2"
              >
                {submitted ? 'Transmission Received! 🛰' : 'Transmit Spec Sheets 📡'}
              </button>
            </form>
          </div>

          {/* Map / Radar */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/5 lg:col-span-2 bg-[#19181A]/40 flex flex-col justify-between h-full min-h-[360px]">
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Our Tech Hub
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Silicon Valley office? That&apos;s just a fancy mailing box. Pune is where our developers actively convert caffeine into scalable code.
              </p>
            </div>

            {/* Styled Pune Radar Map Visual */}
            <div className="relative aspect-video rounded-2xl bg-[#19181A] border border-white/5 flex flex-col justify-between p-4 overflow-hidden group/map my-4">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              <div className="flex justify-between items-center z-10 font-mono text-[9px] text-[#FBCF4F]">
                <span className="animate-pulse">● LOCATING CAFFEINE ENGINE...</span>
                <span>PUNE, IND</span>
              </div>

              {/* Pulsing Dot */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                <span className="absolute w-12 h-12 rounded-full bg-[#F29CB7]/15 animate-ping" />
                <span className="absolute w-6 h-6 rounded-full bg-[#F29CB7]/30 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F29CB7] shadow-[0_0_12px_#F29CB7]" />
              </div>

              {/* Coordinates overlay */}
              <div className="flex justify-between items-end z-10 font-mono text-[8px] text-slate-500">
                <span>LAT: 18.5204° N</span>
                <span>LNG: 73.8567° E</span>
              </div>
            </div>

            <div className="space-y-2 border-t border-white/5 pt-4">
              <p className="text-slate-400 text-xs font-mono">
                📍 Pune, India • IT Innovation Zone
              </p>
              <p className="text-slate-400 text-xs font-mono">
                ✉️ hello@purplemindstech.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

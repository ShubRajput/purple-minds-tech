'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Product Engineering',
    description: 'MVP to scale-engineer high impact digital products with clean, modular foundations.',
    visual: (
      <div className="relative w-full h-36 bg-[#19181A] rounded-xl border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-[#F29CB7]/15 transition-all">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,42,111,0.03)_0%,transparent_70%)]" />
        <div className="w-[72%] h-[75%] bg-[#222023] rounded-lg border border-white/10 p-2 flex flex-col justify-between shadow-lg transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="flex gap-1 border-b border-white/5 pb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            <span className="text-[7px] text-slate-500 font-mono ml-1.5">AppEngine.ts</span>
          </div>
          <div className="flex-grow font-mono text-[9px] text-[#DDAAFF] mt-1 space-y-0.5">
            <p className="text-white"><span className="text-[#F29CB7]">class</span> ProductEngine {'{'}</p>
            <p className="pl-3 text-slate-400">build() {'{'}</p>
            <p className="pl-6 text-[#FBCF4F]">return <span className="text-[#FAEADD]">new</span> App();</p>
            <p className="pl-3 text-slate-400">{'}'}</p>
            <p className="text-white">{'}'}</p>
          </div>
        </div>
        <div className="absolute right-3 bottom-3 w-14 h-24 bg-[#2D2A2E] rounded-lg border border-[#F29CB7]/20 shadow-2xl p-1.5 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px] group-hover:rotate-1">
          <span className="w-3.5 h-1 bg-white/20 rounded-full mx-auto" />
          <div className="w-full h-11 bg-gradient-to-br from-primary/30 to-[#F29CB7]/10 rounded border border-white/5 flex items-center justify-center">
            <span className="text-[8px] font-sans font-bold text-white tracking-widest uppercase">UI</span>
          </div>
          <div className="w-full h-1.5 bg-[#F29CB7]/10 border border-[#F29CB7]/20 rounded" />
          <div className="w-full h-1 bg-white/5 rounded" />
        </div>
      </div>
    )
  },
  {
    title: 'AI Integration',
    description: 'Optimise processes, cut costs, improve decisions and accelerate sustainable growth.',
    visual: (
      <div className="relative w-full h-36 bg-[#19181A] rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,156,183,0.06)_0%,transparent_75%)]" />
        <div className="flex items-center gap-4 z-10 transition-transform duration-500 group-hover:scale-105">
          <div className="flex flex-col gap-3">
            <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-[7px] text-slate-400 font-mono shadow-sm">X1</div>
            <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-[7px] text-slate-400 font-mono shadow-sm">X2</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-7 h-7 rounded-full bg-primary/20 border border-[#F29CB7]/30 flex items-center justify-center text-[8px] text-[#F29CB7] font-bold shadow-[0_0_15px_rgba(242,156,183,0.15)] animate-pulse">
              AI
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-5 h-5 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-[7px] text-[#FBCF4F] font-mono shadow-sm">Y1</div>
          </div>
        </div>
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <path d="M 100 50 Q 140 50 140 68" stroke="#F29CB7" strokeWidth="1" fill="none" strokeDasharray="3 3" />
          <path d="M 100 86 Q 140 86 140 68" stroke="#F29CB7" strokeWidth="1" fill="none" strokeDasharray="3 3" />
          <path d="M 168 68 L 210 68" stroke="#FBCF4F" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        </svg>
      </div>
    )
  },
  {
    title: 'Workflow Automation',
    description: 'Replace repetitive tasks with intelligent systems that boost efficiency and speed.',
    visual: (
      <div className="relative w-full h-36 bg-[#19181A] rounded-xl border border-white/5 overflow-hidden flex flex-col justify-center p-4 gap-2.5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(82,42,111,0.04)_0%,transparent_70%)]" />
        <div className="flex justify-between items-center bg-[#222023] border border-white/5 p-2 rounded-lg transition-all duration-300 group-hover:border-[#F29CB7]/20 group-hover:translate-x-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-mono text-slate-300">Trigger: User Sign-up</span>
          </div>
          <span className="text-[7px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded uppercase tracking-wider">Active</span>
        </div>
        <div className="w-full flex justify-center py-0.5">
          <div className="h-4 border-l border-dashed border-[#F29CB7]/40" />
        </div>
        <div className="flex justify-between items-center bg-[#522A6F]/20 border border-[#F29CB7]/20 p-2 rounded-lg transition-all duration-300 group-hover:border-[#FBCF4F]/30 group-hover:translate-x-[-4px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F29CB7] animate-pulse" />
            <span className="text-[9px] font-mono text-[#FAEADD]">Action: Auto Welcome CRM flow</span>
          </div>
          <span className="text-[7px] text-[#FBCF4F] font-mono font-bold uppercase">100% Done</span>
        </div>
      </div>
    )
  },
  {
    title: 'Content Creation & Lead Gen',
    description: 'High-impact content strategies for Instagram & Facebook combined with target-driven lead generation.',
    visual: (
      <div className="relative w-full h-auto sm:h-36 bg-[#19181A] rounded-xl border border-white/5 overflow-hidden flex flex-col sm:flex-row gap-3 p-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,207,79,0.02)_0%,transparent_60%)]" />
        {/* Instagram Post mockup */}
        <div className="w-full sm:w-1/2 h-28 sm:h-full bg-[#222023] rounded-lg border border-white/5 p-2 flex flex-col justify-between text-[7px] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#FBCF4F] via-[#F29CB7] to-primary flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#222023] rounded-full" />
            </div>
            <span className="font-semibold text-white">pmt.media</span>
          </div>
          <div className="flex-grow bg-gradient-to-br from-primary/35 to-[#F29CB7]/10 rounded border border-white/5 my-1.5 flex items-center justify-center text-[7px] text-white font-bold tracking-widest uppercase shadow-sm">
            POST
          </div>
          <div className="flex justify-between text-slate-500 border-t border-white/5 pt-1">
            <span className="text-[#F29CB7]">❤ 1.2k Likes</span>
            <span>💬 84 comments</span>
          </div>
        </div>
        {/* Lead stats mockup */}
        <div className="w-full sm:w-1/2 h-28 sm:h-full bg-[#222023] rounded-lg border border-white/5 p-2 flex flex-col justify-between transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
          <span className="text-[8px] text-slate-400 block font-mono">Facebook Leads</span>
          <div className="flex-grow flex items-end gap-1.5 py-1">
            <div className="w-2.5 h-[20%] bg-white/5 rounded-t" />
            <div className="w-2.5 h-[40%] bg-white/10 rounded-t" />
            <div className="w-2.5 h-[65%] bg-primary/40 rounded-t" />
            <div className="w-2.5 h-[95%] bg-[#F29CB7] rounded-t shadow-[0_0_10px_#F29CB7]" />
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-1 text-[7px]">
            <span className="text-[#FBCF4F] font-mono">+240%</span>
            <span className="text-slate-500 font-mono">Q2 Goal</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Tech Consulting',
    description: 'Strategic thinking + tech expertise to scale smarter, not harder.',
    visual: (
      <div className="relative w-full h-36 bg-[#19181A] rounded-xl border border-white/5 overflow-hidden p-3 flex flex-col justify-between">
        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block border-b border-white/5 pb-1">Tech Roadmap 2026</span>
        <div className="flex items-center justify-between gap-1 py-3 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2" />
          
          <div className="relative z-10 bg-[#222023] border border-white/10 rounded-md px-1.5 py-0.5 text-center text-[7px] transition-all duration-300 group-hover:border-white/20">
            <p className="text-white font-bold">Q1</p>
            <p className="text-[#DDAAFF] font-mono">Audit</p>
          </div>
          <div className="relative z-10 bg-[#522A6F] border border-[#F29CB7]/30 rounded-md px-1.5 py-0.5 text-center text-[7px] shadow-lg transition-transform duration-300 group-hover:scale-105">
            <p className="text-[#FAEADD] font-bold">Q2</p>
            <p className="text-[#F29CB7] font-mono">AI Scale</p>
          </div>
          <div className="relative z-10 bg-[#222023] border border-white/10 rounded-md px-1.5 py-0.5 text-center text-[7px] transition-all duration-300 group-hover:border-white/20">
            <p className="text-white font-bold">Q3</p>
            <p className="text-[#FBCF4F] font-mono">Cloud</p>
          </div>
        </div>
        <div className="text-[8px] text-[#FBCF4F] text-center font-mono border-t border-white/5 pt-1 uppercase tracking-wider">Strategic Milestones Synced</div>
      </div>
    )
  },
  {
    title: 'Infrastructure Management Service',
    description: 'Management, maintenance and optimisation of IT infrastructure with cost efficiency.',
    visual: (
      <div className="relative w-full h-36 bg-[#19181A] rounded-xl border border-white/5 overflow-hidden p-3 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[7px] font-mono text-slate-400">
          <span>Clusters: AWS & GCP</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
          </span>
        </div>
        <div className="space-y-1.5 my-1.5">
          <div className="bg-[#222023] border border-white/10 rounded p-1 flex justify-between items-center transition-all duration-300 group-hover:border-[#F29CB7]/25">
            <span className="text-[8px] text-slate-300 font-mono">kubernetes-aws-prod</span>
            <span className="text-[7px] text-[#DDAAFF] font-mono">Uptime 99.9%</span>
          </div>
          <div className="bg-[#222023] border border-white/10 rounded p-1 flex justify-between items-center transition-all duration-300 group-hover:border-[#F29CB7]/25">
            <span className="text-[8px] text-slate-300 font-mono">postgres-replica-db</span>
            <span className="text-[7px] text-[#FBCF4F] font-mono">Lag: 0ms</span>
          </div>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-[#F29CB7] h-full rounded-full" style={{ width: '99.8%' }} />
        </div>
      </div>
    )
  }
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg">
            End-to-end technology services to build, grow, and scale your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-3xl p-6 border border-white/5 hover:border-[#F29CB7]/30 hover:shadow-[0_0_35px_rgba(242,156,183,0.08)] transition-all cursor-default flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 overflow-hidden rounded-2xl">
                  {service.visual}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-glow transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const products = [
  {
    id: 'chatbot',
    name: 'AI Chatbot',
    badge: 'LLM-Powered',
    color: 'from-[#DDAAFF] to-[#522A6F]',
    borderColor: 'group-hover:border-[#DDAAFF]/30',
    description: 'Context-aware conversational agent integrated with your company knowledge base for instant, 24/7 customer and internal support.',
    features: ['Retrieval-Augmented Generation (RAG)', 'Contextual memory & multi-turn flows', 'Multi-channel deployment (Web, API, Slack)', 'Sentiment analysis & routing triggers'],
    mockup: (
      <div className="bg-[#19181A] rounded-xl border border-white/5 p-4 h-48 flex flex-col justify-between font-sans text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-white">PurpleMind AI</span>
          </div>
          <span className="text-[10px] text-slate-500">Agent Active</span>
        </div>
        <div className="space-y-2.5 my-2 flex-grow overflow-y-auto scrollbar-none py-1">
          <div className="bg-white/[0.03] rounded-lg p-2 max-w-[85%] self-start border border-white/5">
            <p className="text-[9px] text-slate-500 mb-0.5">User</p>
            <p className="text-[10px] sm:text-xs text-slate-200">How do I deploy the custom model?</p>
          </div>
          <div className="bg-[#522A6F]/20 rounded-lg p-2 max-w-[85%] ml-auto border border-[#F29CB7]/10">
            <p className="text-[9px] text-[#F29CB7] mb-0.5">Bot</p>
            <p className="text-[10px] sm:text-xs text-slate-200">Run <code className="text-[#DDAAFF] font-mono text-[9px] sm:text-[10px]">pmt deploy</code> in your terminal. I will provision the GPU instances.</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <input 
            type="text" 
            placeholder="Type a message..." 
            disabled 
            className="bg-white/[0.02] border border-white/10 rounded-lg px-2.5 py-1 sm:py-1.5 flex-grow text-[10px] sm:text-xs text-slate-400 placeholder-slate-600 focus:outline-none"
          />
          <button className="bg-primary px-3 rounded-lg text-white font-semibold flex items-center justify-center text-xs">
            →
          </button>
        </div>
      </div>
    )
  },
  {
    id: 'erp',
    name: 'Enterprise ERP',
    badge: 'Operations Hub',
    color: 'from-[#FBCF4F] to-primary',
    borderColor: 'group-hover:border-[#FBCF4F]/30',
    description: 'Centralized resource planner covering core business flows, assets, financial ledger management, and automated workflow orchestrations.',
    features: ['Unified financial ledger management', 'Inventory & warehouse tracking', 'Procurement & supply chain metrics', 'Automated HR payroll automation'],
    mockup: (
      <div className="bg-[#19181A] rounded-xl border border-white/5 p-4 h-48 flex flex-col justify-between font-sans text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="font-semibold text-white">Operations Controller</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-medium uppercase">Synced</span>
        </div>
        <div className="space-y-3 my-2 flex-grow flex flex-col justify-center">
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-400">Inventory Levels</span>
              <span className="text-white font-semibold">92% Capacity</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-[#F29CB7] h-full rounded-full" style={{ width: '92%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-400">Supply Pipeline</span>
              <span className="text-white font-semibold">Optimal</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#FBCF4F] to-[#F29CB7] h-full rounded-full" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-slate-500 border-t border-white/5 pt-2">
          <span>Active Nodes: 14/14</span>
          <span className="text-[#FBCF4F]">View Logs</span>
        </div>
      </div>
    )
  },
  {
    id: 'crm',
    name: 'Smart CRM',
    badge: 'Sales-Driven',
    color: 'from-[#F29CB7] to-[#522A6F]',
    borderColor: 'group-hover:border-[#F29CB7]/30',
    description: 'Turn pipelines into conversions with automated lead routing, pipeline visualizations, customer touchpoint history, and forecasting tools.',
    features: ['Interactive visual deal stages', 'Dynamic lead scoring algorithms', 'Unified engagement timeline', 'Predictive sales revenue charts'],
    mockup: (
      <div className="bg-[#19181A] rounded-xl border border-white/5 p-4 h-48 flex flex-col justify-between font-sans text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="font-semibold text-white">Sales Funnel</span>
          <span className="text-slate-400 font-mono text-[10px]">$48,250 ARR</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 my-2 flex-grow items-center">
          <div className="bg-white/[0.02] border border-white/5 rounded-lg p-1 sm:p-2 text-center">
            <span className="text-[8px] sm:text-[9px] text-slate-500 block uppercase mb-1">Leads</span>
            <span className="font-bold text-white text-xs sm:text-sm">34</span>
          </div>
          <div className="bg-[#522A6F]/20 border border-[#F29CB7]/20 rounded-lg p-1 sm:p-2 text-center">
            <span className="text-[8px] sm:text-[9px] text-[#F29CB7] block uppercase mb-1">Active</span>
            <span className="font-bold text-white text-xs sm:text-sm">18</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-lg p-1 sm:p-2 text-center">
            <span className="text-[8px] sm:text-[9px] text-slate-500 block uppercase mb-1">Won</span>
            <span className="font-bold text-[#FBCF4F] text-xs sm:text-sm">12</span>
          </div>
        </div>
        <div className="bg-white/[0.02] rounded-lg p-2 border border-white/5 flex items-center justify-between">
          <span className="text-[9px] text-slate-400">Latest Win: Acme Corp</span>
          <span className="text-[9px] text-emerald-400 font-semibold font-mono">+$8,400</span>
        </div>
      </div>
    )
  },
  {
    id: 'lms',
    name: 'Unified LMS',
    badge: 'Education Hub',
    color: 'from-[#DDAAFF] to-[#FBCF4F]',
    borderColor: 'group-hover:border-[#DDAAFF]/30',
    description: 'Corporate training and education platform providing course building modules, progress analytics, and automated custom credentials.',
    features: ['Visual course constructor tools', 'Student assessment and grading', 'Automated certificate generator', 'Custom learning path recommendations'],
    mockup: (
      <div className="bg-[#19181A] rounded-xl border border-white/5 p-4 h-48 flex flex-col justify-between font-sans text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="font-semibold text-white">Course Completion</span>
          <span className="text-[#DDAAFF] text-[9px] font-bold uppercase">React Native v2</span>
        </div>
        <div className="space-y-3 my-2 flex-grow flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border-2 border-[#FBCF4F] flex items-center justify-center font-bold text-[10px] text-white">
              85%
            </div>
            <div>
              <p className="text-white font-semibold">User Experience (UX)</p>
              <p className="text-[9px] text-slate-500">Module 4 of 6 completed</p>
            </div>
          </div>
        </div>
        <button disabled className="w-full py-1.5 rounded-lg bg-gradient-to-r from-primary to-[#7B2FF7] text-white font-semibold text-[10px] hover:translate-y-[-1px] transition-all">
          Generate Certificate
        </button>
      </div>
    )
  }
];

export function Products() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" ref={ref} className="py-24 lg:py-32 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Production-Ready <span className="gradient-text">SaaS Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We build and license robust, white-labeled software systems designed to run your enterprise operations efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group glass rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-primary/20 hover:shadow-[0_0_40px_rgba(82,42,111,0.1)] transition-all duration-300 flex flex-col lg:flex-row gap-6 justify-between items-stretch"
            >
              <div className="flex-grow flex flex-col justify-between max-w-lg">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-gradient-to-r ${product.color} text-white`}>
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6 lg:mb-0">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F29CB7]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full lg:w-72 flex-shrink-0 flex flex-col justify-center">
                {product.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

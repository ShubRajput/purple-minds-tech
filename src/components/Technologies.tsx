'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

type TechItem = {
  name: string;
  desc: string;
  icon: React.ReactNode;
};

type Category = 'frontend' | 'backend' | 'mobile' | 'cloud';

const categories: { id: Category; label: string }[] = [
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & Databases' },
  { id: 'mobile', label: 'Mobile & UI/UX' },
  { id: 'cloud', label: 'Cloud, DevOps & AI' },
];

const techData: Record<Category, TechItem[]> = {
  frontend: [
    {
      name: 'React',
      desc: 'Component-driven UI library',
      icon: (
        <svg className="w-8 h-8 text-[#00D8FF] animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" className="opacity-20" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: 'Next.js',
      desc: 'Hybrid React framework',
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 14.5h-1.5v-7H11l3.5 5.5v-5.5H16v7h-1.5L11 11v5.5Z" />
        </svg>
      )
    },
    {
      name: 'Vue.js',
      desc: 'Progressive JS framework',
      icon: (
        <svg className="w-8 h-8 text-[#41B883]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 3h4.5l5.5 9.5L17.5 3H22L12 20 2 3Zm4.5 0h3l2.5 4.5L14.5 3h3l-5.5 9.5L6.5 3Z" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      desc: 'Utility-first styling system',
      icon: (
        <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.5 0-4 1.25-4.5 3.75 1.125-1.5 2.5-2.125 4.125-1.875.928.143 1.59.816 2.324 1.57C15.14 10.662 16.51 12 19.5 12c2.5 0 4-1.25 4.5-3.75-1.125 1.5-2.5 2.125-4.125 1.875-.928-.143-1.59-.816-2.324-1.57C16.36 7.338 14.99 6 12 6Zm-7.5 6C2 12 .5 13.25 0 15.75c1.125-1.5 2.5-2.125 4.125-1.875.928.143 1.59.816 2.324 1.57C7.64 16.662 9.01 18 12 18c2.5 0 4-1.25 4-3.75-1.125 1.5-2.5 2.125-4.125 1.875-.928-.143-1.59-.816-2.324-1.57C8.36 13.338 6.99 12 4 12Z" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      desc: 'Type-safe JavaScript dialect',
      icon: (
        <svg className="w-8 h-8 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2h20v20H2V2Zm15.78 11.23c-.93 0-1.74.32-2.41.97-.67.64-1.01 1.53-1.01 2.66s.33 2.01.99 2.64c.66.63 1.48.95 2.47.95 1.15 0 2.02-.45 2.63-1.35l-1.46-.91c-.34.52-.77.78-1.29.78-.37 0-.67-.11-.9-.33-.23-.22-.36-.56-.4-.99h4.31v-.47c0-1.27-.32-2.22-.97-2.85-.65-.63-1.47-.94-2.46-.94Zm-1.81 2.32c.03-.41.14-.73.34-.95.2-.23.49-.34.86-.34.35 0 .63.11.83.33.2.22.31.54.34.96h-2.37ZM8.32 18.99c.33.27.75.4 1.25.4.52 0 .93-.13 1.21-.39.28-.26.43-.68.43-1.24v-6.53H9.42v1.36h1.27v5.04c0 .19-.05.34-.14.44-.09.1-.23.16-.42.16-.2 0-.36-.05-.48-.15-.12-.1-.2-.26-.24-.48l-1.39.4c.1.58.33 1 .68 1.26Z" />
        </svg>
      )
    },
    {
      name: 'GraphQL',
      desc: 'Declarative API query language',
      icon: (
        <svg className="w-8 h-8 text-[#E10098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8" className="opacity-20" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="8" x2="22" y2="16" />
          <line x1="2" y1="16" x2="22" y2="8" />
          <circle cx="12" cy="2" r="1.5" fill="currentColor" />
          <circle cx="22" cy="8" r="1.5" fill="currentColor" />
          <circle cx="22" cy="16" r="1.5" fill="currentColor" />
          <circle cx="12" cy="22" r="1.5" fill="currentColor" />
          <circle cx="2" cy="16" r="1.5" fill="currentColor" />
          <circle cx="2" cy="8" r="1.5" fill="currentColor" />
        </svg>
      )
    }
  ],
  backend: [
    {
      name: 'Node.js',
      desc: 'Asynchronous JS runtime engine',
      icon: (
        <svg className="w-8 h-8 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2.5 7.5v11L12 22l9.5-5.5v-11L12 2Zm0 3.27l6.63 3.83v7.66L12 18.73l-6.63-3.83V9.1L12 5.27Z" />
        </svg>
      )
    },
    {
      name: 'Go (Golang)',
      desc: 'High-performance system language',
      icon: (
        <svg className="w-8 h-8 text-[#00ADD8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a4 4 0 1 0 0 8c1.8 0 3-1 3.5-2.5h-3.5" />
          <rect x="2" y="8" width="8" height="8" rx="2" />
        </svg>
      )
    },
    {
      name: 'Python',
      desc: 'Machine learning & backend language',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-2.76 0-5 2.24-5 5h5v2H5c-1.66 0-3 1.34-3 3v5c0 1.66 1.34 3 3 3h2c1.1 0 2-.9 2-2v-3h5c2.76 0 5-2.24 5-5h-5V8h7c1.66 0 3-1.34 3-3V2c0-1.66-1.34-3-3-3h-2C16.9 0 16 .9 16 2v3h-4V2Z" fill="#3776AB" />
          <path d="M12 22c2.76 0 5-2.24 5-5h-5v-2h7c1.66 0 3-1.34 3-3v-5c0-1.66-1.34-3-3-3h-2c-1.1 0-2 .9-2 2v3h-5c-2.76 0-5 2.24-5 5h5v2H2c-1.66 0-3 1.34-3 3v3c0 1.66 1.34 3 3 3h2c1.1 0 2-.9 2-2v-3h4v3Z" fill="#FFD43B" />
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      desc: 'Enterprise relational database',
      icon: (
        <svg className="w-8 h-8 text-[#4169E1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 4 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 4 3 8 3s8-1.34 8-3v-6" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      desc: 'Document-oriented NoSQL storage',
      icon: (
        <svg className="w-8 h-8 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10 6 7 9.5 7 13.5c0 2.5 2.2 4.5 5 4.5s5-2 5-4.5c0-4-3-7.5-5-11.5Zm0 13c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5Z" />
        </svg>
      )
    },
    {
      name: 'Redis',
      desc: 'In-memory key-value cache store',
      icon: (
        <svg className="w-8 h-8 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5ZM2 11.5l10 5 10-5v2l-10 5-10-5v-2ZM2 16.5l10 5 10-5v2l-10 5-10-5v-2Z" />
        </svg>
      )
    }
  ],
  mobile: [
    {
      name: 'React Native',
      desc: 'Cross-platform native mobile apps',
      icon: (
        <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: 'Flutter',
      desc: 'Dart-powered high-performance mobile',
      icon: (
        <svg className="w-8 h-8 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.3 2.3L5 11.6l3.7 3.7 9.3-9.3h-3.7Zm3.7 9.3l-5.6 5.6 5.6 5.5h3.7L16 17.2l5.7-5.6h-3.7Z" />
        </svg>
      )
    },
    {
      name: 'Figma',
      desc: 'Collaborative product design editor',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 2h4v4H8V2Z" fill="#F24E1E" />
          <path d="M12 2h4v4h-4V2Z" fill="#FF7262" />
          <path d="M8 6h4v4H8V6Z" fill="#A259FF" />
          <path d="M12 6h4v4h-4V6Z" fill="#1ABC9C" />
          <path d="M8 10h4v4H8v-4Z" fill="#19B5FE" />
          <path d="M12 10a4 4 0 1 1-4 4h4v-4Z" fill="#0ACF83" />
        </svg>
      )
    },
    {
      name: 'Native Dev',
      desc: 'Swift & Kotlin app builds',
      icon: (
        <svg className="w-8 h-8 text-[#FF6C37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    }
  ],
  cloud: [
    {
      name: 'AWS Cloud',
      desc: 'Secure cloud hosting architecture',
      icon: (
        <svg className="w-8 h-8 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm3.42 13.91c-.48.24-.96.38-1.46.38-.85 0-1.44-.43-1.44-1.22V11.2h2.5v-1.5h-2.5V7.4l-1.8.6v1.7H9.25v1.5h1.47v4.11c0 1.95 1.15 2.79 2.76 2.79.79 0 1.54-.22 2.06-.51l-.12-1.98Z" />
        </svg>
      )
    },
    {
      name: 'Docker',
      desc: 'Consistent container environments',
      icon: (
        <svg className="w-8 h-8 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.962 10.32h-2.285V8.12h2.285v2.2Zm-2.735 0H8.94V8.12h2.287v2.2Zm-2.737 0H6.205V8.12h2.285v2.2Zm-2.737 0H3.473V8.12H5.76v2.2Zm8.202-2.65h-2.285V5.47h2.285v2.2Zm-2.735 0H8.94V5.47h2.287v2.2Zm11.025 2.87c-.12-.85-.9-1.42-1.72-1.42h-3.83v2.2h2.64v1.1h-4.39v2.2h5.58c.83 0 1.6-.57 1.72-1.42l.06-.66Z" />
        </svg>
      )
    },
    {
      name: 'Kubernetes',
      desc: 'Container management scale system',
      icon: (
        <svg className="w-8 h-8 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2.3 6v12L12 22l9.7-4V6L12 2Zm0 3.2L18.8 8v8L12 18.8 5.2 16V8L12 5.2Z" />
        </svg>
      )
    },
    {
      name: 'TensorFlow',
      desc: 'Machine learning & neural networks',
      icon: (
        <svg className="w-8 h-8 text-[#FF6F00]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2Zm0 3.2L17.8 8v8L12 18.8 6.2 16V8L12 5.2Z" />
        </svg>
      )
    },
    {
      name: 'PyTorch',
      desc: 'Deep learning research frameworks',
      icon: (
        <svg className="w-8 h-8 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2Zm0 3.2L18.8 12 12 18.8 5.2 12 12 5.2Z" />
        </svg>
      )
    }
  ]
};

export function Technologies() {
  const [activeTab, setActiveTab] = useState<Category>('frontend');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="technologies" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background Glow Grid */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBCF4F] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Our Battle-Tested <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We use modern, efficient, and scale-ready languages, frameworks, and tools to construct premium digital products.
          </p>
        </motion.div>

        {/* Tab Headers */}
        <div className="w-full flex justify-start sm:justify-center overflow-x-auto scrollbar-none mb-12 pb-2">
          <div className="flex whitespace-nowrap bg-white/[0.02] border border-white/5 p-1.5 rounded-2xl backdrop-blur-md shadow-glass gap-1 min-w-max mx-auto sm:mx-0 sm:flex-wrap sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-primary to-[#7B2FF7] text-white shadow-glow'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="min-h-[260px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {techData[activeTab].map((tech) => (
                <div
                  key={tech.name}
                  className="group glass rounded-2xl p-5 border border-white/5 hover:border-[#F29CB7]/30 hover:shadow-[0_0_20px_rgba(242,156,183,0.06)] hover:bg-white/[0.02] transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#DDAAFF]/30 group-hover:bg-white/[0.06] transition-all duration-300">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-glow transition-all duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 leading-normal">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

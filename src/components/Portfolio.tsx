'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { SheetProject } from '@/types/sheets';

const gradientByIndex = [
  'from-primary to-neon-violet',
  'from-neon-blue to-primary',
  'from-neon-violet to-neon-blue',
  'from-primary to-neon-blue',
  'from-neon-blue to-neon-violet',
  'from-neon-violet to-primary',
];

function getGradient(i: number) {
  return gradientByIndex[i % gradientByIndex.length];
}

type PortfolioProps = {
  projects: SheetProject[];
};

export function Portfolio({ projects }: PortfolioProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" ref={ref} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Portfolio & <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A selection of our recent work across web, mobile, and AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={`${project.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary/30 transition-all cursor-pointer h-64"
            >
              {/* Background image with theme-matching overlay */}
              <div className="absolute inset-0">
                {project.imageUrl ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element -- Dynamic URLs from Google Sheet */}
                    <img
                      src={project.imageUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-dark-bg/70"
                      aria-hidden
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent opacity-90`}
                      aria-hidden
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getGradient(i)} opacity-20 group-hover:opacity-30 transition-opacity`}
                      aria-hidden
                    />
                  </>
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getGradient(i)} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                )}
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium mb-1">
                  {project.type}
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techs = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS',
  'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Tailwind',
  'Figma', 'TensorFlow', 'React Native', 'Flutter', 'Vue', 'Go',
];

export function Technologies() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="technologies" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Technologies <span className="gradient-text">We Use</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Modern, battle-tested tools to deliver high-performance solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-xl px-6 py-4 text-center font-medium text-slate-300 hover:text-primary hover:border-primary/40 border border-white/5 transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

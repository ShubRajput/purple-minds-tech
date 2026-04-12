'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: 'Innovation First',
    description: 'We use the latest tech and best practices to future-proof your product.',
    icon: '⚡',
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication, agile sprints, and regular demos so you stay in control.',
    icon: '🔍',
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to grow with your business from day one.',
    icon: '📐',
  },
  {
    title: 'SEO Expert',
    description: 'Search visibility and organic growth strategies built into your product.',
    icon: '🔎',
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" ref={ref} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We combine technical excellence with a partnership approach.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

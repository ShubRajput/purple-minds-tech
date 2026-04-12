'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Web Application Development',
    description: 'Custom web apps built with modern stacks. Fast, scalable, and secure.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'SaaS Development',
    description: 'End-to-end SaaS products with subscription and billing.',
    icon: '☁️',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns, SEO, and growth strategies.',
    icon: '📈',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure, CI/CD, and cloud migration expertise.',
    icon: '🔧',
  },
  {
    title: 'AI Solutions',
    description: 'ML models, automation, and intelligent systems.',
    icon: '🤖',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that converts and delights.',
    icon: '✨',
  },
  {
    title: 'Tech Consulting',
    description: 'Strategy, architecture, and digital transformation guidance.',
    icon: '💡',
  },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg">
            End-to-end technology services to build, grow, and scale your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all cursor-default"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

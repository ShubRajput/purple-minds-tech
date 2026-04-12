'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import type { SheetTestimonial } from '@/types/sheets';

type TestimonialsProps = {
  testimonials: SheetTestimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Trusted by startups and enterprises worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 sm:p-10 border border-white/5"
            >
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-neon-blue flex items-center justify-center text-white font-display font-semibold">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[active].name}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active
                    ? 'bg-primary w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

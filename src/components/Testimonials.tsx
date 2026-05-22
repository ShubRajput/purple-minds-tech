'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { SheetTestimonial } from '@/types/sheets';

type TestimonialsProps = {
  testimonials: SheetTestimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  if (testimonials.length === 0) return null;

  // Split testimonials into two groups to run opposite directions
  const mid = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, mid);
  const secondRow = testimonials.slice(mid);

  // Duplicate items to ensure infinite looping without blank spaces
  const doubleFirstRow = [...firstRow, ...firstRow];
  const doubleSecondRow = [...secondRow, ...secondRow];

  const StarRating = () => (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-[#FBCF4F] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-[40%] right-[-10%] w-96 h-96 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 rounded-full bg-[#F29CB7]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#522A6F]/20 border border-[#F29CB7]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F29CB7] animate-pulse" />
            <span className="text-[#FAEADD] font-medium text-[10px] md:text-xs tracking-widest uppercase">
              Proven Track Record
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4"
          >
            What Our Partners <span className="gradient-text">Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            We don&apos;t just write code—we partner with fast-growing startups and enterprises to build market leaders.
          </motion.p>
        </div>
      </div>

      {/* Infinite scrolling rows */}
      <div className="flex flex-col gap-6 relative select-none pointer-events-auto">
        {/* Row 1: Sliding Left */}
        <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused] py-4">
            {doubleFirstRow.map((t, i) => (
              <div
                key={`row1-${i}`}
                className="w-[280px] sm:w-[380px] shrink-0 glass rounded-3xl p-6 border border-white/5 hover:border-[#F29CB7]/30 hover:shadow-[0_0_30px_rgba(242,156,183,0.05)] transition-all duration-300 flex flex-col justify-between bg-[#19181A]/40"
              >
                <div>
                  <StarRating />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#522A6F] to-[#F29CB7] flex items-center justify-center text-white font-display font-black text-xs shadow-inner">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {t.name}
                    </h4>
                    <p className="text-slate-500 text-[11px] font-mono">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused] py-4">
            {doubleSecondRow.map((t, i) => (
              <div
                key={`row2-${i}`}
                className="w-[280px] sm:w-[380px] shrink-0 glass rounded-3xl p-6 border border-white/5 hover:border-[#DDAAFF]/30 hover:shadow-[0_0_30px_rgba(221,170,255,0.05)] transition-all duration-300 flex flex-col justify-between bg-[#19181A]/40"
              >
                <div>
                  <StarRating />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#522A6F] to-[#DDAAFF] flex items-center justify-center text-white font-display font-black text-xs shadow-inner">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {t.name}
                    </h4>
                    <p className="text-slate-500 text-[11px] font-mono">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Tell us about your project. We will get back within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto grid lg:grid-cols-2 gap-8 items-start"
        >
          <div className="glass rounded-2xl p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Describe your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all hover:shadow-glow"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/5 h-full min-h-[280px] flex flex-col justify-center">
            <h3 className="text-lg font-display font-semibold text-white mb-4">
              Map & Office
            </h3>
            <div className="aspect-video rounded-xl bg-dark-surface border border-white/10 flex items-center justify-center text-slate-500">
              Map integration placeholder
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              Silicon Valley, CA • hello@purplemindstech.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

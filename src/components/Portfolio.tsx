'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CATEGORIES = [
  'All',
  'Web Apps & Scrapers',
  'SaaS & Tools',
  'E-Commerce & Travel',
  'Creative & Event Portals',
  'Wellness Platforms'
];

// Helper to get default tags if none are provided (e.g. from Google Sheets)
function getProjectTags(project: SheetProject): string[] {
  if (project.tags && project.tags.length > 0) return project.tags;
  
  // Dynamic heuristics based on name/type
  const type = project.type.toLowerCase();
  const name = project.name.toLowerCase();
  
  if (type.includes('scraper') || name.includes('rss') || name.includes('scrape')) {
    return ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Puppeteer'];
  }
  if (type.includes('design') || type.includes('creative') || type.includes('wedding') || name.includes('offwhite')) {
    return ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'];
  }
  if (type.includes('travel') || name.includes('tour')) {
    return ['React', 'Node.js', 'Express', 'MySQL'];
  }
  if (type.includes('saas') || type.includes('tool') || name.includes('qr')) {
    return ['React', 'Tailwind CSS', 'Next.js', 'Netlify'];
  }
  if (type.includes('wellness') || name.includes('ritual') || name.includes('kid')) {
    return ['Next.js', 'React', 'Node.js', 'MongoDB'];
  }
  return ['React', 'Next.js', 'Tailwind CSS'];
}

// Wedding project subpages detailed metadata
const WEDDING_SUBPAGES = [
  {
    name: 'Dhanyog Ruhasthashram',
    path: '/dhanyogruhasthashram',
    description: 'Spiritual stage of life section showcasing wedding invitation & events.',
    icon: (
      <svg className="w-5 h-5 text-neon-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    name: 'Mangalashtak Upnayan',
    path: '/mangalashtakupnayan',
    description: 'Thread ceremony verses, traditions, and event itinerary details.',
    icon: (
      <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    name: 'Mangalashtak Vivah',
    path: '/mangalashtakvivah',
    description: 'Interactive marriage ceremony guidelines, hymns, and schedules.',
    icon: (
      <svg className="w-5 h-5 text-neon-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: 'Dhanyawad Sandesh & Gift',
    path: '/dhanyawadsandeshgift',
    description: 'A beautiful gratitude page with thank you message & gift Registry options.',
    icon: (
      <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    name: 'Wishes Wall',
    path: '/wishes',
    description: 'An interactive live wall where guests submit wishes & blessings.',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

export function Portfolio({ projects }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<SheetProject | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);

  // Filter projects by both category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.type.toLowerCase().trim() === selectedCategory.toLowerCase().trim();

    const tags = getProjectTags(project).join(' ').toLowerCase();
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tags.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 lg:py-32 relative bg-dark-bg overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-neon-violet font-semibold tracking-wider text-xs uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              Our Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-4">
              Portfolio & <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Explore our diverse ecosystem of products, MVP solutions, and client projects built with bleeding-edge technology.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-dark-bg/60 border border-white/10 rounded-xl text-white text-sm placeholder-slate-400 focus:outline-none focus:border-neon-violet/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Categories Grid */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-none pb-2 md:pb-0">
            <div className="flex whitespace-nowrap min-w-max gap-2 md:justify-end">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-gradient-premium rounded-xl -z-10 shadow-glow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const tags = getProjectTags(project);
              return (
                <motion.article
                  key={`${project.name}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveProject(project)}
                  className="group relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-neon-violet/30 transition-all duration-300 cursor-pointer flex flex-col justify-between h-96 shadow-lg hover:shadow-glow"
                >
                  {/* Image/Gradient Background */}
                  <div className="relative h-48 overflow-hidden">
                    {project.imageUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.imageUrl}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/40 to-transparent" />
                      </>
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${getGradient(i)} opacity-40`} />
                    )}
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-dark-bg/80 border border-white/10 text-neon-blue rounded-full backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-dark-surface/40">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-neon-violet transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges (Limit to 3, show +X for others) */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded">
                            {tag}
                          </span>
                        ))}
                        {tags.length > 3 && (
                          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-neon-violet/10 border border-neon-violet/20 text-neon-violet rounded">
                            +{tags.length - 3} More
                          </span>
                        )}
                      </div>

                      {/* CTA Trigger Link Mock */}
                      <div className="flex items-center text-xs font-semibold text-neon-blue group-hover:text-neon-violet transition-colors">
                        <span>View Interactive Details</span>
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"
          >
            <svg className="w-12 h-12 text-slate-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-white mb-1">No Projects Found</h3>
            <p className="text-slate-400 text-sm">
              We couldn&apos;t find any projects matching &ldquo;{searchQuery}&rdquo; in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-dark-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="fixed md:absolute top-4 right-4 z-50 w-10 h-10 md:w-8 md:h-8 rounded-full bg-dark-bg/85 border border-white/15 text-white flex items-center justify-center hover:bg-white/10 hover:scale-105 active:scale-95 shadow-lg md:shadow-none transition-all"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column: Device Mockup Preview */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-dark-bg/50 border-r border-white/5">
                {/* Browser Mockup */}
                <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-glass bg-[#151416]">
                  {/* Browser Header */}
                  <div className="px-4 py-3 bg-[#1e1d20] flex items-center gap-2 border-b border-white/5">
                    {/* Circle buttons */}
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 max-w-[80%] mx-auto bg-dark-bg/60 border border-white/5 rounded-md px-3 py-0.5 text-[10px] text-slate-400 flex items-center gap-1.5 select-none overflow-hidden whitespace-nowrap">
                      <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{activeProject.link || 'https://purplemindstech.com'}</span>
                    </div>
                  </div>

                  {/* Browser Content Frame */}
                  <div className="relative aspect-video w-full bg-dark-surface overflow-hidden group/browser">
                    {activeProject.imageUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={activeProject.imageUrl}
                          alt={activeProject.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg/60 to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-premium opacity-60 flex items-center justify-center">
                        <span className="text-white/80 font-display font-semibold tracking-wider text-lg">
                          PMT Live App
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-[10px] text-center text-slate-500 mt-4 italic">
                  *Device preview demonstrates simulated production state.
                </p>
              </div>

              {/* Right Column: Project Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <span className="text-neon-violet text-xs font-semibold tracking-wider uppercase block mb-1">
                    {activeProject.type}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                    {activeProject.name}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Technologies & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {getProjectTags(activeProject).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 text-slate-200 rounded-lg hover:border-neon-violet/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Special Custom Event subpages for Wedding project */}
                  {activeProject.link?.includes('wedding') && (
                    <div className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-4">
                      <h4 className="text-xs font-semibold text-neon-violet uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Invitation Suite Subpages
                      </h4>
                      <div className="space-y-3">
                        {WEDDING_SUBPAGES.map((sub, sIdx) => (
                          <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 hover:bg-white/5 rounded-xl transition-colors group/sub">
                            <div className="flex gap-3 items-start">
                              <div className="mt-0.5 w-8 h-8 rounded-lg bg-dark-bg border border-white/10 flex items-center justify-center flex-shrink-0">
                                {sub.icon}
                              </div>
                              <div>
                                <h5 className="text-xs font-semibold text-white group-hover/sub:text-neon-violet transition-colors">
                                  {sub.name}
                                </h5>
                                <p className="text-[10px] text-slate-400 leading-normal">
                                  {sub.description}
                                </p>
                              </div>
                            </div>
                            <a
                              href={`${activeProject.link}${sub.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-semibold text-neon-blue hover:text-white flex items-center justify-center gap-0.5 bg-white/5 hover:bg-neon-blue/20 border border-white/10 px-3 py-1.5 rounded-md transition-all whitespace-nowrap w-full sm:w-auto text-center mt-1 sm:mt-0"
                            >
                              Visit Page
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary External Action Button */}
                {activeProject.link && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-premium hover:shadow-glow text-white text-center font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                    >
                      <span>Launch Live Website</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import type { SheetProject, SheetTestimonial } from '@/types/sheets';

export const defaultProjects: SheetProject[] = [
  {
    name: 'SmartRSS Scraper MVP',
    type: 'Web Apps & Scrapers',
    description: 'Advanced web scrapers for real-time news aggregation and social media scraping.',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    link: 'https://getsmartrss.com/',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Puppeteer']
  },
  {
    name: 'OffWhite Design',
    type: 'Creative & Event Portals',
    description: 'Premium, high-end design agency portfolio and digital art studio showcase.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800',
    link: 'https://offwhitedesign.in/',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX']
  },
  {
    name: 'My Rituals',
    type: 'Wellness Platforms',
    description: 'Spiritual tracker and daily mindfulness ritual management platform.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    link: 'https://myrituals.org/',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    name: 'Arihant Tours',
    type: 'E-Commerce & Travel',
    description: 'Comprehensive booking platform for travel agencies, itineraries, and packages.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    link: 'https://arihanttours.net/',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Rest APIs']
  },
  {
    name: 'Interactive Wedding Suite',
    type: 'Creative & Event Portals',
    description: 'A premium, animated digital wedding invitation and event RSVP platform.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    link: 'https://shubham-kanugo-wedding.netlify.app',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify']
  },
  {
    name: 'Placifyed',
    type: 'Web Apps & Scrapers',
    description: 'Job placement and college placement training preparation platform.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    link: 'https://placifyed.netlify.app/',
    tags: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'AWS']
  },
  {
    name: 'QRs Code Generator',
    type: 'SaaS & Tools',
    description: 'Instant custom QR code generator supporting links, text, and styled dynamic codes.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    link: 'https://qrs-code-generators.netlify.app/',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'Netlify']
  },
  {
    name: 'The Great Chinese Wok',
    type: 'SaaS & Tools',
    description: 'Interactive QR-based digital restaurant menu card with live selection and ordering.',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800',
    link: 'https://the-greate-chinese-wok.netlify.app/',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB']
  },
  {
    name: 'PurpleMinds Tech India',
    type: 'Creative & Event Portals',
    description: 'Official corporate website and portfolio for PurpleMinds Tech India.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    link: 'https://purplemindstechindia.netlify.app/',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GCP', 'AWS']
  },
  {
    name: 'Kids Learn India',
    type: 'Wellness Platforms',
    description: 'Interactive and visual educational demo web application designed for kids.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    link: 'https://kidslearnindia.netlify.app/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React']
  }
];

export const defaultTestimonials: SheetTestimonial[] = [
  { quote: 'Purple Minds Tech delivered our SaaS platform on time and beyond expectations. Their technical depth and communication are outstanding.', name: 'Sarah Chen', role: 'CEO, CloudBase', avatar: 'SC' },
  { quote: 'From concept to launch, the team was professional and innovative. Our app is now live and users love the experience.', name: 'Marcus Johnson', role: 'Founder, FitTrack', avatar: 'MJ' },
  { quote: 'Best tech partner we have worked with. They understood our vision and turned it into a scalable, beautiful product.', name: 'Elena Rodriguez', role: 'CTO, DataFlow', avatar: 'ER' },
  { quote: 'The AI integrations they built for our workflows saved us 40+ hours a week. Their speed of execution is unmatched.', name: 'David Kim', role: 'Co-Founder, Veloce AI', avatar: 'DK' },
  { quote: 'Our Facebook and Instagram campaigns generated 4x more qualified leads in under a month. Absolute game-changers.', name: 'Aisha Rahman', role: 'Director, Bloom Brands', avatar: 'AR' },
  { quote: 'Extremely reliable engineering team. They designed our cloud architecture to handle millions of transactions with ease.', name: 'Oliver Hansen', role: 'VP of Product, FinTech Group', avatar: 'OH' },
  { quote: 'Their design system transformed our digital identity. Modern, clean styling combined with solid backend logic.', name: 'Priya Nair', role: 'CEO, ZenSpace', avatar: 'PN' },
];

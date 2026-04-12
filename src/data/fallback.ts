import type { SheetProject, SheetTestimonial } from '@/types/sheets';

export const defaultProjects: SheetProject[] = [
  { name: 'FinTech Dashboard', type: 'Web App', description: 'Real-time analytics and reporting platform.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
  { name: 'Health & Fitness App', type: 'Mobile App', description: 'Workout tracking and nutrition planning.', imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800' },
  { name: 'E-Commerce SaaS', type: 'SaaS', description: 'Multi-tenant storefront and admin.', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800' },
  { name: 'AI Content Studio', type: 'AI', description: 'AI-powered content generation tool.', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800' },
  { name: 'DevOps Portal', type: 'Cloud', description: 'CI/CD and infrastructure management.', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800' },
  { name: 'Design System', type: 'UI/UX', description: 'Component library and design tokens.', imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d41294b9?w=800' },
];

export const defaultTestimonials: SheetTestimonial[] = [
  { quote: 'Purple Minds Tech delivered our SaaS platform on time and beyond expectations. Their technical depth and communication are outstanding.', name: 'Sarah Chen', role: 'CEO, CloudBase', avatar: 'SC' },
  { quote: 'From concept to launch, the team was professional and innovative. Our app is now live and users love the experience.', name: 'Marcus Johnson', role: 'Founder, FitTrack', avatar: 'MJ' },
  { quote: 'Best tech partner we have worked with. They understood our vision and turned it into a scalable, beautiful product.', name: 'Elena Rodriguez', role: 'CTO, DataFlow', avatar: 'ER' },
];

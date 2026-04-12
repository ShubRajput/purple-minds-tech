# Purple Minds Tech — 3D Startup Website

A modern, premium, futuristic 3D website for **Purple Minds Tech**, a technology startup. Built with Next.js, React Three Fiber, Framer Motion, and Tailwind CSS.

## Features

- **3D Hero** — Animated particles, glowing orbs, mouse-reactive 3D scene (React Three Fiber)
- **Sections** — About, Services, Technologies, Portfolio, Why Choose Us, Testimonials, Contact
- **Design** — Dark theme, purple/neon gradients, glassmorphism, smooth scroll animations
- **Performance** — Lazy-loaded 3D canvas, scroll-triggered animations, responsive layout
- **SEO** — Semantic HTML, metadata, clean structure

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **React Three Fiber** + **Drei** (3D)
- **Framer Motion** (animations)
- **TypeScript**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── HeroScene.tsx   # 3D canvas (lazy-loaded)
    ├── About.tsx
    ├── Services.tsx
    ├── Technologies.tsx
    ├── Portfolio.tsx
    ├── WhyChooseUs.tsx
    ├── Testimonials.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Brand

- **Primary:** `#7B2FF7`
- **Accents:** Neon blue `#00d4ff`, Violet `#a855f7`
- **Feel:** Innovative, premium, trustworthy

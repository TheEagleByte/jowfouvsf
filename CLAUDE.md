# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Inventure Recruitment Platform** - A static marketing website for "Recruiting Without Limits" in the sustainable energy sector. This is currently a static HTML/CSS/JS website designed with minimalist aesthetics and modern web standards, serving as the foundation for a future dynamic AI-powered recruitment platform.

**Project codename**: `jowfouvsf` (Shift Cipher Caesar Code +1)

## Current Architecture

The project uses a **dual architecture** approach:

### 1. Static Marketing Website (`design/` directory)
```
design/
├── index.html          # Main landing page
├── dashboard.html      # Static dashboard prototype
├── styles.css         # CSS styles
└── script.js          # JavaScript functionality
```

### 2. Next.js Dynamic Application (`src/` directory)
```
src/
├── app/
│   ├── layout.tsx         # Root layout with Geist fonts
│   ├── page.tsx           # Home page with organism components
│   ├── globals.css        # Global styles with CSS custom properties
│   └── dashboard/         # Dashboard pages
│       ├── page.tsx       # Main dashboard
│       ├── recruiter/     # Recruiter-specific dashboard
│       ├── candidate/     # Candidate-specific dashboard
│       └── admin/         # Admin dashboard
├── components/
│   ├── ui/               # shadcn/ui components (Button, Card, Input)
│   ├── atoms/            # Basic components (Logo, Container, Counter)
│   ├── organisms/        # Complex components (Header, Hero, Features)
│   └── charts/           # Data visualization components
├── hooks/               # Custom React hooks
└── lib/                # Utility functions
```

### Development Commands
- `npm run dev` - Start Next.js development server with Turbopack
- `npm run build` - Build production Next.js app with Turbopack  
- `npm start` - Start production server

### Key Files
- `src/app/page.tsx` - Main homepage using organism-based component architecture
- `src/app/globals.css` - CSS custom properties matching design system
- `src/components/organisms/` - Page-level components (Header, Hero, Features, etc.)
- `design/index.html` - Static marketing site prototype
- `FUTURE_ARCHITECTURE.md` - Technical roadmap for platform evolution

## Design System

### Color Palette
- Primary: `--primary-green: #22C55E`, `--primary-dark: #0A0A0A`, `--primary-white: #FFFFFF`
- Accents: `--accent-emerald: #10B981`, `--accent-teal: #14B8A6`, `--accent-amber: #F59E0B`
- Neutrals: 9-scale from `--neutral-50` to `--neutral-900`

### Typography
- Font stack: Inter (sans), JetBrains Mono (mono)
- Scale: `--text-xs` (12px) to `--text-6xl` (60px)
- Weights: 300, 400, 500, 600, 700

### Component System
- **Buttons**: `.btn` with variants (primary, secondary, ghost, dark) and sizes (sm, md, lg)
- **Cards**: `.card` with hover effects and consistent padding
- **Layout**: CSS Grid and Flexbox with 8px spacing system
- **Animations**: Scroll-reveal, particle system, progress indicators

## Development Workflow

### Next.js Development (Primary)
- **Tech Stack**: Next.js 15.5.2, React 19.1.0, TypeScript, Tailwind CSS v4
- **Development**: `npm run dev` starts Turbopack-powered dev server on http://localhost:3000
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for design tokens

### Static Prototype (Secondary)
- **Purpose**: Design prototyping and static fallback
- **Testing**: Open `design/index.html` directly in browser
- **No build system**: Direct HTML/CSS/JS files

### Architecture Patterns
- **Atomic Design**: Components organized as atoms → organisms → pages
- **CSS Variables**: Consistent design tokens in `src/app/globals.css`
- **TypeScript**: Strict typing with Next.js app router
- **File-based Routing**: Next.js app directory structure

## Key Features & Components

### Navigation
- Responsive header with mobile hamburger menu
- Smooth scroll to anchor sections
- Floating glass-morphism design with scroll shadows

### Hero Section
- Animated particle system with connection lines
- Counter animations for statistics
- Responsive typography scaling

### Interactive Elements
- Hover effects on cards and buttons
- Scroll-triggered reveal animations
- Progress circle indicators
- Mobile-friendly touch interactions

## Future Evolution Path

The platform is designed to evolve from static to dynamic:

**Phase 1**: Current static marketing site
**Phase 2**: User authentication and broker dashboards  
**Phase 3**: AI-powered matching and community features
**Phase 4**: Revenue sharing and advanced analytics

Refer to `FUTURE_ARCHITECTURE.md` for detailed technical roadmap.

## Code Style Guidelines

### React/TypeScript (Next.js App)
- **Components**: Use TypeScript with proper prop typing
- **Styling**: Tailwind classes with CSS custom properties for design tokens
- **Architecture**: Atomic design pattern (atoms → organisms → pages)
- **State**: Client components with "use client" directive when needed
- **Imports**: Absolute imports using `@/` path mapping

### Static HTML/CSS/JS (Design Prototype)
- **HTML**: Semantic elements with proper ARIA labels
- **CSS**: CSS custom properties exclusively, minimize specificity
- **JavaScript**: ES6+ with browser compatibility
- **Responsive**: Mobile-first design with defined breakpoints

### Shared Design System
- **Colors**: Use CSS custom properties from globals.css
- **Typography**: Inter (sans) and JetBrains Mono (monospace)
- **Spacing**: 8px spacing system with Tailwind scale
- **Components**: Consistent button, card, and form styles across both systems

## Important Notes

### Development Priorities
- **Primary Development**: Focus on Next.js app (`src/`) for new features
- **Design System**: Maintain consistency between static and dynamic versions
- **CSS Custom Properties**: All colors, spacing, and typography must use design tokens
- **Mobile Responsiveness**: Test thoroughly (44px minimum touch targets)
- **Accessibility**: Preserve keyboard navigation and focus indicators

### Testing & Validation
- **Next.js**: Use `npm run dev` for development server
- **Static Site**: Test `design/index.html` directly in browser
- **Responsive Design**: Test at breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- **Browser Testing**: Use playwright MCP server to validate changes
- **Documentation**: Use context7 MCP server for up-to-date library references

### Project Evolution
- Current phase focuses on marketing site and dashboard prototypes
- Future features should integrate with existing component architecture
- Maintain minimalist design philosophy per brand guidelines
- Refer to `FUTURE_ARCHITECTURE.md` for long-term technical roadmap
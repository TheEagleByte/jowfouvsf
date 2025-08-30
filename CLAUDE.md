# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Inventure Recruitment Platform** - A static marketing website for "Recruiting Without Limits" in the sustainable energy sector. This is currently a static HTML/CSS/JS website designed with minimalist aesthetics and modern web standards, serving as the foundation for a future dynamic AI-powered recruitment platform.

**Project codename**: `jowfouvsf` (Shift Cipher Caesar Code +1)

## Current Architecture

### Static Website Structure
```
designs/
├── index.html          # Main landing page
├── css/
│   ├── variables.css   # Design tokens and CSS custom properties
│   ├── main.css       # Core layout and typography
│   ├── components.css # UI components (buttons, cards, forms)
│   └── animations.css # Animation definitions
└── js/
    ├── main.js        # Core functionality (navigation, particles)
    ├── components.js  # Interactive components
    └── animations.js  # Animation controllers
```

### Key Files
- `designs/index.html` - Complete single-page application with all sections
- `designs/css/variables.css` - Comprehensive design system with CSS custom properties
- `designs/js/main.js` - Main JavaScript with mobile menu, smooth scroll, particle system
- `DESIGN_SPEC.md` - Detailed design specifications and component guidelines
- `FUTURE_ARCHITECTURE.md` - Technical roadmap for evolution to dynamic platform

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

### No Build System
This is a static website with no package.json, build tools, or dependency management. Files are served directly from the `designs/` directory.

### Testing
- Open `designs/index.html` directly in browser
- Test responsive design at breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Verify animations and interactive elements work correctly

### File Organization Principles
- CSS follows atomic design principles (variables → main → components → animations)
- JavaScript is modular with clear separation of concerns
- All styles use CSS custom properties from `variables.css`
- Semantic HTML with accessibility considerations

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

### HTML
- Semantic elements with proper ARIA labels
- BEM-like class naming for components
- Mobile-first responsive design

### CSS
- Use CSS custom properties exclusively for consistency
- Follow design system tokens from `variables.css`
- Minimize specificity, prefer class-based selectors
- Animation timing follows predefined duration and easing variables

### JavaScript
- ES6+ features with browser compatibility
- Event delegation for performance
- Intersection Observer API for scroll animations
- Debounced resize handlers

## Important Notes

- All colors, spacing, and typography must use CSS custom properties
- Maintain minimalist design philosophy per brand guidelines
- Test mobile responsiveness thoroughly (touch targets 44px minimum)
- Preserve accessibility features (keyboard navigation, focus indicators)
- Animations should be smooth and purposeful, not decorative
- Future dynamic features should integrate with existing component system
- Use the playwright MCP server to validate and test your changes in a browser
- Use the context7 MCP server to reference up-to-date documentation about anything as you're building it
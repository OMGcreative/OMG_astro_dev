# OMG Creative - Astro Site

A modern, performant static site built with Astro.js, recreating the [OMG Creative](https://omgcreative.com.au) website.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```

/
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   ├── Hero.astro
│   │   ├── WhatWeDo.astro
│   │   ├── ProjectCard.astro
│   │   └── ContactSection.astro
│   ├── layouts/                # Page layouts
│   │   └── Layout.astro
│   ├── pages/                  # File-based routing
│   │   └── index.astro
│   └── styles/
│       ├── global.css          # Main entry, imports all modules
│       ├── colors.css          # CSS custom properties & color utilities
│       ├── typography.css      # Font styles, headings, text
│       ├── base.css            # Reset & base element styles
│       ├── buttons.css         # Button & link components
│       ├── video.css           # Video background & overlay
│       ├── animations.css      # Keyframes & scroll animations
│       ├── utilities.css       # Container, section classes
│       └── responsive.css      # Media queries & breakpoints
├── public/             # Static assets
│   └── fonts/
└── astro.config.mjs    # Astro configuration

```

## 🎨 Design System

- **Font**: Inter (Google Fonts)
- **Primary Dark**: #1A1C23
- **Background Light**: #F4F4F4
- **White**: #FFFFFF
- **Black**: #0F0F0F

## 📝 Content Management

Content is managed via Markdown/MDX files in `src/content/`.

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Brand Guidelines](./brand_guidelines.md)

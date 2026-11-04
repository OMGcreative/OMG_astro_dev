# WordPress to Astro Website Migration Project

## Project Overview

Recreate an existing WordPress website as a modern, performant static site using Astro.js. The new site should be a pixel-perfect reproduction of the original WordPress site (omgcreative.com.au) while leveraging modern web technologies for improved performance, maintainability, and developer experience.

## Core Technologies

### Framework & Build

- **Astro.js** - Primary framework for static site generation
- **TypeScript** - Type-safe development throughout the project
- **Markdown/MDX** - Content authoring and management

### Styling & Interactivity

- **Custom CSS** - Replicate existing WordPress site styles using custom CSS (no frameworks)
- **Interactive Components** - Use appropriate frameworks (React, Preact, Vue, Svelte, etc.) via Astro Islands when beneficial for complex UI interactions
- **Vanilla JavaScript** - For simple interactions where framework overhead isn't justified

### Media & Assets

- **Vimeo** - Video hosting and embedding
- **Optimized images** - Use Astro's built-in image optimization

### Version Control & Hosting

- **GitHub** - Repository management and version control
- **GitHub Pages** or **Netlify/Vercel** - Static site hosting via GitHub integration

## Project Requirements

Start with the front page and then we'll move on to the project pages.

### 1. Content Migration

- Extract all necessary content from the existing WordPress site
- Convert pages, posts, and custom post types to Markdown/MDX files
- Maintain original URL structure and permalinks for SEO preservation
- Preserve metadata (titles, descriptions, dates, authors, categories, tags)
- Organize content in a logical directory structure (`src/content/` or similar)

### 2. Design Fidelity

- Perform a complete visual audit of the WordPress site across all page types
- Recreate layouts with pixel-perfect accuracy using Astro components
- Extract and replicate all relevant CSS styles from the WordPress theme
- Ensure responsive behavior matches the original site across breakpoints, improve mobile experience where possible.
- Maintain consistent spacing, typography, and color schemes

### 3. Component Architecture

- Build reusable Astro components for common elements (header, footer, navigation, cards, etc.)
- Create page templates that mirror WordPress template hierarchy
- Implement layout components for consistent page structure
- Use TypeScript interfaces for component props and data structures

### 4. Functionality Replication

- Identify all interactive features from the WordPress site
- Recreate navigation menus with active states and mobile responsiveness
- Implement forms (contact, newsletter, etc.) with appropriate handling
- Add search functionality if present on original site
- Recreate any custom WordPress plugins or features using the most appropriate technology:
  - Use vanilla JS for simple interactions (toggles, basic animations)
  - Use React/Preact/Vue/Svelte components for complex stateful UI via Astro Islands
  - Evaluate framework choice based on bundle size, developer experience, and feature requirements
- Build custom video player controls with Intersection Observer:
  - Auto-play/pause based on viewport visibility (20% threshold)
  - Default muted and looping behavior
  - Smooth transitions for play/pause states

### 5. Media Handling

- Migrate all necessary images from WordPress media library
- Implement Vimeo video playback using direct download or playback URLs (not iframe embeds)
- Use HTML5 `<video>` elements with Vimeo source URLs
- Configure all videos to loop by default (`loop` attribute)
- Mute all videos by default (`muted` attribute)
- Implement Intersection Observer API to control video playback:
  - Videos only play when at least 20% visible in viewport
  - Videos pause when less than 20% visible
- Use Astro's image optimization for performance
- Ensure proper lazy loading and responsive images
- Maintain aspect ratios and quality standards

### 6. Performance Optimization

- Leverage Astro's static generation for maximum performance
- Use Astro Islands architecture to minimize JavaScript where possible
- Choose appropriate UI frameworks based on bundle size and functionality needs:
  - Preact for React-like DX with smaller bundle
  - Solid.js for fine-grained reactivity with minimal overhead
  - Vanilla JS for simple interactions
- Optimize CSS delivery and eliminate unused styles
- Implement proper caching headers
- Achieve 90+ scores on Lighthouse metrics
- Ensure interactive components hydrate only when necessary (client:load, client:visible, client:idle)

### 7. SEO & Metadata

- Replicate all meta tags, Open Graph, and schema markup
- Generate sitemap.xml automatically
- Create robots.txt file
- Implement canonical URLs
- Maintain existing redirects if any

### 8. Development Workflow

- Initialize GitHub repository with proper .gitignore
- Set up local development environment with hot reload
- Create clear README with setup instructions
- Implement GitHub Actions for automated deployment
- Use semantic commit messages and branching strategy

## Deliverables

1. **Fully functional Astro.js website** matching the WordPress original
2. **GitHub repository** with complete source code and version history
3. **Documentation** including:
   - Setup and installation instructions
   - Content management guide
   - Deployment process
   - Component documentation
4. **Deployed website** on chosen hosting platform
5. **Performance report** comparing new site to WordPress original

## Success Criteria

- Visual parity with original WordPress site (98%+ match)
- Page load time under 2 seconds on 3G connection
- Lighthouse scores: 90+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- Zero broken links or missing assets
- Fully responsive across all device sizes
- Working video embeds via Vimeo
- Successful deployment pipeline via GitHub

## Technical Constraints

- No CSS frameworks (Tailwind, Bootstrap, etc.) - use custom CSS only
- Use appropriate UI frameworks (React, Preact, Vue, Svelte, Solid, etc.) when they provide better solutions for complex interactivity
- Prioritize minimal JavaScript bundles - use Astro Islands and selective hydration
- No WordPress plugins - recreate functionality natively
- Evaluate dependencies carefully - prefer lighter alternatives when functionality is equivalent
- Maintain semantic HTML structure
- Ensure WCAG 2.1 AA accessibility compliance

## Development Phases

1. **Analysis** - Audit WordPress site, document features and content structure
2. **Setup** - Initialize Astro project, configure TypeScript, set up GitHub
3. **Theming** - Extract and recreate CSS, build base layout components
4. **Content Migration** - Convert content to MDX, organize file structure
5. **Component Development** - Build all necessary Astro components
6. **Functionality** - Implement interactive features with vanilla JS
7. **Testing** - Cross-browser testing, responsive testing, performance optimization
8. **Deployment** - Configure hosting, set up CI/CD, launch site
9. **Documentation** - Complete README and maintenance guides

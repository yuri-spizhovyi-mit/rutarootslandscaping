# Implementation Tracker

This is the working document for the Ruta Roots multi-page site build.
Read this first at the start of every session. Update it after every session.

---

## Entry Points

| Document | Purpose |
|---|---|
| [PLAN.md](PLAN.md) | Project goal, tech stack, pages, global rules, SEO targets, CTA standards |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Color palette, typography, spacing, component patterns, responsive breakpoints |
| [docs/pages/home.md](docs/pages/home.md) | Home page spec |
| [docs/pages/services.md](docs/pages/services.md) | Services page spec |
| [docs/pages/about.md](docs/pages/about.md) | About page spec |
| [docs/pages/projects.md](docs/pages/projects.md) | Projects page spec |
| [docs/pages/contact.md](docs/pages/contact.md) | Contact page spec |
| [docs/pages/thank-you.md](docs/pages/thank-you.md) | Thank You page spec |

---

## Build Order

| Step | Task | Status |
|---|---|---|
| 1 | Routing setup — `src/App.jsx` | `done` |
| 2 | Home page rebuild | `done` |
| 3 | Contact page | `done` |
| 4 | Thank You page | `done` |
| 5 | Services page | `pending` |
| 6 | About page | `pending` |
| 7 | Projects page | `pending` |

---

## Component Status

### Shared / Reusable (`src/ui/`)

| Component | File | Shared By | Status |
|---|---|---|---|
| PageHero | `src/ui/PageHero/PageHero.jsx` | Services, About, Projects, Contact | `pending` |
| QuoteForm | `src/ui/QuoteForm/QuoteForm.jsx` | Home (BottomCTAForm), Contact | `done` |
| BottomCTA | `src/ui/BottomCTA/BottomCTA.jsx` | About, Projects | `pending` |
| BottomCTAForm | `src/ui/BottomCTAForm/BottomCTAForm.jsx` | Home, Services | `done` |
| ServiceBlock | `src/ui/ServiceBlock/ServiceBlock.jsx` | Services (data-driven) | `pending` |
| ProjectCard | `src/ui/ProjectCard/ProjectCard.jsx` | Projects (data-driven) | `pending` |

### Home (`src/sections/`)

| Component | File | Status |
|---|---|---|
| HeroSection | `src/sections/Hero/Hero.jsx` | `done` |
| TrustStrip | `src/sections/TrustStrip/TrustStrip.jsx` | `done` |
| ServicesPreview | `src/sections/ServicesPreview/ServicesPreview.jsx` | `done` |
| FeaturedProject | `src/sections/FeaturedProject/FeaturedProject.jsx` | `done` |
| WhyRutaRoots | `src/sections/WhyRutaRoots/WhyRutaRoots.jsx` | `done` |
| ReviewsSection | `src/sections/Reviews/Reviews.jsx` | `done` |

### Services (`src/sections/`)

| Component | File | Status |
|---|---|---|
| ServicesHero | via `src/ui/PageHero/PageHero.jsx` | `pending` |
| ServicesList | `src/sections/ServicesList/ServicesList.jsx` | `pending` |

### Contact (`src/sections/`)

| Component | File | Status |
|---|---|---|
| ContactPageHero | `src/sections/Contact/ContactPageHero.jsx` | `done` |
| ContactLayout | `src/sections/Contact/ContactLayout.jsx` | `done` |
| ContactTrustColumn | `src/sections/Contact/ContactTrustColumn.jsx` | `done` |

### Thank You (`src/sections/ThankYou/`)

| Component | File | Status |
|---|---|---|
| ThankYouConfirmation | `src/sections/ThankYou/ThankYouConfirmation.jsx` | `done` |
| NextSteps | `src/sections/ThankYou/NextSteps.jsx` | `done` |
| PostSubmitEngagement | `src/sections/ThankYou/PostSubmitEngagement.jsx` | `done` |
| ReviewRequest | `src/sections/ThankYou/ReviewRequest.jsx` | `done` |

### About (`src/sections/`)

| Component | File | Status |
|---|---|---|
| FounderStory | `src/sections/FounderStory/FounderStory.jsx` | `pending` |
| CredibilityStats | `src/sections/CredibilityStats/CredibilityStats.jsx` | `pending` |
| Differentiators | `src/sections/Differentiators/Differentiators.jsx` | `pending` |
| WhatWeAreNot | `src/sections/WhatWeAreNot/WhatWeAreNot.jsx` | `pending` |
| Credentials | `src/sections/Credentials/Credentials.jsx` | `pending` |

### Projects (`src/sections/`)

| Component | File | Status |
|---|---|---|
| FeaturedProjectShowcase | `src/sections/FeaturedProjectShowcase/FeaturedProjectShowcase.jsx` | `pending` |
| ProjectFilterBar | `src/sections/ProjectFilterBar/ProjectFilterBar.jsx` | `pending` |
| ProjectGrid | `src/sections/ProjectGrid/ProjectGrid.jsx` | `pending` |

### Global / Layout

| Component | File | Status |
|---|---|---|
| StickyNav | `src/sections/Header/Header.jsx` | `done` |
| Footer | `src/sections/Footer/Footer.jsx` | `done` |

---

## Pages

| Page | File | Route | Status |
|---|---|---|---|
| Home | `src/pages/Home/Home.jsx` | `/` | `done` |
| Services | `src/pages/Services/Services.jsx` | `/services` | `pending` |
| About | `src/pages/About/About.jsx` | `/about` | `pending` |
| Projects | `src/pages/Projects/Projects.jsx` | `/projects` | `pending` |
| Contact | `src/pages/Contact/Contact.jsx` | `/contact` | `done` |
| Thank You | `src/pages/ThankYou/ThankYou.jsx` | `/thank-you` | `done` |

---

## Packages to Install

| Package | Purpose | Status |
|---|---|---|
| `react-hook-form` | Form validation (QuoteForm) | `done` |
| `react-helmet-async` | Per-page SEO meta tags | `done` |
| `@emailjs/browser` | Contact form email delivery | `done` |

> React Router v6 is already installed. Swiper and Lenis are already installed per SKILL.md context.

---

## Key Conventions (Quick Reference)

| Convention | Rule |
|---|---|
| Images | `public/images/sections/<section-name>/<breakpoint>/filename.webp` — never `src/assets/` |
| Styling | CSS Modules only — `ComponentName.module.css` co-located with `ComponentName.jsx` |
| Components | `src/ui/` for reusable cross-page, `src/sections/` for page sections, `src/pages/` for route containers |
| Data | `src/data/` — e.g. `projects.js`, `services.js` |
| Routing | Lazy loading + Suspense per route (already scaffolded in `App.jsx`) |
| Phone | `(250) 899-4954` / `tel:+12508994954` |
| Email | `rutarootslandscaping@gmail.com` |
| Facebook | `https://www.facebook.com/profile.php?id=61566799927246` |
| Colors | `--color-green: #2b8a3e`, `--color-light-green: #968b39`, `--color-dark-grey: #333` |
| Font | `"Lato"`, base `62.5%` rem scale |

---

## Visual Effects & Animation Library

These patterns are implemented on the Home page and should be reused consistently across all other pages for visual cohesion.

### 1. Gradient Text on Section Headings

**Pattern:** Applied to `.heading-secondary` globally in `src/general.css`

```css
.heading-secondary {
  background: linear-gradient(135deg, #2b8a3e 0%, #1a5c28 45%, #968b39 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Usage:** All section headings (h2 with `className="heading-secondary"`) automatically get the gradient.  
**Applied to:** ServicesPreview, FeaturedProject, WhyRutaRoots, ReviewsSection headings

---

### 2. Cursor-Reactive Shadows (Dynamic Glow Following Cursor)

**Hook:** `src/hooks/useCursorGlow.js`

**How to use:**
```jsx
import { useRef } from 'react';
import { useCursorGlow } from '../../hooks/useCursorGlow';

function MyComponent() {
  const containerRef = useRef(null);
  useCursorGlow(containerRef, `.${styles.card}`);  // selector for cards/blocks
  
  return (
    <div ref={containerRef}>
      <div className={styles.card}>...</div>
    </div>
  );
}
```

**CSS Setup:** Add CSS custom properties to your card/block styles:
```css
.card {
  box-shadow: var(--shadow-x, 0px) var(--shadow-y, 0px) 30px rgba(43, 138, 62, 0.1);
}
.card:hover {
  box-shadow: var(--shadow-x, 0px) var(--shadow-y, 0px) 50px rgba(43, 138, 62, 0.3), 0 12px 30px rgba(0,0,0,0.08);
}
```

**Performance:** Uses `requestAnimationFrame` for 60fps smooth tracking. One listener per container (efficient).  
**Applied to:** ServicesPreview cards, WhyRutaRoots blocks, NextSteps steps, PostSubmitEngagement cards

---

### 3. Scroll-Triggered Fade-In & Slide-Up Animations

**Hook:** `src/hooks/useScrollReveal.js`

**How to use (for headings):**
```jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

function MySection() {
  const headingRef = useScrollReveal({ duration: 0.8, distance: 40, delay: 0 });
  
  return <h2 className="heading-secondary" ref={headingRef}>My Title</h2>;
}
```

**How to use (for card groups):**
```jsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function MyComponent() {
  const cardsRef = useRef(null);
  const animatedRef = useRef(false);  // prevents double-fire in React StrictMode
  
  useEffect(() => {
    if (!cardsRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        const cards = cardsRef.current.querySelectorAll(`.${styles.card}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2, stagger: 0.15, ease: 'power2.out', clearProps: 'transform' }
        );
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);
  
  return <div ref={cardsRef}>...</div>;
}
```

**Pattern:** Opacity 0 → 1 + Slide up 40px with staggered timing. Fires once per element (observed only).  
**Stagger values:** 0.12s for tight grids (2×2), 0.15s for loose grids (3-column)

---

### 4. Parallax Scrolling (Hero Background)

**Hook:** `src/hooks/useParallax.js`

**How to use:**
```jsx
import { useParallax } from '../../hooks/useParallax';

function HeroSection() {
  const bgRef = useParallax(0.5);  // 0.5x speed (half the scroll speed)
  
  return (
    <div className={styles.heroBg} ref={bgRef}>
      <img src="..." />
    </div>
  );
}
```

**Applied to:** Hero section background image

---

### 5. Green Glow Text Shadow

**Pattern:** Applied to prominent headings (like hero h1)

```css
.heading {
  text-shadow: 0 0 60px rgba(43, 138, 62, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

**Applied to:** Hero heading (`.heroHeading`)

---

### 6. Gradient Borders (Card Hover)

**Pattern:** Use `background-clip: border-box` + `border-box` technique

```css
.card {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #2b8a3e 0%, #968b39 100%) border-box;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
```

**Applied to:** ServicesPreview cards, WhyRutaRoots blocks

---

### 7. Glassmorphic Effect (Frosted Glass Buttons)

**Pattern:** Use `backdrop-filter: blur()` with semi-transparent background

```css
.button {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Applied to:** Secondary CTA buttons (e.g., hero "Learn more" link)

---

## Implementation Checklist for New Pages

When building Services, About, Projects, Contact pages:

- [ ] Add `.heading-secondary` gradient text automatically (no extra work needed)
- [ ] Use `useCursorGlow` on card/block containers for dynamic shadows
- [ ] Use `useScrollReveal` on headings + card groups for entrance animations
- [ ] Use parallax on hero/large image sections for depth
- [ ] Apply gradient borders to interactive card elements
- [ ] Use green glow text-shadow on prominent display text
- [ ] Glassmorphic styling on secondary CTAs or overlay buttons
- [ ] Stagger animations consistently: 0.12s (tight grids), 0.15s (loose grids)
- [ ] All animations use cubic-bezier(0.34, 1.56, 0.64, 1) for premium feel

---

## Image Inventory

**All images stored in:** `public/images/sections/<section-name>/`

### Directory Structure

```
public/images/sections/
├── hero/
│   ├── desktop/               (hero-home.webp — 1920×1080)
│   └── mobile/                (hero-home.webp — 480×720)
├── services/
│   ├── desktop/               (lawn-care.webp, landscape-design.webp, hardscaping.webp, seasonal-cleanup.webp, irrigation.webp — 400×300 each)
│   └── mobile/                (same 5 images — 300×200 each)
├── home/
│   ├── desktop/               (local-authority-bg.webp — 1920×800)
│   └── mobile/                (local-authority-bg.webp — 480×600)
├── about/
│   ├── founder/               (founder-portrait.webp — 400×500, portrait)
│   └── credentials/           (bc-licence-logo.webp, wcb-clearance-logo.webp, landscape-bc-logo.webp)
└── projects/
    ├── featured/              (featured-01.webp through featured-04.webp — 1920×1200 each, 3-5 photos per project)
    └── cards/                 (project-01-before.webp, project-01-after.webp, ... project-08-after.webp — 16:9, ~600×337, <200KB each)
```

### Image Summary

| Section | Image Name | Breakpoints | Count | Specs |
|---|---|---|---|---|
| Hero | `hero-home.webp` | desktop + mobile | 2 | Desktop 1920×1080 (16:9), Mobile 480×720 (9:16) |
| Services | `lawn-care.webp`, `landscape-design.webp`, `hardscaping.webp`, `seasonal-cleanup.webp`, `irrigation.webp` | desktop + mobile | 10 | Desktop 400×300, Mobile 300×200 |
| Home (local authority) | `local-authority-bg.webp` | desktop + mobile | 2 | Desktop 1920×800, Mobile 480×600 |
| About (founder) | `founder-portrait.webp` | — | 1 | 400×500, portrait orientation, natural setting |
| About (credentials) | `bc-licence-logo.webp`, `wcb-clearance-logo.webp`, `landscape-bc-logo.webp` | — | 3 | Greyscale logos |
| Projects (featured) | `featured-01.webp` through `featured-04.webp` | — | ~4 | 1920×1200 each, 3-5 angles per featured project |
| Projects (cards) | `project-01-before.webp`, `project-01-after.webp`, ..., `project-08-after.webp` | — | 16 | 16:9 landscape (~600×337), <200KB each |

**Total:** ~40–50 images (depending on featured project count)  
**Format:** WebP, compressed

---

## Open Issues

_None yet._

---

## Session Log

### 2026-05-09 — Thank You page visual quality overhaul (Step 4)

- **ThankYouConfirmation:** Wrapped content in gradient-border card; added radial glow pulse behind checkmark (`glowPulse` keyframe + `drop-shadow` filter); added green `text-shadow` on heading; section stays white with card as the visual container
- **NextSteps:** Full gradient border card pattern (matching ServicesPreview/WhyRutaRoots); added `useCursorGlow` for cursor-reactive shadows; `::before` hover overlay + `::after` top-bar slide-in; icon wrapper replaced from flat `#e8f0ed` to gradient; hover is now `translateY(-8px) scale(1.02)` with full glow shadow; step number glows, title turns green, description lightens on hover
- **PostSubmitEngagement:** Same gradient border + cursor glow treatment; card links upgraded with sliding underline matching ServicesPreview pattern
- **ReviewRequest:** Content wrapped in gradient-border card; CTA upgraded from outlined link to solid green gradient button with lift hover effect
- **Bug fix:** Both NextSteps and PostSubmitEngagement showed empty card areas — React StrictMode double-invokes effects, causing two `IntersectionObserver` instances to fire and `gsap.from()` to reset cards to `opacity: 0` mid-animation. Fixed with `animatedRef = useRef(false)` guard + `gsap.fromTo()` with explicit end values + `clearProps: 'transform'`
- **Packages confirmed installed:** `react-hook-form`, `react-helmet-async`, `@emailjs/browser` — all in `package.json`
- **Status:** Thank You page fully rebuilt to match Home page visual quality — ready for Services page (Step 5)

### 2026-04-26 — Contact page implementation (Step 3)

- **Stripped header variant:** `/contact` route now shows logo + phone only, no nav links or CTA button (conversion optimization pattern)
- **QuoteForm component:** Built with `react-hook-form` v7, `onBlur` validation mode, URL param pre-selection via `useSearchParams()`
  - 5 fields: name, phone, email, service (dropdown), optional bestTime
  - Phone regex validation: `^\+?1?\s*\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$`
  - Email regex validation: `/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i`
  - Honeypot field "website" (hidden) prevents spam submissions
  - Inline error messages in terracotta color on field blur
  - Submit button shows "Sending..." while disabled during submission
  - On success: redirects to `/thank-you`
- **ContactTrustColumn:** Phone block (large, tap-to-call), service area list, gradient divider separator
  - Phone number is green with terracotta hover effect
  - Responsive sizing with clamp() for mobile adaptation
- **ContactLayout:** 60/40 CSS Grid (form left, trust right), reverses to stacked mobile (trust first)
  - Uses `useScrollReveal` on section heading for entrance animation
  - Gap: 6.4rem desktop, responsive reduction on tablet/mobile
- **ContactPageHero:** H1 with GSAP entry animation, sub-heading, breadcrumb navigation
  - Uses `useGsapAnimation` + `createTitleInAnimation` pattern from Home page
  - Light background (#fafafa) with no parallax
- **Styling reused from Home page:** Green (#2b8a3e) primary buttons, terracotta (#C85A17) for errors/accents
- **URL param feature:** `/contact?service=lawn-care` pre-selects the service dropdown to "Lawn care & maintenance"
- **Mobile optimized:** 2-column grid → 1 column, trust column stacks ABOVE form, all inputs ≥44px height
- **Status:** Contact page complete — dev server running, ready for Services page (Step 5)
- **Build order tracking:** Updated in IMPLEMENTATION.md — Contact marked as done, next is Services page

### 2026-04-26 — Navigation styling with brand colors (active green, hover terracotta)

- Updated Navigation component to detect active page using `useLocation()` hook
- Applied green color (`--color-green: #2b8a3e`) to active navigation link with bold font weight
- Applied terracotta hover effect (`--color-terracotta: #C85A17`) to inactive navigation links
- Added smooth 0.3s color transition on all navigation links
- **Pattern:** Active page stands out in green, hovering over other pages reveals terracotta accent
- All colors use CSS variables for consistency with brand palette
- Navigation now uses brand color system consistently: green for active, terracotta for interactive hover states
- **Status:** Navigation styling complete — ready for next feature work

### 2026-04-26 — Reviews carousel refinements & looping carousel fix

- Fixed Reviews carousel to properly center active card with semi-visible adjacent cards
  - Issue 1: Active card was on the left instead of center (nth-child selector limitation)
  - Fix: Added `data-active` attribute to dynamically mark the active card regardless of DOM position
  - Issue 2: Carousel didn't loop properly at Review 1 (single card visible)
  - Fix: Restructured carousel with pre-shifted card order [4,0,1,2,3] repeated to enable smooth looping
  - Issue 3: Transition from Review 1→2 was jumping instead of smooth
  - Fix: Simplified transform calculation and aligned card rendering order with shift logic
- Result: Reviews carousel now shows 3 cards at all times, active card centered, smooth transitions 1→2→3→4→5→1
- All 6 Home page sections remain fully functional
- **Status:** Home page build complete (step 2 done) — ready for Services page (step 3)

### 2026-04-20 — Enhanced hero with parallax + glow + animations

- Implemented parallax scrolling hook (`useParallax`) for background image depth effect
- Created animated scroll chevron component with bounce animation
- Enhanced hero heading with green glow text-shadow and premium styling
- Upgraded primary CTA button: gradient + glow + lift effect + shine sweep animation
- Upgraded secondary CTA button: glassmorphic effect with backdrop blur + border glow
- Added smooth cubic-bezier transitions for premium feel
- Improved visual hierarchy with better overlay gradient
- All animations use CSS transforms (performant, GPU-accelerated)
- Refined typography with enhanced text shadows for readability
- **Result:** Hero now has impressive, modern visual polish with smooth micro-interactions

### 2026-04-19 — Home page rebuild & visual quality refinements

- Built 6 new sections from spec: TrustStrip, ServicesPreview, FeaturedProject, WhyRutaRoots, ReviewsSection, BottomCTAForm
- Updated Hero component with new headline, sub-headline, and dual CTAs (primary button + secondary link)
- Updated Header (StickyNav) with phone number tap-to-call and "Get in touch" CTA button
- Updated Navigation to use React Router routes instead of react-scroll
- Updated Footer with full multi-column layout: logo, tagline, nav links, service area, contact info, social links
- Composed all sections in Home.jsx page
- All components follow DESIGN_SYSTEM.md patterns: colors, typography, spacing, responsive breakpoints
- Form includes honeypot spam prevention, redirects to /thank-you on submit
- **Next:** Services page implementation

### 2026-04-19 — Routing setup & lazy-loaded pages

- Refactored `src/App.jsx` with React Router v6 full implementation
- Set up 6 main routes (/, /services, /about, /projects, /contact, /thank-you) with lazy loading + Suspense
- Created placeholder page components: Services, About, Projects, Contact, ThankYou
- PageLoader fallback on route transitions, PageTitleListener wrapper for SEO
- All routes now ready for page implementation
- **Next:** Step 2 — Home page rebuild

### 2026-04-19 — GSAP animations & memory setup

- Saved user preferences to memory: flex container patterns, clean code standards (Uncle Bob), GSAP animations requirement
- Created `src/hooks/useGsapAnimation.jsx` — Reusable hook for GSAP animation triggers
- Created `src/utils/animations/titleAnimations.js` — Title entrance animations (fade-in + slide-up, staggered)
- Updated `src/sections/Hero/Hero.jsx` — Applied staggered title animation to hero heading spans
- **Next:** Routing setup in `src/App.jsx`

### 2026-04-12 — Project setup & docs normalization
- Created `.claude/skills/swe/SKILL.md` — project-scoped Senior Dev persona
- Added `.claude/` to `.gitignore`
- Created `docs/.markdownlint.json` — suppresses MD032/MD036/MD060 in all plan docs
- Normalized component file paths in all 6 page docs: replaced `src/components/` with `src/sections/`, `src/ui/`, `src/pages/` conventions
- Updated phone, email, Facebook URL across all docs
- Created `IMPLEMENTATION.md` (this file) and updated `SKILL.md` to reference it
- **Next:** Step 1 — routing setup in `src/App.jsx`

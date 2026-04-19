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
| 1 | Routing setup — `src/App.jsx` | `pending` |
| 2 | Home page rebuild | `pending` |
| 3 | Contact page | `pending` |
| 4 | Thank You page | `pending` |
| 5 | Services page | `pending` |
| 6 | About page | `pending` |
| 7 | Projects page | `pending` |

---

## Component Status

### Shared / Reusable (`src/ui/`)

| Component | File | Shared By | Status |
|---|---|---|---|
| PageHero | `src/ui/PageHero/PageHero.jsx` | Services, About, Projects, Contact | `pending` |
| QuoteForm | `src/ui/QuoteForm/QuoteForm.jsx` | Home (BottomCTAForm), Contact | `pending` |
| BottomCTA | `src/ui/BottomCTA/BottomCTA.jsx` | About, Projects | `pending` |
| BottomCTAForm | `src/ui/BottomCTAForm/BottomCTAForm.jsx` | Home, Services | `pending` |
| ServiceBlock | `src/ui/ServiceBlock/ServiceBlock.jsx` | Services (data-driven) | `pending` |
| ProjectCard | `src/ui/ProjectCard/ProjectCard.jsx` | Projects (data-driven) | `pending` |

### Home (`src/sections/`)

| Component | File | Status |
|---|---|---|
| HeroSection | `src/sections/Hero/Hero.jsx` | `exists — review before rebuild` |
| ServicesOverview | `src/sections/ServicesOverview/ServicesOverview.jsx` | `pending` |
| SocialProof | `src/sections/SocialProof/SocialProof.jsx` | `pending` |
| ReviewsSection | `src/sections/Reviews/Reviews.jsx` | `pending` |
| LocalAuthority | `src/sections/LocalAuthority/LocalAuthority.jsx` | `pending` |

### Services (`src/sections/`)

| Component | File | Status |
|---|---|---|
| ServicesHero | via `src/ui/PageHero/PageHero.jsx` | `pending` |
| ServicesList | `src/sections/ServicesList/ServicesList.jsx` | `pending` |

### Contact (`src/sections/`)

| Component | File | Status |
|---|---|---|
| ContactLayout | `src/sections/Contact/ContactLayout.jsx` | `pending` |
| ContactTrustColumn | `src/sections/Contact/ContactTrustColumn.jsx` | `pending` |

### Thank You (`src/sections/ThankYou/`)

| Component | File | Status |
|---|---|---|
| ThankYouConfirmation | `src/sections/ThankYou/ThankYouConfirmation.jsx` | `pending` |
| NextSteps | `src/sections/ThankYou/NextSteps.jsx` | `pending` |
| PostSubmitEngagement | `src/sections/ThankYou/PostSubmitEngagement.jsx` | `pending` |
| ReviewRequest | `src/sections/ThankYou/ReviewRequest.jsx` | `pending` |

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
| StickyNav | `src/sections/Nav/Nav.jsx` (or similar — verify path) | `exists — needs multi-page update` |
| Footer | `src/sections/Footer/Footer.jsx` (verify path) | `exists — likely reusable as-is` |

---

## Pages

| Page | File | Route | Status |
|---|---|---|---|
| Home | `src/pages/Home/Home.jsx` | `/` | `pending` |
| Services | `src/pages/Services/Services.jsx` | `/services` | `pending` |
| About | `src/pages/About/About.jsx` | `/about` | `pending` |
| Projects | `src/pages/Projects/Projects.jsx` | `/projects` | `pending` |
| Contact | `src/pages/Contact/Contact.jsx` | `/contact` | `pending` |
| Thank You | `src/pages/ThankYou/ThankYou.jsx` | `/thank-you` | `pending` |

---

## Packages to Install

| Package | Purpose | Status |
|---|---|---|
| `react-hook-form` | Form validation (QuoteForm) | `pending` |
| `react-helmet-async` | Per-page SEO meta tags | `pending` |
| `@emailjs/browser` | Contact form email delivery | `pending` |

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

### 2026-04-12 — Project setup & docs normalization
- Created `.claude/skills/swe/SKILL.md` — project-scoped Senior Dev persona
- Added `.claude/` to `.gitignore`
- Created `docs/.markdownlint.json` — suppresses MD032/MD036/MD060 in all plan docs
- Normalized component file paths in all 6 page docs: replaced `src/components/` with `src/sections/`, `src/ui/`, `src/pages/` conventions
- Updated phone, email, Facebook URL across all docs
- Created `IMPLEMENTATION.md` (this file) and updated `SKILL.md` to reference it
- **Next:** Step 1 — routing setup in `src/App.jsx`

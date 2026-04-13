# Projects / Gallery Page

## Page Purpose

The Projects page is the most underbuilt page on most landscaping sites and the most important for converting warm leads into inquiries. People need to see real, completed work before they call — not a list of services, not a paragraph about quality, but actual photographic evidence of what the finished result looks like. This page functions as a visual portfolio with context: every project card includes a before/after photo pair, project type, location, and a 2-sentence outcome description. Context converts; photos alone do not. The page should not launch until a minimum of 8 project cards are available across at least 3 service categories.

---

## Route

`/projects`

---

## SEO

**Page title:** `Landscaping Projects in West Kelowna & Kelowna | Ruta Roots`

**Meta description:** `Real landscaping projects completed in West Kelowna and Kelowna. Before & after photos — lawn care, landscape design, hardscaping, and seasonal cleanup. See our work.`

---

## Sections (in scroll order)

---

### Page Hero

**Component:** `PageHero`

**Purpose:** Minimal header that sets honest expectations — real work, real locations, real results.

**H1:** `Our work in West Kelowna & Kelowna`

**Sub-heading:** `Real projects, real results. Every photo is from a job we completed in the Okanagan.`

**Breadcrumb:** `Home → Projects`

**Design notes:**
- No full-bleed hero image — the grid below is the visual. Do not compete with it.
- Heading is deliberately plain — the photos carry the page

---

### Section 1 — Featured Project (Full-Width Showcase)

**Component:** `FeaturedProjectShowcase`

**Purpose:** One project gets an expanded treatment above the filter/grid — full-width, multiple photos (3–5), longer description, and the most visually dramatic transformation available. This sets the quality bar before the visitor sees any other card. It also serves as the destination for the "See our work" link on the homepage.

**Featured project content structure:**
- Project title: e.g. `Backyard transformation — West Kelowna`
- Tags: project type + location + year
- Photo gallery: 3–5 photos (before, during installation if available, multiple after angles)
- Description (4–6 sentences): what the problem was, what Ruta Roots proposed, what was installed, how long it took, and the outcome for the homeowner
- Optional: client quote (first name + last initial only, with permission)

**Selection criteria:**
- Most visually dramatic before/after available
- Large enough scope to demonstrate full capability (design/install or hardscaping preferred)
- Strong photographic documentation — multiple angles, clear before and after

---

### Section 2 — Filter Bar

**Component:** `ProjectFilterBar`

**Purpose:** JavaScript show/hide filtering by project type. Visitors arriving via a specific service search (e.g. "hardscaping West Kelowna") should be able to filter to relevant projects in one click without scrolling past unrelated work.

**Filter options:**
- `All` (default, selected on load)
- `Lawn care`
- `Landscape design`
- `Hardscaping`
- `Seasonal cleanup`
- `Irrigation`

**Behaviour:**
- Client-side JS filtering — no page reload
- Filter pills show/hide project cards by matching the `data-category` attribute
- Active pill has distinct visual state (filled background vs outlined)
- Card count visible after filter label: e.g. `Hardscaping (4)`
- Smooth transition on show/hide (CSS opacity + height transition, not jump)

---

### Section 3 — Project Grid

**Component:** `ProjectGrid`

**Purpose:** 2-column grid on desktop, 1-column on mobile. Every card follows an identical internal structure — consistency signals professionalism; variation signals carelessness.

**Grid layout:**
- Desktop: 2 columns with 24px gap
- Mobile: 1 column
- Cards are equal height within each row

---

#### Project Card Structure

**Component:** `ProjectCard`

**Every card contains exactly these elements in this order:**

**1. Before/after photo display**
- Desktop: side-by-side (before left, after right) within a fixed-height image container
- Mobile: swipe carousel (before and after as separate slides)
- Both photos must be the same crop dimensions
- "Before" label overlaid bottom-left of before photo
- "After" label overlaid bottom-left of after photo
- Labels in small pill format — not large text overlays

**2. Tag row (3 tags):**
- Project type tag (e.g. `Hardscaping`)
- Location tag (e.g. `West Kelowna`)
- Year tag (e.g. `2024`)

**3. Project title**
- Short and descriptive — not clever
- Examples: `Retaining wall & backyard patio`, `Full lawn renovation`, `Front yard redesign with drought-tolerant planting`
- Do not use: `Outdoor transformation`, `Beautiful new space`, `Custom landscape solution`

**4. Outcome description (2 sentences)**
- Sentence 1: State the problem or starting condition
- Sentence 2: State what was done and the result, including a timeframe
- Format: `[Problem]. [Solution + result + timeframe].`
- Example: `Sloped backyard with clay soil and erosion damage had no usable space. We installed a dry-stack retaining wall, graded the lawn, and added a planted border — completed in four days.`

**5. Micro-CTA (optional — text link only)**
- `Want results like this? Get a quote →` → `/contact`
- Display on hover (desktop) or always visible (mobile)

---

### Photography Rules (Enforced for Every Card)

**Component note:** These are content requirements, not component requirements. Must be communicated to whoever is supplying project photos.

**Rule 1 — Same angle for before and after**
Stand in the exact same spot, same zoom level, same camera height. A before shot from one side and an after from another makes the transformation invisible and looks lazy. This is the most common photography mistake on landscaping sites.

**Rule 2 — Consistent lighting conditions**
Before photos in grey overcast + after photos in golden hour light is dishonest and visitors notice. Aim for consistent midday or late afternoon lighting for both shots wherever possible.

**Rule 3 — Clean the site before the after photo**
Remove all tools, hoses, wheelbarrows, vehicles, and debris. A finished patio with a coiled hose in the corner looks unfinished. Allow 10 minutes of staging before the after shot.

**Rule 4 — Landscape orientation, consistent crop**
Portrait photos in a horizontal card layout force awkward crops. Shoot wide. 16:9 crop ratio is the safest for web display.

**Rule 5 — No equipment in the after shot**
After shots show the finished state — no crew, no tools, no vehicles. The before shot can show the crew arriving or the existing state of the yard.

---

### Minimum Project Count Before Launch

Do not publish this page to the main navigation until the following minimums are met:

- At least 8 project cards total
- At least 2 cards in each of: lawn care, landscape design, and one other category
- At least 1 large-scale project (full design/install or significant hardscaping)
- At least 1 project from 2023 or earlier (demonstrates longevity, not just recent work)
- Every card has a before photo — no cards with after-only

A thin gallery (3–5 cards) signals a low-volume or new business even if that is not true. Hold the page back until the minimum is met.

---

### Section 4 — Bottom CTA

**Component:** `BottomCTA`

**Purpose:** After scrolling a full gallery of real results, visitor intent is at its peak on this page. The CTA here converts at a higher rate than on any other page — do not waste it with a generic button.

**Heading:** `Want results like these for your property?`

**Sub-heading:** `Get a free quote — we'll assess your space and tell you exactly what's possible.`

**CTAs:**
- Primary button: `Get a free quote` → `/contact`
- Secondary link: `Or call us — (250) 899-4954` → `tel:+12508994954`

---

## Component List

| Component | File path | Note |
|---|---|---|
| PageHero | `src/ui/PageHero/PageHero.jsx` | Reusable — shared with Services, About, Contact |
| FeaturedProjectShowcase | `src/sections/FeaturedProjectShowcase/FeaturedProjectShowcase.jsx` | New |
| ProjectFilterBar | `src/sections/ProjectFilterBar/ProjectFilterBar.jsx` | New |
| ProjectGrid | `src/sections/ProjectGrid/ProjectGrid.jsx` | New |
| ProjectCard | `src/ui/ProjectCard/ProjectCard.jsx` | New — reusable card, data-driven from `src/data/projects.js` |
| BottomCTA | `src/ui/BottomCTA/BottomCTA.jsx` | Reusable — shared with About page |

---

## Image Requirements Summary

| Item | Requirement |
|---|---|
| Every card — before photo | Same angle, same zoom as after photo. Seasonal context visible where relevant. |
| Every card — after photo | Clean site, no equipment. Golden hour preferred. 16:9 landscape orientation. |
| Featured showcase | 3–5 photos minimum — before, after (multiple angles), during if available. |
| File format | WebP, compressed. Target under 200KB per image for grid cards, under 400KB for featured showcase. |
| Minimum cards at launch | 8 total, before/after pairs on every card. |

---

## Data Structure for Project Cards

Each project card should be driven by a data object (array in a `.js` or `.json` file) to allow easy addition of new projects without editing component code:

```js
{
  id: 'project-001',
  title: 'Retaining wall & backyard patio',
  category: 'hardscaping',          // used for filter matching
  location: 'West Kelowna',
  year: 2024,
  beforeImage: '/images/projects/001-before.webp',
  afterImage: '/images/projects/001-after.webp',
  outcomeDescription: 'Sloped backyard with clay soil and erosion damage had no usable space. We installed a dry-stack retaining wall, graded the lawn, and added a planted border — completed in four days.',
  featured: false                   // set true for the featured showcase project
}
```

All project data lives in `src/data/projects.js`. Components import and render from this file. Adding a new project requires only adding a new object to this array.

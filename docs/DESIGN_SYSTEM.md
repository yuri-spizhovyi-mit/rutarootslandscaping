# Design System Reference

**Purpose:** This document captures the design patterns, colors, typography, and component styling from the current Ruta Roots website. Use this as the authoritative source when building new pages to ensure visual consistency across the entire site.

**Last Updated:** 2026-04-19  
**Archive Branch Reference:** `archive/current-site` (contains the original implementation)

---

## Color Palette

All colors are defined as CSS custom properties in `src/general.css`:

```css
:root {
  --color-white: #fff;
  --color-white-transparent: #ffffffb3;
  --color-dark-grey: #333;
  --color-medium-grey: #555;
  --color-green: #2b8a3e;
  --color-light-green: #968b39;
}
```

### Color Usage Guide

| Color | Hex Code | Usage |
|-------|----------|-------|
| White | `#fff` | Primary background, text on dark backgrounds |
| White Transparent | `#ffffffb3` | Navigation overlay, semi-transparent backgrounds |
| Dark Grey | `#333` | Primary text color, headings, dark elements |
| Medium Grey | `#555` | Secondary text color, descriptions, subtle elements |
| Green | `#2b8a3e` | Primary accent color, sub-headings, CTAs, highlights |
| Light Green (Olive) | `#968b39` | Hero section background, secondary accents |

---

## Typography

**Font Family:** `"Lato"` (system-ui fallback)  
**Base Font Size:** 62.5% on html (10px = 1rem)

### Heading Hierarchy

| Class | Font Size | Use Case | Notes |
|-------|-----------|----------|-------|
| `.heading-primary` | `clamp(3.6rem, 4.4vw, 5.2rem)` | Main page titles | Responsive sizing |
| `.heading-secondary` | `clamp(3rem, 3.6vw, 4.4rem)` | Section headings | Responsive sizing |
| `.heading-tertiary` | `clamp(2rem, 2.2vw, 2.4rem)` | Sub-section headings | Responsive sizing |
| `.heading-tertiary--sm` | `clamp(1.8rem, 1.8vw, 2rem)` | Card titles | Responsive sizing |

**All headings:**
- Line height: `1.2`
- Font weight: Varies (check individual implementations)

### Description/Body Text

| Class | Font Size | Use Case |
|-------|-----------|----------|
| `.description-lg` | `2.4rem` | Large body text blocks |
| `.description-md` | `1.8rem` | Standard body text |
| `.description-sm` | `1.6rem` | Small/secondary text |

**All descriptions:**
- Color: `var(--color-medium-grey)` (#555)
- Text align: `justify`
- Line height: `1.6`

### Sub-headings

| Class | Font Size | Use Case |
|-------|-----------|----------|
| `.sub-heading` | `1.6rem` | Category labels, tags |

**Sub-heading styling:**
- Font weight: `900` (extra bold)
- Color: `var(--color-green)` (#2b8a3e)
- Letter spacing: `1.35px`

---

## Layout & Spacing

### Container Widths

| Class | Max Width | Padding | Use Case |
|-------|-----------|---------|----------|
| `.container-lg` | `130rem` (1300px) | `0 3.6rem` | Full-width sections |
| `.container-md` | `110rem` (1100px) | `0 3.6rem` | Standard content areas |

### Margin Utilities

```css
.mb-lg { margin-bottom: 6rem; }
.mb-md { margin-bottom: 4rem; }
.mb-sm { margin-bottom: 2rem; }
.mb-xs { margin-bottom: 1rem; }
```

### Padding Utilities

```css
.pl-lg { padding-left: 20rem; }
```

### Grid System

```css
.grid {
  display: grid;
  align-items: flex-start;
  column-gap: 6.4rem;
  row-gap: 16.4rem;
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}
```

**Responsive behavior:**
- Below 768px: Switches to 1 column
- Row gap below 480px: `9.8rem`

---

## Component Patterns

### Links

Default link styling defined in `.link`:

```css
.link:link,
.link:visited {
  font-size: 1.8rem;
  color: var(--color-dark-grey);
  text-decoration: none;
  position: relative;
  display: inline-block;
}

.link::after {
  content: "";
  width: 90%;
  height: 1.5px;
  background-color: var(--color-dark-grey);
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.link:hover,
.link:active {
  color: var(--color-medium-grey);
}

.link:hover::after {
  background-color: var(--color-medium-grey);
}
```

**Features:**
- Underline animation with pseudo-element `::after`
- Subtle color shift on hover
- Relative positioning for underline control

### Header/Navigation

**Header Component** (`src/sections/Header/Header.module.css`):
- Fixed position, height: `9.8rem`
- White background with subtle shadow: `0 1.2rem 3.2rem rgba(0, 0, 0, 0.03)`
- Horizontal flexbox layout with space-between
- Z-index: `999`
- Padding: `0 3.6rem`

**Navigation (Mobile):**
- Transforms from right: `transform: translateX(100%)`
- Overlay with blur: `backdrop-filter: blur(10px)`
- Semi-transparent white background
- Animated transitions: `0.4s ease`
- Z-index: `9999` (above header)

### Hero Section

**Hero** (`src/sections/Hero/Hero.module.css`):
- Background color: `var(--color-light-green)` (#968b39)
- Background images with `image-set` for responsive sizes
- Min height: `100vh`
- Grid layout with `place-items: end center`
- Padding: `9.8rem 0`

**Hero Heading:**
- Color: `white`
- Font size: `clamp(5.2rem, 7.4vw, 11.2rem)`
- Text shadow: `0 0 40px var(--color-medium-grey)`
- Flexbox with `flex-wrap: wrap`
- Gap: `2rem`
- Text align: `center`

### Sections Padding

Standard section padding: `20rem 0` (desktop), `9.8rem 0` (mobile)

---

## Responsive Breakpoints

| Breakpoint | Max Width | Font Size | Usage |
|-----------|-----------|-----------|--------|
| Desktop | - | 62.5% (10px base) | Full size |
| Tablet | 64em (1024px) | 55% (8.8px base) | Medium screens |
| Tablet Small | 54em (864px) | 55% | Padding adjustments |
| Mobile | 48em (768px) | 55% | Grid 1 column |
| Mobile Small | 33em (528px) | 55% | Extra spacing adjustments |
| Mobile XS | 30em (480px) | 55% | Hero image swap |

---

## Images & Media

### Image Handling

```jsx
<img src="" width="100%" height="auto" style="display: block;" />
```

- Images are 100% width with auto height
- Display block (no inline whitespace)

### Background Images

Using `image-set` for responsive optimization:

```css
background-image: image-set(
    url('/images/sections/hero/hero-1920.webp') 1x,
    url('/images/sections/hero/hero-1600.webp') 1.5x,
    url('/images/sections/hero/hero-1400.webp') 2x
);
```

**Aspect Ratios Used:**
- Hero image: Varies by viewport
- Section images: Typically `768/1024` (vertical) or `1200/800` (horizontal)

---

## Existing Component Structure

### Directory Layout

```
src/
├── sections/          # Major page sections
│   ├── About/
│   ├── Footer/
│   ├── Gallery/
│   ├── Header/
│   ├── Hero/
│   ├── Services/
│   ├── Testimonials/
│   └── ...
├── ui/               # Reusable UI components
│   ├── Accordion/
│   ├── Icon/
│   └── Picture/
└── general.css       # Global styles & CSS variables
```

### CSS Module Convention

Each component has a matching `.module.css` file:
- `ComponentName.jsx` + `ComponentName.module.css`
- CSS classes exported and imported in JSX
- BEM-like naming: `.componentName`, `.componentNameChild`

---

## Implementation Checklist for New Pages

When building new pages (home.md, about.md, services.md, etc.), ensure:

- [ ] Use color palette from `:root` CSS variables
- [ ] Typography matches heading/description class sizes
- [ ] Container widths use `.container-lg` or `.container-md`
- [ ] Section padding follows `20rem 0` standard
- [ ] Grid system uses `.grid` and `.grid--2-cols`
- [ ] Links use `.link` class with underline animation
- [ ] Images use responsive sizing with `image-set` where applicable
- [ ] Responsive breakpoints follow defined breakpoint structure
- [ ] Header stays fixed with same styling
- [ ] Mobile navigation uses overlay pattern with blur
- [ ] Component filenames match directory structure
- [ ] CSS modules follow naming convention

---

## Notes for Developers

1. **CSS Variables:** All colors defined in `:root` — never hardcode hex values
2. **Responsive Sizing:** Use `clamp()` for fluid typography instead of fixed sizes
3. **Touch Targets:** Mobile elements should be at least 44px height (implicit in font sizes)
4. **Performance:** Use WebP images with fallbacks via `image-set` or `<picture>`
5. **Accessibility:** Links have underline for clarity; color not the only indicator
6. **Mobile First:** Start with mobile styles, add desktop with media queries

---

## Reference Files

- Global styles: `src/general.css`
- Archive/original: Branch `archive/current-site`
- Component examples: `src/sections/` and `src/ui/`

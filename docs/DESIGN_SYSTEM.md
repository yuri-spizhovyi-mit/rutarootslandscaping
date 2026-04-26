# Design System Reference

**Purpose:** Authoritative design reference for all pages. Covers color
palette, typography, spacing, component patterns, and animation library.
Ensure visual consistency across the entire site.

**Last Updated:** 2026-04-26  
**Archive Branch Reference:** `archive/current-site`  
**Current Build:** Home page complete — all patterns below are live

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
  --color-terracotta: #C85A17;
}
```

### Color Usage Guide

| Color | Hex Code | Usage |
|-------|----------|-------|
| White | `#fff` | Primary background, text on dark backgrounds |
| White Transparent | `#ffffffb3` | Navigation overlay, semi-transparent |
| Dark Grey | `#333` | Primary text, headings, dark elements |
| Medium Grey | `#555` | Secondary text, descriptions |
| Green | `#2b8a3e` | Primary accent, icons, CTAs, buttons |
| Light Green (Olive) | `#968b39` | Hero background, secondary accents |
| Terracotta | `#C85A17` | Accent accent (40% split), icons, links |

---

## Typography

**Font Family:** `"Lato"` (system-ui fallback)  
**Base Font Size:** 62.5% on html (10px = 1rem)

### Heading Hierarchy

| Class | Font Size | Use Case | Style |
|-------|-----------|----------|-------|
| `.heading-primary` | `clamp(3.6, 4.4vw, 5.2rem)` | Main titles | Dark grey |
| `.heading-secondary` | `clamp(3rem, 3.6vw, 4.4rem)` | Sections | Gradient |
| `.heading-tertiary` | `clamp(2rem, 2.2vw, 2.4rem)` | Sub-heads | Dark grey |
| `.heading-tertiary--sm` | `clamp(1.8rem, 1.8vw, 2rem)` | Cards | Dark grey |

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

## Animations & Visual Effects

All animations use GPU-accelerated CSS transforms and GSAP for performance.
**Timing Function:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (premium ease)

### 1. Gradient Text (Section Headings)

**Applied to:** `.heading-secondary`

```css
.heading-secondary {
  background: linear-gradient(
    135deg,
    var(--color-green) 0%,
    #1a5c28 45%,
    var(--color-terracotta) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Usage:** Automatic on all h2 section headings. No extra work needed.

### 2. Parallax Scrolling (Hero Background)

**Hook:** `useParallax(speed)` in `src/hooks/useParallax.js`

```jsx
const bgRef = useParallax(0.5);  // 0.5x scroll speed
return <div ref={bgRef}><img src="..." /></div>;
```

**Specs:**

- Smooth depth effect on hero/large image sections
- Speed 0.5 = background moves at half scroll speed
- Performance: Uses `requestAnimationFrame` (60fps)

### 3. Scroll-Triggered Fade & Slide-Up

**Hook:** `useScrollReveal(options)` in `src/hooks/useScrollReveal.js`

For headings:

```jsx
const headingRef = useScrollReveal({ duration: 0.8, distance: 40 });
return <h2 ref={headingRef}>Title</h2>;
```

For card groups (GSAP):

```jsx
useEffect(() => {
  const cards = cardsRef.current.querySelectorAll(`.${styles.card}`);
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,  // 150ms between cards
        ease: 'power2.out',
      });
      observer.unobserve(entry.target);
    }
  });
  observer.observe(cardsRef.current);
}, []);
```

**Specs:**
- Opacity: 0 → 1
- Y-axis: 40px up
- Duration: 0.8s
- Stagger: 0.12s (tight grids), 0.15s (loose grids)
- Fires once per element

### 4. Cursor-Reactive Glow Shadows

**Hook:** `useCursorGlow(ref, selector)` in `src/hooks/useCursorGlow.js`

```jsx
const containerRef = useRef(null);
useCursorGlow(containerRef, `.${styles.card}`);

return (
  <div ref={containerRef}>
    <div className={styles.card}>...</div>
  </div>
);
```

**CSS Setup:**

```css
.card {
  box-shadow: var(--shadow-x, 0px) var(--shadow-y, 0px)
    30px rgba(43, 138, 62, 0.1);
}
.card:hover {
  box-shadow: var(--shadow-x, 0px) var(--shadow-y, 0px)
    50px rgba(43, 138, 62, 0.3),
    0 12px 30px rgba(0, 0, 0, 0.08);
}
```

**Specs:**
- Dynamic shadow follows cursor position
- One listener per container (efficient)
- `requestAnimationFrame` for smooth tracking
- Applied to: ServicesPreview cards, WhyRutaRoots blocks

### 5. Green Glow Text-Shadow

**Pattern:** Applied to prominent headings (hero h1, large titles)

```css
.heading {
  text-shadow: 0 0 60px rgba(43, 138, 62, 0.4),
    0 4px 20px rgba(0, 0, 0, 0.3);
}
```

**Specs:**
- Outer glow: 60px blur
- Inner shadow: 4px drop
- Green tint at 40% opacity
- Use on white/light text only

### 6. Gradient Borders (Hover Effect)

**Pattern:** On interactive cards/blocks

```css
.card {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(135deg, var(--color-green) 0%,
      var(--color-terracotta) 100%) border-box;
  background-clip: padding-box, border-box;
}
```

**Specs:**
- Inner: White/light background
- Border: Green→Terracotta gradient
- Applied to: Cards, blocks, interactive elements

### 7. Glassmorphic Buttons (Frosted Glass)

**Pattern:** Secondary CTAs, overlay buttons

```css
.button {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}
.button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}
```

**Specs:**
- Blur strength: 10px
- Very subtle (5% opacity)
- Use on dark/image backgrounds

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

When building Services, About, Projects, Contact pages:

**Color & Typography:**
- [ ] Use CSS variables from `:root` (never hardcode hex)
- [ ] Apply `.heading-secondary` gradient to all section titles
- [ ] Use green (#2b8a3e) for 60%, terracotta (#C85A17) for 40%
- [ ] Typography matches heading/description class sizes
- [ ] Container widths use `.container-lg` or `.container-md`
- [ ] Section padding: `20rem 0` (desktop), `9.8rem 0` (mobile)

**Animations (Required):**
- [ ] Use `useCursorGlow` on card/block containers
- [ ] Use `useScrollReveal` on headings + card groups
- [ ] Apply parallax on hero/large image sections
- [ ] Stagger animations: 0.12s (tight), 0.15s (loose)
- [ ] Timing: `cubic-bezier(0.34, 1.56, 0.64, 1)`

**Layout & Components:**
- [ ] Grid system uses `.grid` and `.grid--2-cols`
- [ ] Links use `.link` class with underline animation
- [ ] Images use responsive sizing with `image-set`
- [ ] Gradient borders on interactive cards
- [ ] Green glow text-shadow on prominent text
- [ ] Glassmorphic styling on secondary CTAs

**Structure:**
- [ ] Responsive breakpoints match defined structure
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

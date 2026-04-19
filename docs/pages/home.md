# Home Page

## Page Purpose

The Home page is the primary landing point for paid traffic (Google Ads) and organic search. It has one job: tell a visitor in 5 seconds what Ruta Roots does, where, and why they should trust the company over competitors. Every section is ordered to build trust progressively and move the visitor toward calling or submitting a quote form. This page must work as a standalone conversion tool — a visitor who sees only this page should have enough information to act.

---

## Route

`/`

---

## SEO

**Page title:** `Landscaping in West Kelowna & Kelowna | Ruta Roots Landscaping`

**Meta description:** `Get in touch to discuss your landscaping project in West Kelowna or Kelowna. Reliable service for lawn care, landscape work, hardscaping, and seasonal cleanup.`

---

## Sections (in scroll order)

---

### Sticky Navigation

**Component:** `StickyNav`

**Purpose:** Permanently visible navigation that ensures the phone number is always one tap away on mobile. Never hidden behind a hamburger on desktop.

**Content:**
- Logo (left)
- Nav links: Home · Services · About · Projects · Contact
- Phone number (right, large, tap-to-call): displayed as `(250) 899-4954`
- "Get in touch" button (accent colour, links to `/contact`)

**Design notes:**
- Phone number must be the most visible element in the nav on mobile
- On mobile, collapse nav links to hamburger but keep phone number and CTA button always visible
- Accent colour button — not grey, not white

---

### Section 1 — Hero

**Component:** `HeroSection`

**Purpose:** The 5-second pitch. Communicates what Ruta Roots does, where they operate, and gives the visitor two paths to act immediately.

**Headline:** `Reliable landscaping in West Kelowna & Kelowna`

**Sub-headline:** `Lawn care, landscape design & seasonal cleanup — serving West Kelowna, Kelowna & surrounding areas`

**CTAs:**
- Primary button: `Get in touch` → links to `/contact`
- Secondary link: `Call us now — (250) 899-4954` → `tel:+12508994954`

**Image requirements:**
- Full-width background image
- Real Ruta Roots project photo — best available finished yard transformation
- Shot from ground level, warm afternoon light, no equipment or debris visible
- Must be compressed to WebP at 80% quality — hero image is the #1 cause of slow load on mobile
- Do NOT use stock photography under any circumstances

**Design notes:**
- Dark overlay on image to ensure headline text is readable
- Headline and CTAs visible without scrolling on all screen sizes
- On mobile: headline font size must remain readable — do not shrink below 28px

---

### Section 2 — Trust Strip

**Component:** `TrustStrip`

**Purpose:** The first thing a skeptical visitor sees after the hero. Provides immediate credibility signals before the visitor reads body copy. No heading — the strip speaks for itself.

**Content (displayed as horizontal items with dividers):**
- `15+ years landscaping experience`
- `3 years serving West Kelowna`
- `Built on repeat clients and referrals`

**Design notes:**
- Thin horizontal bar, full width
- Subtle background — slightly off-white or light grey to separate from hero
- No heading element — strip should read as a factual credential row
- Icons optional but keep them small (16px) and non-distracting

---

### Section 3 — Services Preview

**Component:** `ServicesPreview`

**Purpose:** A three-card menu of Ruta Roots' primary services. Not a catalogue — a scannable overview that directs visitors to the full Services page. Visitors who already know what they need can navigate directly.

**Section heading:** `What we do`

**Cards (3 total):**

Card 1 — Lawn care & maintenance
- Icon or small photo
- Name: `Lawn care & maintenance`
- Description: `Weekly or one-time lawn mowing, edging, fertilizing, and weed control — keeping Okanagan lawns at their best through the full season.`
- Link: `Learn more →` → `/services#lawn-care`

Card 2 — Landscape design & installation
- Icon or small photo
- Name: `Landscape design & installation`
- Description: `Landscape improvements designed for how you use your outdoor space and suited to the BC Interior climate. Practical planning, careful work, and attention to detail from start to finish.`
- Link: `Learn more →` → `/services#landscape-design`

Card 3 — Hardscaping & seasonal cleanup
- Icon or small photo
- Name: `Hardscaping & seasonal cleanup`
- Description: `Patios, retaining walls, spring & fall cleanups — everything your yard needs beyond the lawn itself.`
- Link: `Learn more →` → `/services#hardscaping`

**Image requirements:**
- Small representative photo per card OR simple line icon (icons preferred if real project photos for each service are not available at launch)
- If photos used: square crop, real Ruta Roots work only

---

### Section 4 — Featured Project

**Component:** `FeaturedProject`

**Purpose:** First proof point. Shows one real completed project with before/after photos and a brief outcome description. Establishes the quality bar before the visitor sees anything else in the gallery.

**Section heading:** `Recent work`

**Content:**
- Before photo (left) + After photo (right) — or swipe slider on mobile
- Location tag: `West Kelowna, [year]`
- Project type tag: e.g. `Landscape design & installation`
- Outcome description (2–3 sentences): Describe what the problem was, what Ruta Roots did, and the result. Example format: `This West Kelowna backyard had a steep slope, poor drainage, and no usable space. We installed a dry-stack retaining wall, levelled the lawn, and added a planted border that suits the Okanagan climate. The project took four days from start to finish.`
- Link: `See all projects →` → `/projects`

**Image requirements:**
- Before and after photos from the identical camera position and angle
- Same time of day / lighting for both if possible
- Shot wide — full yard in frame, not a corner
- Golden hour preferred for the "after" shot
- No equipment, hoses, or vehicles in frame

---

### Section 5 — Why Ruta Roots

**Component:** `WhyRutaRoots`

**Purpose:** Removes the four most common objections a homeowner has before hiring a local landscaping company. Each differentiator must be specific and verifiable — not a generic quality claim.

**Section heading:** `Why homeowners choose Ruta Roots`

**Differentiators (4 blocks — icon + bold claim + 1-sentence explanation):**

1. **Clear communication throughout the project**
   `You have direct communication from start to finish and know what to expect every step of the way.`

2. **Properly insured and responsible**
   `Ruta Roots carries liability insurance and operates with proper business practices that protect your property.`

3. **Focus on doing the job right**
   `Work is done properly with proper preparation, careful execution, and attention to detail that makes projects last.`

4. **Reliable from start to finish**
   `You can count on consistent service, follow-through, and commitment to completing projects you're satisfied with.`

**Design notes:**
- 2×2 grid on desktop, stacked on mobile
- Icon (simple line icon) above each block
- Bold claim in larger type, explanation in regular body text below

---

### Section 6 — Google Reviews

**Component:** `ReviewsSection`

**Purpose:** Social proof from a third-party platform. One real verified review displayed in full. Visitors doing due diligence on a local trades company will look for reviews; surfacing them here removes the need to leave the site.

**Section heading:** `What clients say`

**Review card structure (1 card):**
- Star rating: ★★★★★
- Reviewer name: Darlene S.
- Review date: 10 months ago
- Full review text: "I'm very happy to find Alex at Ruta Roots Landscaping to redefine my garden issues having just moved to Kelowna in April. I recommend him for a thorough job! Well done Alex, I am glad to find you!"
- `via Google` label

**Below the card:**
- Link: `Read review on Google →` → opens Google Business Profile in new tab

---

### Section 7 — Bottom CTA (Quote Form)

**Component:** `BottomCTAForm`

**Purpose:** Catches visitors who scrolled the full page but did not convert at the hero. A repeated button here is insufficient — this section embeds a short form so the visitor can act without navigating to the Contact page.

**Section heading:** `Tell us about your project`

**Sub-heading:** `Share a few details and we'll get back to you within 1 business day.`

**Form fields:**
1. Name (required)
2. Phone (required)
3. Service needed (required — dropdown): Lawn care & maintenance / Landscape design & installation / Hardscaping / Seasonal cleanup / Irrigation / Not sure yet
4. Best time to call (optional — text input or dropdown: Morning / Afternoon / Evening / Anytime)

**Submit button copy:** `Get in touch`

**Below button:** `No pressure. We respond within 1 business day.`

**Form behaviour:**
- On submit → redirect to `/thank-you`
- Fire Google Tag Manager conversion event on `/thank-you` load
- No CAPTCHA — use honeypot hidden field for spam prevention

---

### Footer

**Component:** `SiteFooter`

**Purpose:** Provides contact details, service area, navigation, and trust signals for visitors who reach the bottom of the page. Service area text in the footer carries SEO value for local search.

**Content:**
- Logo
- Tagline: `West Kelowna's local landscaping crew`
- Phone: `(250) 899-4954` (tap-to-call, `tel:+12508994954`)
- Email: `rutarootslandscaping@gmail.com`
- Address: `[business address], West Kelowna, BC`
- Navigation links: Home · Services · About · Projects · Contact
- Service area: `Serving West Kelowna · Kelowna · Peachland · Lake Country`
- Social links: Facebook icon, Instagram icon
- Google Maps link: `View on Google Maps →`
- Copyright: `© [year] Ruta Roots Landscaping. All rights reserved.`

---

## Component List

| Component | File path | Note |
|---|---|---|
| StickyNav | `src/sections/Header/Header.jsx` | Existing — extend with phone + CTA button |
| HeroSection | `src/sections/Hero/Hero.jsx` | Existing — update copy + CTAs |
| TrustStrip | `src/sections/TrustStrip/TrustStrip.jsx` | New |
| ServicesPreview | `src/sections/ServicesPreview/ServicesPreview.jsx` | New |
| FeaturedProject | `src/sections/FeaturedProject/FeaturedProject.jsx` | New |
| WhyRutaRoots | `src/sections/WhyRutaRoots/WhyRutaRoots.jsx` | New |
| ReviewsSection | `src/sections/Reviews/Reviews.jsx` | New — shared with About page |
| BottomCTAForm | `src/ui/BottomCTAForm/BottomCTAForm.jsx` | New — reusable, shared with Services page |
| SiteFooter | `src/sections/Footer/Footer.jsx` | Existing — extend with full content |

---

## Image Requirements Summary

| Location | Description | Format | Notes |
|---|---|---|---|
| Hero background | Best finished project — full yard, wide angle, warm light | WebP 80% | Compress before upload — critical for load speed |
| Services cards | Small representative photo per service OR line icon | WebP | Real work only, square crop |
| Featured project (before) | Before photo from exact position | WebP | Same angle as after |
| Featured project (after) | After photo from exact position | WebP | Golden hour preferred |

---

## Mobile-Specific Requirements

- Phone number visible in sticky nav at all times (not collapsed into hamburger)
- Hero CTA buttons must be full-width tap targets on mobile (min 48px height)
- Trust strip scrolls horizontally on small screens rather than wrapping
- Featured project uses swipe carousel (before/after) on mobile
- Bottom form fields stack vertically, min 44px tap target height per input
- Sticky bottom bar on mobile: `Call now` + `Get in touch` buttons always visible

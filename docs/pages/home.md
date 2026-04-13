# Home Page

## Page Purpose

The Home page is the primary landing point for paid traffic (Google Ads) and organic search. It has one job: tell a visitor in 5 seconds what Ruta Roots does, where, and why they should trust the company over competitors. Every section is ordered to build trust progressively and move the visitor toward calling or submitting a quote form. This page must work as a standalone conversion tool — a visitor who sees only this page should have enough information to act.

---

## Route

`/`

---

## SEO

**Page title:** `Landscaping in West Kelowna & Kelowna | Ruta Roots Landscaping`

**Meta description:** `West Kelowna's trusted local landscaping crew. Lawn care, landscape design, hardscaping & seasonal cleanup. Licensed, insured, and locally rooted. Get a free quote today.`

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
- "Get a quote" button (accent colour, links to `/contact`)

**Design notes:**
- Phone number must be the most visible element in the nav on mobile
- On mobile, collapse nav links to hamburger but keep phone number and CTA button always visible
- Accent colour button — not grey, not white

---

### Section 1 — Hero

**Component:** `HeroSection`

**Purpose:** The 5-second pitch. Communicates what Ruta Roots does, where they operate, and gives the visitor two paths to act immediately.

**Headline:** `West Kelowna's trusted landscaping team`

**Sub-headline:** `Lawn care, landscape design & seasonal cleanup — serving West Kelowna, Kelowna & surrounding areas`

**CTAs:**
- Primary button: `Get a free quote` → links to `/contact`
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

**Purpose:** The first thing a skeptical visitor sees after the hero. Provides immediate social proof and credibility signals before the visitor reads a single word of body copy. No heading — the strip speaks for itself.

**Content (displayed as horizontal items with dividers):**
- `⭐ 4.9 · [X] reviews on Google`
- `[X] years serving West Kelowna`
- `Licensed & insured in BC`
- `WCB covered`

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
- Description: `Full-yard transformations designed for how you live and built for the BC Interior climate. Site visit, written proposal, installation by our own crew.`
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

1. **Local crew — no subcontractors, ever**
   `The same people who quote your job are the ones who show up to do it. You're not handing your property to whoever was available that week.`

2. **Licensed, insured & WCB-covered in BC**
   `Fully licensed in British Columbia and covered by WorkSafeBC. Licence number: [insert number]. Not just a claim — verifiable.`

3. **Response within 1 business day**
   `We respond to every quote request within one business day. If you call during business hours, we pick up. If you leave a message, we call back the same day.`

4. **Satisfaction guaranteed — we come back until it's right**
   `If anything isn't right after we finish, call us and we'll fix it — no charge, no argument. We stand behind every job.`

**Design notes:**
- 2×2 grid on desktop, stacked on mobile
- Icon (simple line icon) above each block
- Bold claim in larger type, explanation in regular body text below

---

### Section 6 — Google Reviews

**Component:** `ReviewsSection`

**Purpose:** Social proof from a third-party platform. Three real reviews displayed in full — not truncated. Visitors doing due diligence on a local trades company will look for reviews; surfacing them here removes the need to leave the site.

**Section heading:** `What clients say`

**Review card structure (3 cards):**
- Star rating (5 filled stars, or exact rating)
- Reviewer first name + last initial
- Review date
- Full review text (do not truncate — use the most specific reviews available)
- `via Google` label

**Selection criteria for which reviews to display:**
- Must mention a specific service (not just "great company")
- Must mention an outcome or result
- Must mention the crew or a person by name if possible
- Avoid reviews that are generic praise without specifics

**Below the cards:**
- Link: `See all [X] reviews on Google →` → opens Google Business Profile in new tab

---

### Section 7 — Bottom CTA (Quote Form)

**Component:** `BottomCTAForm`

**Purpose:** Catches visitors who scrolled the full page but did not convert at the hero. A repeated button here is insufficient — this section embeds a short form so the visitor can act without navigating to the Contact page.

**Section heading:** `Ready to get started?`

**Sub-heading:** `Tell us about your project and we'll get back to you within 1 business day.`

**Form fields:**
1. Name (required)
2. Phone (required)
3. Service needed (required — dropdown): Lawn care & maintenance / Landscape design & installation / Hardscaping / Seasonal cleanup / Irrigation / Not sure yet
4. Best time to call (optional — text input or dropdown: Morning / Afternoon / Evening / Anytime)

**Submit button copy:** `Get my free quote`

**Below button:** `No spam. No obligation. We respond within 1 business day.`

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
- Licence number: `BC Licence #[number]`
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
- Sticky bottom bar on mobile: `Call now` + `Get a quote` buttons always visible

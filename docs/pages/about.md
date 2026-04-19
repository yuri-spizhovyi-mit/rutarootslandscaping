# About / Why Choose Us Page

## Page Purpose

The About page is a trust page, not a biography. Its sole purpose is to answer the question a skeptical visitor is silently asking: "Why should I trust this company with my property over the other 10 landscaping companies I found?" Every section is chosen to provide a specific, verifiable answer to that question. The page intentionally avoids generic claims and instead uses real credentials, real numbers, a real face, and specific differentiators that competitors either cannot match or haven't thought to state.

---

## Route

`/about`

---

## SEO

**Page title:** `Why Choose Ruta Roots | Local Landscaping in West Kelowna`

**Meta description:** `Meet Alex at Ruta Roots — a locally-owned West Kelowna landscaping service. No crew rotation. No subcontractors. Just one person who shows up, does the work right, and actually answers the phone.`

---

## Sections (in scroll order)

---

### Page Hero

**Component:** `PageHero`

**Purpose:** Frame the page around the visitor's decision, not the company's ego.

**H1:** `Why West Kelowna homeowners choose Ruta Roots`

**Sub-heading:** `We're a small local operation — just me, my experience, and a focus on getting the job done right. No rotating crew, no subcontractors, no middlemen.`

**Breadcrumb:** `Home → About`

**Design notes:**

- Do NOT title this page or section "About us" — the heading must be visitor-centric
- No full-bleed hero image — this is a utility header

---

### Section 1 — Founder Photo & Origin Story

**Component:** `FounderStory`

**Purpose:** A face creates trust faster than any copywriting. This section humanises the business by showing a real person and telling a specific, honest story about why Ruta Roots exists. Layout: photo left, story right on desktop, stacked on mobile.

**Photo requirements:**

- Real photo of the business owner — not a logo, not a crew group shot from 50 metres
- Natural setting — outdoors, on a job site, or in the yard
- Not a posed corporate headshot — approachable and genuine
- Minimum 400×400px, ideally portrait orientation
- WebP format

**Story copy (replace bracketed placeholders with real details):**

Heading: `Alex, founder`

Body:
`I've been working in landscaping for over 15 years. After moving to West Kelowna three years ago, I started Ruta Roots to offer a straightforward, reliable service focused on doing the job properly.`

`I handle projects directly and stay involved throughout the work on-site. This approach keeps the quality consistent and ensures that every detail is done right.`

`The goal is simple — to provide landscaping work that homeowners can rely on, with results that hold up over time.`

**Design notes:**

- Story must be specific — generic founding stories read as filler
- Do not use phrases like "passion for landscaping" or "love of the outdoors" — they communicate nothing
- Photo and text are equal weight — neither should dominate the other

---

### Section 2 — Credibility Stats

**Component:** `CredibilityStats`

**Purpose:** Four real, specific numbers displayed as a horizontal stat bar. Specific numbers (e.g. "73 projects in 2024") are more credible than vague round numbers ("100+ clients"). Only include stats that can be backed up.

**Stats (4 items — replace with real numbers):**

1. `15+` / Years landscaping experience
2. `3` / Years serving West Kelowna
3. `Mostly referrals` / New clients from repeat work
4. `One person` / You reach me directly

**Design notes:**

- Horizontal bar on desktop, 2×2 grid on mobile
- Large number in bold, small label below in muted text
- No icons required — the numbers carry themselves
- Do not use inflated or estimated vanity metrics

---

### Section 3 — Why Choose Us (Differentiators)

**Component:** `Differentiators`

**Purpose:** Four specific, verifiable differentiators that answer the visitor's core question. Each must pass this test: could a competitor post this same claim on their own site without changing a word? If yes, rewrite it.

**Section heading:** `What makes us different`

**Differentiator blocks (4 items — icon + bold claim + explanation paragraph):**

**1. Clear, direct communication**

`You have direct communication throughout your project. You know what to expect, receive regular updates, and can reach Ruta Roots with questions anytime.`

**2. Insured and responsible**

`Ruta Roots carries liability insurance and operates with proper business practices. Your property is protected during all work.`

**3. Quality work, done properly**

`Ruta Roots takes proper time for preparation, execution, and finishing. That attention to detail is what makes projects last.`

**4. We stand behind our work**

`Ruta Roots is committed to completing projects you're satisfied with. Quality results are the standard.`

---

### Section 4 — What We're Not

---

**Component:** `WhatWeAreNot`

**Purpose:** An unconventional section that signals confidence by explicitly stating what Ruta Roots is not. It filters out price-shoppers who will waste everyone's time, and it reinforces the brand positioning for the right client. Keep it short — three to four lines, no bullets, conversational tone.

**Section heading:** `What we're not`

**Body copy:**
`Ruta Roots is built around doing the work properly — with consistent quality, clear communication, and follow-through from start to finish.`

`This isn't a high-volume operation where projects are rushed or handed off without oversight. Each job is approached with attention to detail and a focus on long-term results.`

`If you're looking for a straightforward process, reliable communication, and work that's done right the first time, we're a good fit.`

**Design notes:**

- No bulleted list — prose only
- Slightly smaller than the main body text or visually offset (e.g. left border accent)
- Not alarming or confrontational in tone — confident and honest

---

### Section 5 — Google Reviews

**Component:** `ReviewsSection`

**Purpose:** Display real client feedback from Google. A single verified review builds trust through authentic, unedited customer voice.

**Section heading:** `What clients say`

**Display:** Single review card

**Review card structure:**

- Star rating: ★★★★★
- Reviewer name: Darlene S.
- Review date: 10 months ago
- Full review text: "I'm very happy to find Alex at Ruta Roots Landscaping to redefine my garden issues having just moved to Kelowna in April. I recommend him for a thorough job! Well done Alex, I am glad to find you!"
- Label: `via Google`

**Below card:**

Link: `Read review on Google →` → opens Google Business Profile in new tab

**Design notes:**

- Single centered review card — focuses attention on the real feedback
- Clean layout with no additional context or metrics
- "via Google" attribution clearly visible

---

### Section 7 — Bottom CTA

**Component:** `BottomCTA`

**Purpose:** Close the trust loop. By this point the visitor has read the story, the differentiators, and the reviews. The CTA just needs to be visible, frictionless, and tonally consistent with the page they've just read.

**Heading:** `Ready to work with someone reliable?`

**Sub-heading:** `Get in touch to discuss your project. Same-day response, no pressure.`

**CTAs:**

- Primary button: `Get in touch` → `/contact`
- Secondary link: `Or call us directly — (250) 899-4954` → `tel:+12508994954`

---

## Component List

| Component        | File path                                            | Note                                               |
| ---------------- | ---------------------------------------------------- | -------------------------------------------------- |
| PageHero         | `src/ui/PageHero/PageHero.jsx`                       | Reusable — shared with Services, Projects, Contact |
| FounderStory     | `src/sections/FounderStory/FounderStory.jsx`         | New                                                |
| CredibilityStats | `src/sections/CredibilityStats/CredibilityStats.jsx` | New                                                |
| Differentiators  | `src/sections/Differentiators/Differentiators.jsx`   | New                                                |
| WhatWeAreNot     | `src/sections/WhatWeAreNot/WhatWeAreNot.jsx`         | New                                                |
| ReviewsSection   | `src/sections/Reviews/Reviews.jsx`                   | New — shared with Home page                        |
| Credentials      | `src/sections/Credentials/Credentials.jsx`           | New                                                |
| BottomCTA        | `src/ui/BottomCTA/BottomCTA.jsx`                     | New — reusable, shared with Projects page          |

---

## Image Requirements Summary

| Location         | Description                                               | Notes                                    |
| ---------------- | --------------------------------------------------------- | ---------------------------------------- |
| Founder photo    | Real photo of owner, natural setting, outdoors or on site | Not a logo, not a group shot — a face    |
| Credential logos | Official logos for each real credential                   | Greyscale display, only real credentials |

---

## Copy Red Flags — What Must Not Appear on This Page

The following phrases are banned from this page. If any appear in a draft, rewrite that sentence:

- "passion for landscaping"
- "love of the outdoors"
- "committed to excellence"
- "we care about quality"
- "customer satisfaction is our priority"
- "professional results"
- "tailored solutions"
- "exceeding expectations"
- "going above and beyond"

Every claim on this page must be specific, verifiable, or backed by a real example. Generic praise is invisible to visitors — it blends into every other landscaping site they've looked at.

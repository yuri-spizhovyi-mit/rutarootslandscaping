# Services Page

## Page Purpose

The Services page is the primary conversion page for visitors who arrive knowing they need landscaping but want to understand what Ruta Roots specifically offers before calling. Each service gets its own full-width block with a photo, description, specific inclusions list, Okanagan-specific callout, and a per-service CTA. The page is structured so a visitor looking for one specific service can jump directly to it via anchor navigation without scrolling past irrelevant content. The FAQ at the bottom carries significant SEO value through FAQ schema markup.

---

## Route

`/services`

---

## SEO

**Page title:** `Landscaping Services in West Kelowna & Kelowna | Ruta Roots`

**Meta description:** `Landscaping services in West Kelowna & Kelowna — lawn care, landscape design, hardscaping, seasonal cleanup, and irrigation. Get in touch for a consultation.`

---

## Sections (in scroll order)

---

### Page Hero

**Component:** `PageHero`

**Purpose:** Short, tight header that confirms the visitor is in the right place. Not a full-bleed hero — this is a utility header, not a landing page hero.

**H1:** `Landscaping services in West Kelowna & Kelowna`

**Sub-heading:** `Reliable landscaping services across West Kelowna & Kelowna. Lawn care, design, hardscaping, and seasonal cleanup.`

**Breadcrumb:** `Home → Services`

**Design notes:**
- Max 120px tall on desktop
- Background colour or subtle texture — not a full photo
- H1 must contain the primary keyword exactly as written above

---

### Section 1 — Anchor Navigation

**Component:** `ServiceAnchorNav`

**Purpose:** Horizontal pill-button row that jumps the visitor directly to the service section they need. Prevents drop-off from visitors who arrive looking for a specific service and must scroll past irrelevant content to find it.

**Links (in order):**
- `Lawn care` → `#lawn-care`
- `Landscape design` → `#landscape-design`
- `Hardscaping` → `#hardscaping`
- `Seasonal cleanup` → `#seasonal-cleanup`
- `Irrigation` → `#irrigation`

**Behaviour:**
- Smooth scroll to anchor
- Sticky on scroll (if technically feasible without performance penalty)
- Active state on the pill corresponding to the section currently in viewport

---

### Section 2 — Lawn Care & Maintenance

**Component:** `ServiceBlock` (instance: `lawn-care`)

**Anchor ID:** `lawn-care`

**Image side:** Photo on right, content on left (first block sets the alternating pattern)

**H2:** `Lawn care in West Kelowna & Kelowna`

**Description paragraph:**
`Whether you want weekly maintenance or a one-time cleanup, we keep Okanagan lawns looking their best through the full growing season. Our crew handles everything — mowing, edging, fertilizing, weed control — so you get your weekends back. We offer both recurring schedules and one-time services with no lock-in contracts.`

**Okanagan callout:**
`Okanagan note: We adjust mowing height and watering schedules for the BC Interior's dry summers. Most West Kelowna lawns need a different approach than the coast — higher cut heights during drought stress, fertilizing timed to the Okanagan frost calendar, and weed control suited to local species. We know the difference.`

**What's included (6 items):**
1. Mowing & edging
2. Blowing & site cleanup
3. Seasonal fertilizing program
4. Weed control (hand & product)
5. Aeration & overseeding
6. One-time or recurring schedule — no lock-in

**CTA:** `Get in touch for lawn care →` → `/contact?service=lawn-care`

**Image requirements:**
- Real Ruta Roots finished lawn — not stock
- Low angle, wide lens, late afternoon light
- Fresh mow lines visible
- Lawn fills 70% of frame, house or fence visible for context
- No equipment, hoses, or vehicles in frame
- WebP format

---

### Section 3 — Landscape Design & Installation

**Component:** `ServiceBlock` (instance: `landscape-design`)

**Anchor ID:** `landscape-design`

**Image side:** Photo on left, content on right (alternating)

**H2:** `Landscape design & installation in West Kelowna & Kelowna`

**Description paragraph:**
`We design and build outdoor spaces that suit how you actually live — whether that's a low-maintenance front yard that holds its own through an Okanagan summer, or a backyard built for entertaining. Every project starts with a site visit and a written proposal before any work begins. Our crew handles installation start to finish.`

**Okanagan callout:**
`Okanagan note: We design with the local climate in mind — drought-tolerant natives, efficient irrigation placement, and plants that thrive in the BC Interior's hot summers and cold winters. No Okanagan yard should look like it was designed for the coast. Soil conditions vary significantly across West Kelowna neighbourhoods; we assess yours before recommending anything.`

**How it works (3-step process strip — unique to this block):**

Step 1 — Free site visit
`We come to you, assess the space, and listen to what you want. No obligation, no charge.`

Step 2 — Written design proposal
`A clear plan with materials, plants, layout, and total cost — before any work begins or money changes hands.`

Step 3 — Installation by our own crew
`No subcontractors. The same crew that quoted the job builds it. We handle everything start to finish.`

**What's included (7 items):**
1. Softscape planting & placement
2. New lawn installation
3. Garden bed design & build
4. Mulching & ground cover
5. Tree & shrub selection and planting
6. Irrigation integration
7. Site prep & soil amendment

**Reassurance bar (3 items, displayed above CTA):**
- `Site visit` / Included in our process
- `Written` / Plan before work
- `Follow-through` / We stand behind our work

**CTA:** `Discuss your project →` → `/contact?service=landscape-design`

**Image requirements:**
- Best available completed design/installation project — full yard transformation
- Wide angle showing full scope of work — not just a corner
- Before/after pair strongly preferred; if only one shot, use the finished result
- Both shots from identical camera position if using before/after
- Golden hour lighting for the after shot
- WebP format

---

### Section 4 — Hardscaping

**Component:** `ServiceBlock` (instance: `hardscaping`)

**Anchor ID:** `hardscaping`

**Image side:** Photo on right, content on left (alternating)

**H2:** `Hardscaping in West Kelowna & Kelowna`

**Description paragraph:**
`Patios, retaining walls, walkways, and garden borders — we design and build hard landscape features that hold up through Okanagan winters and look right through every season. Whether it's a simple pathway or a full retaining wall system to manage a sloped yard, we plan it properly before we break ground.`

**Okanagan callout:**
`Okanagan note: Freeze-thaw cycles in the BC Interior put real stress on hardscape — the wrong materials or poorly prepared base will crack and shift within a season. We specify materials and base depths appropriate for the Okanagan climate, not generic landscape standards that work in milder regions.`

**What's included (6 items):**
1. Patio design & installation
2. Dry-stack and mortared retaining walls
3. Walkways & pathways
4. Garden borders & edging features
5. Steps & grading
6. Drainage integration where required

**CTA:** `Get in touch for hardscaping →` → `/contact?service=hardscaping`

**Image requirements:**
- Completed retaining wall or patio — the most visually dramatic hardscape project available
- Wide shot showing the full structure in context
- Before/after pair if available
- WebP format

---

### Section 5 — Mid-Page CTA Banner

**Component:** `MidPageCTA`

**Purpose:** Catches visitors who have read through three service blocks and are interested but unsure which service fits their situation. Reduces drop-off at the mid-page point by offering a direct line rather than asking them to keep reading.

**Background:** Accent colour (not white — must be visually distinct)

**Headline:** `Not sure which service you need?`

**Sub-heading:** `We'll figure it out together. Call us or send a message.`

**CTAs:**

- `Call us — (250) 899-4954` → `tel:+12508994954`
- `Or get in touch →` → `/contact`

---

### Section 6 — Seasonal Cleanup

**Component:** `ServiceBlock` (instance: `seasonal-cleanup`)

**Anchor ID:** `seasonal-cleanup`

**Image side:** Photo on left, content on right (alternating)

**H2:** `Spring & fall cleanup in West Kelowna & Kelowna`

**Description paragraph:**
`We handle spring and fall yard cleanups for West Kelowna and Kelowna homeowners — clearing out what the season left behind so your yard is ready for what's coming next. One call, one crew, done properly.`

**Okanagan callout:**
`Okanagan timing: Spring cleanups typically run late March through April in West Kelowna once frost risk drops — earlier than you might expect, but later than the coast. Fall cleanups are best done mid-October through November before the first hard freeze. Book early — spots fill fast at both ends of the season. Irrigation winterization should be completed before the first freeze, typically late October in the valley.`

**Urgency element (update seasonally — remove in off-season):**
`Fall 2025 spots are filling — book yours before the rush.`

**What's covered — split by season:**

Spring cleanup (5 items):
1. Debris & winter leaf removal
2. Garden bed edging & cleanup
3. Pruning winter-damaged growth
4. First mow & edge of season
5. Mulch refresh on beds
6. Irrigation system startup check

Fall cleanup (6 items):
1. Full leaf removal & disposal
2. Cutting back perennials & ornamental grasses
3. Final mow & edge of season
4. Bed clearing & winter mulching
5. Irrigation winterization
6. Shrub & hedge tidy

**CTA (peak season — March/April and October/November):** `Book your cleanup →` → `/contact?service=seasonal-cleanup`

**CTA (off-season):** `Get in touch for cleanup →` → `/contact?service=seasonal-cleanup`

**Upsell line (below CTA):** `Already a lawn care client? Cleanup is available as an add-on — just mention it when you book.`

**Image requirements:**
- First choice: genuine before/after — yard buried in fall leaves next to same yard cleared and tidy
- Second choice: crew mid-cleanup — bags filled, debris piled, team actively working
- Third choice: finished clean yard with visible seasonal context (fall colours in background)
- Seasonal context must be visible — a generic clean lawn photo does not work here
- WebP format

---

### Section 7 — Irrigation

**Component:** `ServiceBlock` (instance: `irrigation`)

**Anchor ID:** `irrigation`

**Image side:** Photo on right, content on left (alternating)

**H2:** `Irrigation installation & repairs in West Kelowna & Kelowna`

**Description paragraph:**
`The Okanagan's dry summers make irrigation less of a luxury and more of a necessity. We install and repair residential irrigation systems — from new installations to seasonal startups, repairs, and winterization. If your system isn't working efficiently, we'll find the problem and fix it properly.`

**Okanagan callout:**
`Okanagan note: Water restrictions are common in West Kelowna and Kelowna during summer months. We design irrigation systems for efficiency — the right zones, the right heads, and a smart timer setup that keeps your yard healthy without running up your water bill or falling offside with local restrictions.`

**What's included (6 items):**
1. New irrigation system design & installation
2. Seasonal system startup
3. Irrigation repairs & troubleshooting
4. System winterization (fall)
5. Zone adjustment & efficiency tuning
6. Smart timer setup & programming

**CTA:** `Get in touch for irrigation →` → `/contact?service=irrigation`

**Image requirements:**
- Irrigation installation in progress or completed system — real project photo
- If no strong irrigation photo available, use a finished lawn with visible irrigation head detail
- WebP format

---

### Section 8 — FAQ Accordion

**Component:** `ServicesFAQ`

**Purpose:** Addresses the seven most common pre-call questions. This section carries significant organic SEO value — Google regularly surfaces FAQ content in rich result snippets. Must include FAQ schema markup (`application/ld+json` with `FAQPage` type) in the page `<head>`.

**Section heading:** `Common questions`

**Questions and answers:**

**Q: Do you serve West Kelowna and Kelowna?**
A: Yes — we serve West Kelowna, Kelowna, Peachland, and Lake Country. If you're unsure whether we cover your area, give us a call or send a quick message.

**Q: How do you approach new projects?**
A: We start with a conversation to understand your needs. For lawn care and cleanup, we can usually discuss over the phone or by email. For landscape design and hardscaping projects, we do a site visit so we can properly assess the space and provide a clear plan before any work begins.

**Q: How long does a landscaping project take?**
A: It depends on the scope. A seasonal cleanup typically takes a few hours to a full day. A lawn care visit is usually 1–2 hours. Landscape design and installation projects range from 2 days for smaller jobs to 2–3 weeks for full yard transformations. We'll give you a clear timeline as part of your written proposal.

**Q: What protections do I have as a client?**
A: Ruta Roots Landscaping carries liability insurance that protects your property. All work is completed professionally and we stand behind our results.

**Q: Do you do one-time jobs or only ongoing contracts?**
A: Both. We offer one-time visits for lawn care, cleanup, and smaller projects with no lock-in contract. We also offer recurring lawn maintenance schedules for clients who want consistent upkeep through the season. No pressure either way.

**Q: What's the best time of year to start a landscaping project in West Kelowna?**
A: For design and installation work, spring (April–May) and early fall (September–October) are ideal — the ground isn't frozen, plants establish well, and crews have availability. Summer works too, though it's our busiest season. For seasonal cleanups, spring window is late March through April, and fall is mid-October through November.

**Q: Do you bring your own equipment and materials?**
A: Yes — we bring everything we need. You don't need to supply anything. For design projects, we'll confirm materials and plant selections with you before ordering so you have full visibility on what's going in your yard.

**Schema markup note:** Implement as `<script type="application/ld+json">` with `@type: "FAQPage"` containing all questions and answers. This enables Google rich result snippets in search results.

---

### Section 9 — Bottom CTA

**Component:** `BottomCTAForm`

**Purpose:** Conversion point for visitors who read the full page. Never end a page without a conversion opportunity — visitors who reach the FAQ have shown high intent.

**Heading:** `Tell us about your project`

**Sub-heading:** `Share a few details and we'll get back to you within 1 business day.`

**Form fields:**
1. Name (required)
2. Phone (required)
3. Service needed (required — dropdown): Lawn care & maintenance / Landscape design & installation / Hardscaping / Seasonal cleanup / Irrigation / Not sure yet
4. Best time to call (optional)

**Submit button copy:** `Get in touch`

**Below button:** `No pressure. We respond within 1 business day.`

**On submit:** Redirect to `/thank-you`

---

## Component List

| Component | File path | Note |
|---|---|---|
| PageHero | `src/ui/PageHero/PageHero.jsx` | New — reusable across Services, About, Projects, Contact |
| ServiceAnchorNav | `src/sections/ServiceAnchorNav/ServiceAnchorNav.jsx` | New |
| ServiceBlock | `src/ui/ServiceBlock/ServiceBlock.jsx` | New — reusable, renders each service section via props |
| MidPageCTA | `src/sections/MidPageCTA/MidPageCTA.jsx` | New |
| ServicesFAQ | `src/sections/ServicesFAQ/ServicesFAQ.jsx` | New — reuses existing `src/ui/Accordion/` |
| BottomCTAForm | `src/ui/BottomCTAForm/BottomCTAForm.jsx` | New — reusable, shared with Home page |

**Note:** `ServiceBlock` is a single reusable component that accepts props to render each service section. It handles the alternating image-left / image-right layout, the optional process steps strip (landscape design only), the optional reassurance bar (landscape design only), and the optional urgency element (seasonal cleanup only).

---

## Image Requirements Summary

| Service | Description | Notes |
|---|---|---|
| Lawn care | Finished lawn, low angle, warm light, mow lines visible | No stock |
| Landscape design | Best full-yard transformation, wide shot | Before/after pair strongly preferred |
| Hardscaping | Retaining wall or patio, full structure in context | Before/after if available |
| Seasonal cleanup | Before/after leaf removal OR crew mid-cleanup | Seasonal context must be visible |
| Irrigation | Installation in progress or completed system | Real project only |

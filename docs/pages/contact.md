# Contact Page

## Page Purpose

The Contact page has one job: remove every reason not to submit. It is the highest-intent page on the site — visitors who navigate here have already decided they want a quote. The page's only task is to make that action as frictionless as possible while providing enough trust reinforcement that a hesitant visitor follows through. It must be stripped of everything that does not directly serve a form submission or a phone call. No navigation clutter, no stock photos, no competing CTAs, no social media feeds.

---

## Route

`/contact`

---

## SEO

**Page title:** `Landscaping Services in West Kelowna & Kelowna | Ruta Roots`

**Meta description:** `Get in touch to discuss your landscaping project in West Kelowna or Kelowna. Fast response, reliable service, no pressure.`

---

## URL Parameter Handling

The Contact page accepts a `?service=` query parameter from per-service CTAs on the Services page. When this parameter is present, the "Service needed" dropdown should be pre-selected to the matching option.

| Parameter value | Dropdown selection |
|---|---|
| `lawn-care` | Lawn care & maintenance |
| `landscape-design` | Landscape design & installation |
| `hardscaping` | Hardscaping |
| `seasonal-cleanup` | Seasonal cleanup |
| `irrigation` | Irrigation |

---

## Sections (in scroll order)

---

### Page Hero

**Component:** `ContactPageHero`

**Purpose:** Reframe the page away from "Contact us" toward the visitor's outcome.

**H1:** `Tell us about your project`

**Sub-heading:** `Reach out to discuss your landscaping needs. We respond within 1 business day.`

**Breadcrumb:** `Home → Contact`

**Design notes:**
- Do NOT title this page "Contact us" — the H1 must be outcome-framed
- No full-bleed image
- Response time promise must appear in the sub-heading, not buried below the form

---

### Section 1 — Two-Column Layout

**Component:** `ContactLayout`

**Purpose:** On desktop, the form occupies the left ~60% and the trust column occupies the right ~40%. Both are visible simultaneously as the visitor fills in the form — trust signals are most valuable at the moment of maximum hesitation (when someone is about to hand over their contact details). On mobile, the layout stacks: phone number first, then form.

---

#### Left column — Quote form

**Component:** `QuoteForm`

**Form heading:** `Tell us about your project`

**Fields (in order):**

1. **Your name** (required)
   - Label: `Your name`
   - Placeholder: `First & last name`
   - Type: text

2. **Phone number** (required)
   - Label: `Phone number`
   - Placeholder: `Best number to reach you`
   - Type: tel
   - Note: This is the primary contact method — phone before email in field order

3. **Email address** (required)
   - Label: `Email address`
   - Placeholder: `We'll send confirmation here`
   - Type: email

4. **Service needed** (required)
   - Label: `Service needed`
   - Type: select / dropdown
   - Options:
     - (Select a service)  ← default placeholder, not selectable
     - Lawn care & maintenance
     - Landscape design & installation
     - Hardscaping
     - Seasonal cleanup
     - Irrigation
     - Not sure yet
   - Pre-select based on `?service=` URL parameter if present

5. **Best time to call** (optional)
   - Label: `Best time to call`
   - Sub-label: `(optional)`
   - Placeholder: `e.g. Weekday mornings`
   - Type: text
   - Note: Optional — do not mark as required. Reduces friction.

**Fields to NOT include:**
- Address (ask on the call, not the form)
- Message / project description (optional at most — never required)
- Budget range (kills conversions — people leave or lie)
- How did you hear about us (analytics provides this)
- Preferred start date (premature, creates friction)

**Submit button:**
- Copy: `Get in touch`
- Full width on mobile
- Accent colour background — must be the most visually prominent element in the form
- Do NOT use: "Submit", "Send", "Contact us", "Request quote"

**Below submit button:**
`No pressure. We respond within 1 business day.`

**Spam prevention:**
- Honeypot hidden field (e.g. `<input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">`)
- Do NOT use CAPTCHA — it kills mobile form completion rates

**On submit behaviour:**
- Validate all required fields client-side before submission
- Show inline field errors (not a top-level error banner) — highlight the specific field
- On successful submission → redirect to `/thank-you`
- On redirect → Google Tag Manager fires conversion event based on `/thank-you` URL

---

#### Right column — Trust signals

**Component:** `ContactTrustColumn`

**Purpose:** Visible alongside the form on desktop. Provides trust reinforcement at the exact moment a visitor is deciding whether to hand over their details. On mobile, these elements appear below the form.

**Phone block (top of right column — large and prominent):**

Label: `Prefer to talk? Call us now`
Phone: `(250) 899-4954` (large, tap-to-call link, `tel:+12508994954`)
Hours: `Mon–Fri 8am–6pm · West Kelowna, BC`

**Divider:** `or fill in the form below` (on mobile only — separates phone block from form)

**Service area list:**
```
Serving:
West Kelowna · Kelowna
Peachland · Lake Country
```

---

### What Must NOT Appear on This Page

The following elements are prohibited — each one pulls attention away from the form and reduces conversion rate:

- Full navigation menu → keep only logo and phone number in the page header on this route
- Stock photos of smiling customer service representatives
- Blog post links or "you might also like" sections
- Social media feed embeds (they pull visitors off the page)
- CAPTCHA on the form
- Newsletter signup field
- Multiple competing CTAs (e.g. a "Follow us on Instagram" button near the form)
- An "About us" paragraph above the form

**Navigation on this page:**
The standard `StickyNav` component should render in a stripped-down variant on `/contact` — logo only on the left, phone number on the right, no page links. This is sometimes called a "squeeze layout." The visitor is on the final conversion page; giving them nav links to other pages is an exit ramp.

---

## Component List

| Component | File path | Note |
|---|---|---|
| ContactPageHero | `src/ui/PageHero/PageHero.jsx` | Reusable PageHero — same component, different props |
| ContactLayout | `src/sections/Contact/ContactLayout.jsx` | New — two-column desktop layout |
| QuoteForm | `src/ui/QuoteForm/QuoteForm.jsx` | New — reusable, shared with Home page BottomCTAForm |
| ContactTrustColumn | `src/sections/Contact/ContactTrustColumn.jsx` | New |

---

## Image Requirements

None. This page must not contain decorative images. The trust column uses text-based trust signals only — no photos, no illustrations. Removing images from this page is intentional; they distract from the form.

---

## Form Validation Rules

| Field | Rule |
|---|---|
| Name | Required. Min 2 characters. |
| Phone | Required. Must match Canadian phone number pattern: `^\+?1?\s*\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$` |
| Email | Required. Standard email format validation. |
| Service | Required. Must be a value other than the default placeholder. |
| Best time to call | Optional. No validation. |
| Honeypot field | Must be empty on submit. If populated, silently discard without showing error. |

---

## Mobile-Specific Requirements

- Phone number must appear ABOVE the form on mobile — not below it, not in the footer
- Phone number must be a `tel:` link (tap-to-call)
- All input fields minimum 44px height (Apple tap target standard)
- Labels must appear ABOVE inputs — not as placeholder text inside the field (placeholder text disappears when typing begins)
- Submit button must be full-width on mobile
- No horizontal scrolling on any screen width

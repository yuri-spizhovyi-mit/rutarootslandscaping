# Ruta Roots Landscaping — Digital Growth System

## Project Goal

Build a complete, high-converting 5-page website for Ruta Roots Landscaping, a residential landscaping company based in West Kelowna, BC. The site must generate local leads (calls and form submissions), support an active Google Ads campaign, and position Ruta Roots as a reliable, professional, locally-rooted business — not a generic cheap landscaping option.

Every page decision must support three outcomes: **trust**, **local authority**, and **lead generation**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| UI library | MUI v6 |
| Routing | React Router v6 |
| Styling | CSS Modules |

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | todo |
| Services | `/services` | todo |
| About / Why Choose Us | `/about` | todo |
| Projects / Gallery | `/projects` | todo |
| Contact | `/contact` | todo |
| Thank You (post-form) | `/thank-you` | todo |

---

## Page Detail Files

- [Home](docs/pages/home.md)
- [Services](docs/pages/services.md)
- [About](docs/pages/about.md)
- [Projects](docs/pages/projects.md)
- [Contact](docs/pages/contact.md)
- [Thank You](docs/pages/thank-you.md)

---

## Global Rules

- Do NOT use stock photos anywhere on the site. Every image must be real Ruta Roots project work.
- Do NOT use generic template-style landscaping layouts.
- Clarity over creativity — every design decision must support conversion.
- Phone number must be visible (tap-to-call on mobile) on every page via sticky nav.

---

## CTA & Messaging Standards

**Primary CTAs (Updated):**
- Main site CTA: **"Get in touch"**
- Contact form button: **"Get in touch"**
- Service block CTAs: **"Get in touch for [service]"** or **"Discuss [service]"**
- Mobile bottom bar: **"Call now"** + **"Get in touch"**

**Removed Language (Do NOT use):**
- ~~"free quote"~~ — replaced with service-focused CTAs
- ~~"free site visit"~~ — replaced with "schedule a site visit"
- ~~"licensed"~~ — only claim "insured" (verified)
- ~~"no obligation"~~ — replaced with "no pressure"
- ~~"no subcontractors"~~ — removed entirely

**Tone & Positioning:**
- Authentic and honest over corporate claims
- Focus on reliability, responsiveness, quality work
- Emphasize personal involvement and direct communication
- Local service area emphasis (West Kelowna & Kelowna)

---

## Conversion Tracking Requirements

Before launch, the following must be configured in Google Tag Manager:

- Form submission fires on `/thank-you` URL load → imported as Google Ads conversion
- Phone number click tracked as Google Ads conversion event
- Scroll depth events configured in GA4
- Form start vs form submit events in GA4

---

## Local SEO Target Keywords

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| Home | landscaping West Kelowna | landscaping Kelowna, landscaping Okanagan |
| Services | lawn care West Kelowna | lawn care Kelowna, landscaping services Kelowna |
| About | landscaping company West Kelowna | local landscaping crew Kelowna |
| Projects | landscaping projects West Kelowna | before after landscaping Okanagan |
| Contact | free landscaping quote West Kelowna | landscaping quote Kelowna |

---

## Service Area

West Kelowna · Kelowna · Peachland · Lake Country

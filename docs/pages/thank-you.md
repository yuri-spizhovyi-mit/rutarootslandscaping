# Thank You Page

## Page Purpose

The Thank You page is not an afterthought — it is a required part of the conversion tracking infrastructure and a second conversion opportunity. It serves three purposes: (1) it confirms to the visitor that their form was received and sets a clear expectation for next steps, (2) its unique URL (`/thank-you`) allows Google Ads and GA4 to fire a conversion event precisely when a lead is generated, and (3) it keeps the visitor engaged with the brand rather than leaving them on a dead-end confirmation screen. This page must exist as a separate route — a same-page success message cannot be tracked as a conversion event by Google Ads.

---

## Route

`/thank-you`

---

## SEO

**Page title:** `Thank you — We'll be in touch | Ruta Roots Landscaping`

**Meta description:** `Your message has been received. We'll review your request and be in touch soon.`

**Robots meta tag:** `noindex, nofollow` — this page should not appear in search results and should not pass link equity. Add `<meta name="robots" content="noindex, nofollow">` to the page `<head>`.

---

## Conversion Tracking

This page's load event is the conversion trigger for Google Ads and GA4.

**Google Tag Manager configuration (must be completed before launch):**

1. Create a GTM trigger: Page View — URL contains `/thank-you`
2. Create a GTM tag: Google Ads Conversion — fires on the above trigger
3. Create a GTM tag: GA4 Event (`form_submission`) — fires on the above trigger
4. Verify in GTM Preview mode that both tags fire on `/thank-you` load and not on any other page

**Do not use the form submit event alone as the conversion trigger.** Form submits can fire on validation errors or failed network requests. The `/thank-you` page load is the reliable signal that a complete submission was received.

---

## Sections

---

### Confirmation Block

**Component:** `ThankYouConfirmation`

**Purpose:** Immediately tells the visitor their submission was received, sets a specific expectation for what happens next, and confirms who will contact them and how.

**Icon or visual:** Simple checkmark or envelope icon — not a stock photo, not a celebration illustration

**Heading:** `Got it — we'll be in touch soon.`

**Body copy:**
`Your request has been received. Someone from our team will call you within 1 business day to talk through your project.`

`If you need to reach us sooner, call us directly at [(250) 899-4954](tel:+12508994954).`

**What this copy must do:**
- Confirm receipt (they submitted successfully)
- State who contacts whom (we call you — not "you'll receive an email")
- Give a specific timeframe ("1 business day" — not "soon" or "shortly")
- Provide an escape valve (direct phone number for impatient visitors)

---

### What Happens Next

**Component:** `NextSteps`

**Purpose:** Removes post-submission anxiety by telling the visitor exactly what to expect. Many people who submit a form immediately wonder "now what?" — answering that question keeps them calm and reduces the chance they call a competitor in the meantime.

**Section heading:** `What happens next`

**Steps (3 items):**

1. **We review your request**
   `We look at the service you selected and any details you provided before we call — so we come prepared, not cold.`

2. **We call you within 1 business day**
   `One of our team will call you at the number you provided. We'll ask a few questions about the project and give you a ballpark on what to expect.`

3. **We schedule a site visit if needed**
   `For design, installation, and hardscaping projects, we'll schedule a site visit to properly assess the space before providing a written plan.`

---

### Keep Exploring (Engagement Section)

**Component:** `PostSubmitEngagement`

**Purpose:** Keep the visitor on the site and building confidence while they wait for the callback. Three low-commitment links that serve different engagement goals.

**Section heading:** `While you wait`

**Links (3 items — cards or simple text links):**

1. **See our recent work**
   `Browse before & after photos from completed projects in West Kelowna and Kelowna.`
   Link: `View projects →` → `/projects`

2. **Read what our clients say**
   `See why West Kelowna homeowners keep coming back to Ruta Roots.`
   Link: `Read reviews →` → `/about#reviews` (or Google Business Profile)

3. **Follow us on Facebook**
   `See work-in-progress photos, seasonal tips, and project reveals.`
   Link: `Follow Ruta Roots →` → `https://www.facebook.com/profile.php?id=61566799927246` (opens in new tab)

---

### Google Review Request (Existing Clients Only — Conditional)

**Component:** `ReviewRequest`

**Purpose:** Passively grows the Google review count by surfacing the review link at a moment when someone has just completed a positive interaction (submitting for a service they want).

**Note:** This block is most appropriate if shown only to returning visitors or existing clients. For a first-time quote submission, it can feel premature. Consider making this section conditional — show it only if a `returning_client` cookie or parameter is present, otherwise hide it.

**If displayed:**

**Heading:** `Already worked with us?`

**Body:** `If you've used Ruta Roots before and had a good experience, we'd really appreciate a Google review. It takes about 2 minutes and helps other West Kelowna homeowners find us.`

**Link:** `Leave a Google review →` → Google Business Profile review URL (opens in new tab)

---

## Component List

| Component | File path | Note |
|---|---|---|
| ThankYouConfirmation | `src/sections/ThankYou/ThankYouConfirmation.jsx` | New |
| NextSteps | `src/sections/ThankYou/NextSteps.jsx` | New |
| PostSubmitEngagement | `src/sections/ThankYou/PostSubmitEngagement.jsx` | New |
| ReviewRequest | `src/sections/ThankYou/ReviewRequest.jsx` | New — conditional display |

---

## Image Requirements

None. This is a confirmation page — no decorative images. A simple icon (checkmark or envelope, inline SVG) is sufficient for the confirmation block. Keep the page visually simple so the confirmation message is the clear focus.

---

## Mobile-Specific Requirements

- Confirmation heading must be visible without scrolling on all screen sizes
- Phone number in the confirmation block must be a `tel:` link (tap-to-call)
- Engagement section links must be large enough tap targets (min 44px height)
- Page should not display the stripped-down nav used on `/contact` — return to the standard `StickyNav` so the visitor can continue browsing normally

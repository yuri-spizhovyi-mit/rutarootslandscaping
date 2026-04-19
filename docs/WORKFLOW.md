# Implementation Workflow Guide

**Quick Reference for Running Implementation Sessions**

---

## Overview

This guide explains how to use the `/swe` skill to drive implementation of the multi-page Ruta Roots website. The workflow is designed to be **self-contained and repeatable** — Claude reads the necessary documents, builds the next component, and updates the tracker.

---

## Prerequisites

Before you start, ensure these files exist and are up-to-date:

- ✅ `PLAN.md` — Project goals, CTA standards
- ✅ `IMPLEMENTATION.md` — Build tracker and status
- ✅ `docs/DESIGN_SYSTEM.md` — Visual design reference
- ✅ `docs/pages/*.md` — Content specs (home, services, about, projects, contact, thank-you)
- ✅ `.claude/skills/swe/SKILL.md` — SWE skill definition
- ✅ `archive/current-site` branch — Reference implementation

---

## Step-by-Step Workflow

### **1. Start a New Session**

Open Claude Code and invoke the SWE skill:

```
/swe Start implementation of the next pending component
```

Or for a specific page:

```
/swe Start implementation of the Contact page
```

---

### **2. Claude Reviews & Proposes**

Claude reads the docs and presents a **plan for approval**:

> **Plan Summary**
> - **Component:** HeroSection (Home page)
> - **Reusing:** PageHero component from existing code
> - **New components:** HeroSection wrapper, custom styling
> - **Key requirements:** 
>   - Full-width background image (responsive)
>   - H1 headline + sub-heading
>   - 2 CTAs (primary button + secondary link)
>   - Mobile responsive (tested at 480px, 768px)
> - **Design reference:** Colors from DESIGN_SYSTEM.md, spacing grid
> 
> **Can I proceed with implementation?**

**You review the plan and:**
- ✅ Approve → Claude starts building
- ❌ Request changes → Claude adjusts the plan
- ❓ Ask questions → Claude clarifies before building

---

### **3. Claude Automatically Builds** (After Approval)

Claude reads the workflow instructions from `SKILL.md` and follows this order:

1. **Read `IMPLEMENTATION.md`**
   - Identifies the next `pending` task from "Build Order"
   - Checks component statuses
   - Understands what's already `done`

2. **Read `PLAN.md`**
   - Reviews project goals
   - Checks CTA standards and global rules
   - Understands brand messaging

3. **Read `docs/DESIGN_SYSTEM.md`**
   - Extracts color palette (CSS variables)
   - Understands typography, spacing, layout grid
   - Reviews existing component patterns

4. **Read `docs/pages/<page>.md`**
   - Understands the specific page structure
   - Gets content specs, CTAs, image requirements
   - Sees component breakdown

5. **Review existing code**
   - Checks `src/sections/`, `src/ui/`, `src/data/` for reusable patterns
   - Verifies current project structure

---

### **3. Claude Builds**

Based on the above, Claude:
- Creates/updates React components in `src/sections/`, `src/ui/`, `src/pages/`
- Writes CSS Modules matching `DESIGN_SYSTEM.md`
- Uses data from `src/data/` files
- Follows SKILL.md coding standards (no TODOs, production-ready)

---

### **4. You Verify** (Optional but Recommended)

While Claude builds, you can:

```bash
# Start dev server in another terminal
npm run dev

# Visit http://localhost:5173 to see the work
```

Check for:
- ✅ Visual appearance matches DESIGN_SYSTEM.md
- ✅ Content matches the page spec
- ✅ Mobile responsive (test at 480px, 768px)
- ✅ No console errors
- ✅ Links and CTAs work

---

### **5. Claude Updates & Commits**

When done, Claude automatically:

1. **Updates `IMPLEMENTATION.md`**
   - Flips status from `pending` → `done`
   - Adds session log entry with what was built
   - Notes any blockers in "Open Issues"

2. **Commits to git**
   ```bash
   git add .
   git commit -m "Build [component/page]: brief description"
   ```

3. **Reports completion**
   - Tells you what was built
   - Points out any issues found
   - Ready for next session

---

## Running Multiple Sessions

### Session 1: Build Home Page
```
/swe Start implementation of the Home page
```

Claude will:
- Find "Home page rebuild" in IMPLEMENTATION.md as pending
- Build HeroSection, ServicesOverview, ReviewsSection, etc.
- Commit with session notes

### Session 2: Build Services Page
```
/swe Start implementation of the Services page
```

Claude will:
- Find "Services page" in IMPLEMENTATION.md as pending
- Build ServicesList, ServiceBlock components, etc.
- Commit with session notes

### Session 3: Build Contact Page
```
/swe Start implementation of the Contact page
```

And so on...

---

## What to Do If Something Goes Wrong

### Issue: Claude doesn't know what to build next
**Solution:** Check `IMPLEMENTATION.md` Build Order section — make sure tasks are clearly marked `pending` or `done`

### Issue: Build doesn't match design
**Solution:** Reference `docs/DESIGN_SYSTEM.md` — check if colors, spacing, or typography are off

### Issue: Content doesn't match spec
**Solution:** Check `docs/pages/<page>.md` — verify the spec matches what was built

### Issue: Component path is wrong
**Solution:** Reference `IMPLEMENTATION.md` Key Conventions section — verify naming and directory structure

---

## File Reference Quick Links

| Document | When to Check |
|----------|---------------|
| `PLAN.md` | CTA language, global rules, brand standards |
| `IMPLEMENTATION.md` | What to build next, component paths, image inventory |
| `DESIGN_SYSTEM.md` | Colors, fonts, spacing, responsive breakpoints |
| `docs/pages/*.md` | Content, structure, CTAs, image requirements |
| `.claude/skills/swe/SKILL.md` | Coding standards, file structure, workflow |
| `archive/current-site` branch | Reference code, existing component patterns |

---

## Tips for Best Results

1. **Keep IMPLEMENTATION.md updated**
   - Mark tasks `done` as soon as they're complete
   - Add blockers to "Open Issues" if found
   - Keep session log entries brief but descriptive

2. **Reference DESIGN_SYSTEM.md early**
   - Print out the color palette and spacing values
   - Keep typography sizes handy
   - Check responsive breakpoints before building

3. **Test in browser frequently**
   - `npm run dev` while Claude builds
   - Catch design issues early
   - Verify responsive behavior on mobile

4. **Commit often**
   - One component or section per commit
   - Easier to review and revert if needed
   - Cleaner git history

5. **Update IMPLEMENTATION.md session log**
   - What was built
   - How long it took
   - Any challenges or learnings
   - Next recommended step

---

## Example Session Log Entry

```markdown
### 2026-04-20 — Home page Hero and Services sections
- Built HeroSection component with responsive background images
- Created ServicesPreview with 3-card layout
- Updated color variables in Hero.module.css to match DESIGN_SYSTEM.md
- Tested responsive at 480px, 768px, 1920px — all working
- Next: Build ReviewsSection and local authority section
```

---

## Ready to Start?

1. Ensure all prerequisite files are up-to-date
2. Open Claude Code
3. Run: `/swe Start implementation of the next pending component`
4. Claude handles the rest!

For detailed project info, see:
- `PLAN.md` — Project overview
- `IMPLEMENTATION.md` — Build tracker
- `docs/DESIGN_SYSTEM.md` — Visual design

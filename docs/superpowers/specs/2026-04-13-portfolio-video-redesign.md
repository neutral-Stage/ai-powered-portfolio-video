# Portfolio Video Redesign — Design Spec
**Date:** 2026-04-13  
**Project:** Remotion Portfolio Showcase Video  
**Goal:** Update content from resume + restructure narrative to be differentiating and compelling enough that a client wants to hire after watching.

---

## Problem

The current 35-second video is accurate but reads like an animated résumé slideshow. It lists skills and roles without a hook, a narrative thread, or a clear reason why Shuvo is different from any other capable developer. Content is also stale — two new projects (TYPO SIEGE, AI-Powered Portfolio Video), a full prior role (Matthew Luke Studio), and an expanded skill set from the new resume are missing.

## Success Criteria

- A client watching for the first time feels: *"This person is different from every other developer I've seen."*
- Works across all contexts: LinkedIn autoplay, portfolio site hero, direct outreach attachment.
- All content matches the current resume exactly.
- The video is as long as it needs to be to be compelling — not padded, not cut short.

---

## Approach: A+B Hybrid — "Meta Demo meets Outcomes-First"

**Meta hook (Approach A):** The video opens by revealing itself as proof of skill — "What you're watching was built in React + Remotion by the person you're about to hire." This happens before Shuvo's name appears. It costs ~2.5 seconds and permanently reframes how the viewer reads everything that follows.

**Outcomes-first framing (Approach B):** Every scene leads with client value, not credentials. Proof points lead with business impact. Roles lead with what was shipped. The CTA is "Send the brief" — not "Contact me."

---

## Scene Structure

| # | Scene | Duration | Key Change |
|---|-------|----------|------------|
| 1 | IntroScene | 180f (6s) | Meta hook pre-reveal (75f), then existing layout slides in |
| 2 | ProofScene (AboutScene) | 150f (5s) | Reframed headline: outcomes-first language |
| 3 | SkillsScene | 150f (5s) | Expanded stack from resume, framed as range |
| 4 | ExperienceScene | 180f (6s) | 4 roles in 2×2 grid, Matthew Luke Studio added |
| 5 | ProjectsScene | 210f (7s) | 6 projects in 3×2 grid, TYPO SIEGE + AI-Powered Portfolio Video added |
| 6 | StatsScene | 150f (5s) | Hiring reasons — sharper, punchier headlines |
| 7 | ContactScene | 210f (7s) | "Send the brief" CTA, education callout added |

**Total:** 1230f content + 6 × 20f transitions = **1350f (~45 seconds)**  
**`SHOWCASE_DURATION_IN_FRAMES`:** 1050 → 1350

---

## Content Changes

### `introTags`
```ts
["React", "Next.js", "Node.js", "Sanity", "AI Workflows", "Astro", "Svelte"]
```
("Remote Ready" removed — covered by availability tags)

### `proofPoints` — reframed for client impact
| Value | Label | Detail |
|-------|-------|--------|
| 300% | conversion lift | Redesigned upgrade flow for Operation Nation |
| 95+ | Lighthouse score | 40% faster loads across 15+ device categories |
| 1,000+ | users on auth | JWT & OAuth flows shipped, zero rework needed |
| 9+ yrs | shipping product | Startups, agencies, client teams — all remote |

### `focusAreas` — expanded tool lists
- **SaaS Product UI:** React, Next.js, TypeScript, Tailwind, Panda CSS, Svelte, Astro
- **CMS-Backed Websites:** Sanity, Payload, Astro, SEO, Schema Markup
- **AI Product Workflows:** OpenAI, Azure, Gemini, MCP, Prompt Design (unchanged)
- **Backend and Delivery:** Node.js, Supabase, PostgreSQL, WebSockets, FastAPI, Redis, GitHub Actions

### `recentRoles` — Matthew Luke Studio added as 4th role
```ts
{
  company: "Matthew Luke Studio",
  role: "Full Stack Developer",
  meta: "Jan 2021 - Aug 2022  |  Hackleton, UK  |  Full-time",
  summary: "Built bespoke client websites, ecommerce storefronts, and CMS-driven apps with modern JavaScript stacks.",
  wins: [
    "Delivered 12 custom web apps using React, Node.js, Express.js, and MongoDB",
    "Built 5 Shopify storefronts with custom React components and Storefront API integration",
  ],
  tone: "rose",
}
```

### `selectedProjects` — 2 new entries (total: 6)
```ts
{
  title: "TYPO SIEGE",
  category: "Browser game / creative build",
  summary: "Canvas + TypeScript typing game with wave logic, power-ups, and zero-dependency sound. Shows range beyond product work.",
  stack: ["Canvas API", "TypeScript", "Sound Design"],
  tone: "gold",
},
{
  title: "AI-Powered Portfolio Video",
  category: "Meta · this video",
  summary: "You're watching it. Programmatic video built with React and Remotion — AI-assisted narration, animated scenes, shipped as open source.",
  stack: ["Remotion", "React", "AI"],
  tone: "sky",
},
```

### `hiringReasons` — sharper headlines
| Title | Body |
|-------|------|
| Ships without hand-holding | Scoped decisions, async updates, no chasing. |
| Product thinking, not just code | I focus on conversion, clarity, and delivery velocity. |
| Full-stack range | SaaS features, CMS builds, AI workflows, perf cleanup. |
| Available now | Remote full-time, contract, or freelance — send the brief. |

---

## Scene Implementation Details

### Scene 1 — IntroScene (180f)

**New pre-reveal phase (frames 0–75):**
- Frames 0–15: Line 1 fades in — `"What you're watching was built in React + Remotion"`
- Frames 8–23: Line 2 fades in — `"by the person you're about to hire."`
- Frames 60–75: Both lines fade out
- Frames 75–180: Existing layout animates in (all existing frame references shifted +75)

**Implementation:** Add a pre-reveal overlay div that's `position: absolute, inset: 0` centered layout. Use `interpolate` for per-line fade-in and a single fade-out. The existing layout's `reveal` interpolation starts from frame 75 instead of frame 0.

**Exit interpolation:** The current `exit = interpolate(frame, [118, 135], [1, 0])` must be updated to `interpolate(frame, [160, 180], [1, 0])` — proportionally shifted to fit the new 180f duration. Do NOT flat-shift by +75 (that would place the exit at [193, 210], beyond the scene boundary). The exit window is `[160, 180]`.

### Scene 4 — ExperienceScene (180f)

**Layout change:** `repeat(3, 1fr)` → `repeat(2, 1fr)`  
**Card height:** `minHeight: 500` → `minHeight: 380`  
**Footer bar:** "Earlier foundation" gold bar becomes a compact single line: *"Earlier: Matthew Luke Studio (2021), 123workforce (2019), Boi Kotha (2018), Code Builder IT (2016)"* — Matthew Luke Studio is now a full card so this bar just holds the 3 older entries.  
**Stagger timing:** 4 cards, keep `index * 8` — same feel, slightly tighter.

### Scene 5 — ProjectsScene (210f)

**Layout change:** `repeat(2, 1fr)` → `repeat(3, 1fr)`  
**Card height:** `minHeight: 285` → `minHeight: 260` (not 240 — content at fontSize 42 title + category + 2-line summary + tags + gaps measures ~279px minimum, so 260 is safe with compact copy; 240 would overflow)  
**New project summary copy must be kept to ≤2 lines** at fontSize 22 to stay within 260px. TYPO SIEGE and AI-Powered Portfolio Video summaries above are already written to fit.  
**Special badge on AI-Powered Portfolio Video card:** Replace the tone dot with a glowing `<Tag>` reading `"★ This video"` using `tone: "sky"`.  
**Stagger timing:** 6 cards, change `index * 8` → `index * 5` to fit all within 210f.

### Scene 7 — ContactScene (210f)

**Heading rewrite:**
```
"Send the brief."
"I'll reply with next steps."
```
(Two separate lines, same large type treatment, slightly smaller font: 80px vs current 92px to fit two punchy lines)

**Sub-copy rewrite:**
```
"Strongest fit: React, Next.js, Node.js, Sanity, AI-assisted product work, and 
performance-focused delivery. Remote full-time, contract, or freelance."
```

**Education card:** Add a 4th mini-card into the existing bottom row alongside Location/GitHub/LinkedIn:
```ts
{ label: "Education", value: "B.Sc. CSE · National University of Bangladesh · 2018", tone: "sky" }
```
The bottom grid becomes `repeat(4, 1fr)` — Education sits as the 4th column in the same row as Location, GitHub, and LinkedIn. At 1920px total width, the right column (~1130px) divided into 4 cards with 18px gaps = ~270px per card, which accommodates the education text comfortably.

---

## Files to Change

| File | Change Type |
|------|-------------|
| `src/remotion/Showcase/content.ts` | Content update — all fields above |
| `src/remotion/Showcase/scenes/IntroScene.tsx` | Add meta hook pre-reveal phase, update exit interpolation to `[160, 180]` |
| `src/remotion/Showcase/scenes/ExperienceScene.tsx` | 2×2 grid, 4 roles, updated footer |
| `src/remotion/Showcase/scenes/ProjectsScene.tsx` | 3×2 grid, 6 projects, special badge, minHeight 260 |
| `src/remotion/Showcase/scenes/ContactScene.tsx` | New CTA copy, 4-column bottom row with education card |
| `src/remotion/Showcase/ShowcaseVideo.tsx` | Update IntroScene sequence 135→180, ContactScene sequence 195→210 |
| `types/constants.ts` | `SHOWCASE_DURATION_IN_FRAMES` 1050 → 1350 |

**No changes needed:** `theme.ts`, `shared.tsx`, `AboutScene.tsx`, `SkillsScene.tsx`, `StatsScene.tsx`

---

## Non-Goals

- No audio/narration added
- No new Remotion packages
- No design system changes (theme, fonts, shared components unchanged)
- No changes to scenes not listed above

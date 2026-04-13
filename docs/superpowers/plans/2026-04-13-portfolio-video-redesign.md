# Portfolio Video Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Remotion portfolio showcase video with a meta hook opening, outcomes-first narrative framing, and full content sync from the latest resume.

**Architecture:** All content lives in `content.ts` (pure data, no JSX). Scene components consume that data and own their own layout/animation logic. `ShowcaseVideo.tsx` owns sequence durations. `constants.ts` owns the total composition duration. Changes are strictly additive within each file — no shared components are modified.

**Tech Stack:** Remotion, React, TypeScript, @remotion/transitions, @remotion/google-fonts

---

## File Map

| File | What changes |
|------|-------------|
| `src/remotion/Showcase/content.ts` | All copy/data — introTags, proofPoints, focusAreas, recentRoles (add Matthew Luke Studio), selectedProjects (add TYPO SIEGE + AI-Powered Portfolio Video), hiringReasons |
| `src/remotion/Showcase/scenes/IntroScene.tsx` | Add 75-frame meta hook pre-reveal phase; shift existing animations to start at frame 75; update exit to `[160, 180]` |
| `src/remotion/Showcase/scenes/ExperienceScene.tsx` | Grid 3-col → 2×2; add Matthew Luke Studio card; update footer bar to 3 older entries only |
| `src/remotion/Showcase/scenes/ProjectsScene.tsx` | Grid 2×2 → 3×2; add 2 new project cards; special "★ This video" badge on AI-Powered Portfolio Video; minHeight 260 |
| `src/remotion/Showcase/scenes/ContactScene.tsx` | New CTA headline copy; updated sub-copy; education card added as 4th column in bottom row |
| `src/remotion/Showcase/ShowcaseVideo.tsx` | IntroScene sequence 135→180; ContactScene sequence 195→210 |
| `types/constants.ts` | `SHOWCASE_DURATION_IN_FRAMES` 1050→1350 |

---

## Task 1: Update all content data in `content.ts`

**Files:**
- Modify: `src/remotion/Showcase/content.ts`

- [ ] **Step 1: Replace the full contents of `content.ts`**

Open `src/remotion/Showcase/content.ts` and replace the entire file with:

```ts
export const profile = {
  name: "Shuvo Anirban Roy",
  role: "Full-Stack JavaScript Developer",
  availability: ["Remote full-time", "Contract", "Freelance"],
  headline:
    "I build fast, conversion-focused web products for startups, agencies, and client teams.",
  summary:
    "React, Next.js, Node.js, Sanity, and AI-assisted workflows with strong performance, clean UX, and reliable async delivery.",
  location: "Dhaka, Bangladesh",
  website: "shuvoanirbanroy.com",
  email: "anirbanroy691@gmail.com",
  github: "github.com/neutral-Stage",
  linkedin: "linkedin.com/in/shuvo-anirban-roy",
} as const;

export const introTags = [
  "React",
  "Next.js",
  "Node.js",
  "Sanity",
  "AI Workflows",
  "Astro",
  "Svelte",
] as const;

export const proofPoints = [
  {
    value: "300%",
    label: "conversion lift",
    detail: "Redesigned upgrade flow for Operation Nation",
    tone: "orange",
  },
  {
    value: "95+",
    label: "Lighthouse score",
    detail: "40% faster loads across 15+ device categories",
    tone: "sky",
  },
  {
    value: "1,000+",
    label: "users on auth",
    detail: "JWT & OAuth flows shipped, zero rework needed",
    tone: "mint",
  },
  {
    value: "10+ yrs",
    label: "shipping product",
    detail: "Startups, agencies, client teams — all remote",
    tone: "gold",
  },
] as const;

export const focusAreas = [
  {
    title: "SaaS Product UI",
    blurb:
      "Polished interfaces, upgrade flows, design systems, and frontends that explain the product clearly.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Panda CSS", "Svelte", "Astro"],
    tone: "sky",
  },
  {
    title: "CMS-Backed Websites",
    blurb:
      "Marketing sites and editorial systems that stay maintainable for content teams and still perform well.",
    tools: ["Sanity", "Payload", "Astro", "SEO", "Schema Markup"],
    tone: "orange",
  },
  {
    title: "AI Product Workflows",
    blurb:
      "Multi-agent flows, prompt tuning, editor automation, and MCP-style tooling for real product usage.",
    tools: ["OpenAI", "Azure", "Gemini", "MCP", "Prompt Design"],
    tone: "mint",
  },
  {
    title: "Backend and Delivery",
    blurb:
      "APIs, auth, realtime features, CI, and performance tuning that keep launches reliable under pressure.",
    tools: ["Node.js", "Supabase", "PostgreSQL", "WebSockets", "FastAPI", "Redis", "GitHub Actions"],
    tone: "rose",
  },
] as const;

export const recentRoles = [
  {
    company: "Presentia AI",
    role: "Lead AI Engineer",
    meta: "Dec 2024 - Present  |  London, UK  |  Contract",
    summary:
      "Built AI-assisted product workflows and editor experiences for a presentation platform focused on speed, usability, and production output.",
    wins: [
      "Multi-agent workflows with OpenAI, Azure, and Gemini",
      "Canva-inspired editor turning prompts into production-ready decks",
    ],
    tone: "sky",
  },
  {
    company: "Operation Nation",
    role: "Full Stack Developer",
    meta: "Sep 2022 - Present  |  Phoenix, AZ  |  Full-time",
    summary:
      "Delivered product and marketing builds across AI presentation tooling, reusable UI systems, and CMS-driven websites.",
    wins: [
      "300% conversion lift on the AI presentation upgrade flow",
      "Released a Sanity SEO plugin and no-code website builder",
    ],
    tone: "orange",
  },
  {
    company: "BuiltForYou Digital",
    role: "Senior Full Stack Developer",
    meta: "Feb 2025 - Oct 2025  |  Remote  |  Full-time",
    summary:
      "Delivered marketing and streaming products with strong performance targets, secure authentication, and production-ready data infrastructure.",
    wins: [
      "40% faster page loads and 95+ Lighthouse scores across 15+ device categories",
      "Auth systems for 1,000+ users with MakerKit and Supabase",
    ],
    tone: "mint",
  },
  {
    company: "Matthew Luke Studio",
    role: "Full Stack Developer",
    meta: "Jan 2021 - Aug 2022  |  Hackleton, UK  |  Full-time",
    summary:
      "Built bespoke client websites, ecommerce storefronts, and CMS-driven apps with modern JavaScript stacks.",
    wins: [
      "Delivered 12 custom web apps using React, Node.js, Express.js, and MongoDB",
      "Built 5 Shopify storefronts with custom React components and Storefront API integration",
    ],
    tone: "rose",
  },
] as const;

export const selectedProjects = [
  {
    title: "Remotion Captioneer",
    category: "Open-source video tooling",
    summary:
      "Word-level synced subtitles, animated presets, and multi-provider transcription workflows for Remotion projects.",
    stack: ["Remotion", "TypeScript", "Captions"],
    tone: "sky",
  },
  {
    title: "TYPO SIEGE",
    category: "Browser game / creative build",
    summary:
      "Canvas + TypeScript typing game with wave logic, power-ups, and zero-dependency sound. Shows range beyond product work.",
    stack: ["Canvas API", "TypeScript", "Sound Design"],
    tone: "gold",
  },
  {
    title: "Gmail MCP Server",
    category: "AI workflow tooling",
    summary:
      "Privacy-first Gmail MCP server for search, read, send, labels, and batch email actions in local agent workflows.",
    stack: ["MCP", "OAuth", "Node.js"],
    tone: "orange",
  },
  {
    title: "Church Finance",
    category: "Full-stack dashboard",
    summary:
      "Funds, transactions, contributions, reporting, and role-based access in a Next.js and Supabase product.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    tone: "mint",
  },
  {
    title: "AI-Powered Portfolio Video",
    category: "Meta · this video",
    summary:
      "You're watching it. Programmatic video built with React and Remotion — AI-assisted narration, animated scenes, shipped as open source.",
    stack: ["Remotion", "React", "AI"],
    tone: "sky",
  },
  {
    title: "Sanity Plugin Schema Markup",
    category: "CMS + SEO tooling",
    summary:
      "Structured data management directly inside the CMS workflow so teams can ship schema without hardcoding every case.",
    stack: ["Sanity", "SEO", "TypeScript"],
    tone: "rose",
  },
] as const;

export const hiringReasons = [
  {
    title: "Ships without hand-holding",
    body: "Scoped decisions, async updates, no chasing.",
    tone: "sky",
  },
  {
    title: "Product thinking, not just code",
    body: "I focus on conversion, clarity, and delivery velocity.",
    tone: "orange",
  },
  {
    title: "Full-stack range",
    body: "SaaS features, CMS builds, AI workflows, perf cleanup.",
    tone: "mint",
  },
  {
    title: "Available now",
    body: "Remote full-time, contract, or freelance — send the brief.",
    tone: "gold",
  },
] as const;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm tsc --noEmit
```

Expected: no errors. If there are errors they will be in the scene files that consume the new data shapes — note them but don't fix them yet (later tasks handle each scene file).

- [ ] **Step 3: Commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add src/remotion/Showcase/content.ts
git commit -m "feat: update all portfolio content from resume — new projects, roles, skills, proof points"
```

---

## Task 2: Update `constants.ts` and `ShowcaseVideo.tsx` sequence durations

**Files:**
- Modify: `types/constants.ts`
- Modify: `src/remotion/Showcase/ShowcaseVideo.tsx`

- [ ] **Step 1: Update `SHOWCASE_DURATION_IN_FRAMES` in `constants.ts`**

Open `types/constants.ts`. Change line:
```ts
// Before
export const SHOWCASE_DURATION_IN_FRAMES = 1050; // 35 seconds
```
To:
```ts
export const SHOWCASE_DURATION_IN_FRAMES = 1350; // ~45 seconds
```

- [ ] **Step 2: Update sequence durations in `ShowcaseVideo.tsx`**

Open `src/remotion/Showcase/ShowcaseVideo.tsx`. Make two changes:

Change IntroScene sequence duration:
```tsx
// Before
<TransitionSeries.Sequence durationInFrames={135}>
    <IntroScene />
</TransitionSeries.Sequence>
```
```tsx
// After
<TransitionSeries.Sequence durationInFrames={180}>
    <IntroScene />
</TransitionSeries.Sequence>
```

Change ContactScene sequence duration:
```tsx
// Before
<TransitionSeries.Sequence durationInFrames={195}>
    <ContactScene />
</TransitionSeries.Sequence>
```
```tsx
// After
<TransitionSeries.Sequence durationInFrames={210}>
    <ContactScene />
</TransitionSeries.Sequence>
```

- [ ] **Step 3: Verify the total adds up**

Mental check: 180+150+150+180+210+150+210 = 1230 content frames + 6×20 transition frames = 1350. Matches the constant.

- [ ] **Step 4: Commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add types/constants.ts src/remotion/Showcase/ShowcaseVideo.tsx
git commit -m "feat: update composition duration to 1350f (~45s) and scene sequence lengths"
```

---

## Task 3: Add meta hook pre-reveal to `IntroScene.tsx`

**Files:**
- Modify: `src/remotion/Showcase/scenes/IntroScene.tsx`

The current scene is 135f. It becomes 180f. A 75-frame pre-reveal phase is prepended. The existing animations shift to start at frame 75. The exit interpolation changes from `[118, 135]` to `[160, 180]`.

- [ ] **Step 1: Replace `IntroScene.tsx` with the updated version**

```tsx
import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { introTags, profile } from "../content";
import { Eyebrow, GlassCard, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Pre-reveal phase (frames 0–75) ---
  const line1In = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line2In = interpolate(frame, [8, 23], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hookOut = interpolate(frame, [60, 75], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Main layout phase (frames 75–180) ---
  // "reveal" drives the slide-in; starts animating at frame 75
  const reveal = interpolate(frame, [75, 93], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // "exit" fades out the layout before the transition at the end of the 180f scene
  const exit = interpolate(frame, [160, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const leftShift = interpolate(reveal, [0, 1], [48, 0]);
  const photoFloat = Math.sin(frame / (fps * 0.55)) * 18;

  return (
    <ShowcaseShell frame={frame} justifyContent="center">
      {/* Pre-reveal hook overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          opacity: hookOut,
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 52,
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            color: theme.colors.text.primary,
            textAlign: "center",
            opacity: line1In,
            transform: `translateY(${interpolate(line1In, [0, 1], [20, 0])}px)`,
          }}
        >
          What you're watching was built in React + Remotion
        </div>
        <div
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 52,
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            color: theme.colors.tones.sky,
            textAlign: "center",
            opacity: line2In,
            transform: `translateY(${interpolate(line2In, [0, 1], [20, 0])}px)`,
          }}
        >
          by the person you're about to hire.
        </div>
      </div>

      {/* Main layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 44,
          alignItems: "center",
          opacity: exit * reveal,
          transform: `translateY(${interpolate(reveal, [0, 1], [30, 0])}px)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            transform: `translateX(${leftShift}px)`,
            opacity: reveal,
          }}
        >
          <Eyebrow label={profile.availability.join("  •  ")} />

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h1
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 110,
                lineHeight: 0.92,
                letterSpacing: "-0.065em",
                margin: 0,
              }}
            >
              {profile.name}
            </h1>
            <div
              style={{
                fontFamily: theme.fonts.mono,
                color: theme.colors.tones.sky,
                fontSize: 28,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {profile.role}
            </div>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: 880,
              color: theme.colors.text.secondary,
              fontSize: 31,
              lineHeight: 1.42,
            }}
          >
            {profile.headline}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {introTags.map((tag, index) => {
              const tagIn = interpolate(frame, [93 + index * 4, 107 + index * 4], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  key={tag}
                  style={{
                    opacity: tagIn,
                    transform: `translateY(${interpolate(tagIn, [0, 1], [20, 0])}px)`,
                  }}
                >
                  <Tag
                    label={tag}
                    tone={index % 3 === 0 ? "sky" : index % 3 === 1 ? "orange" : "mint"}
                  />
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
              maxWidth: 760,
            }}
          >
            <GlassCard tone="orange" style={{ padding: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    color: theme.colors.tones.orange,
                    fontFamily: theme.fonts.mono,
                    fontSize: 17,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Delivery Focus
                </div>
                <div
                  style={{
                    fontSize: 27,
                    lineHeight: 1.3,
                    color: theme.colors.text.primary,
                    fontWeight: 800,
                  }}
                >
                  SaaS features, CMS builds, AI-assisted tooling, and performance cleanup.
                </div>
              </div>
            </GlassCard>

            <GlassCard tone="sky" style={{ padding: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    color: theme.colors.tones.sky,
                    fontFamily: theme.fonts.mono,
                    fontSize: 17,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Working Style
                </div>
                <div
                  style={{
                    fontSize: 27,
                    lineHeight: 1.3,
                    color: theme.colors.text.primary,
                    fontWeight: 800,
                  }}
                >
                  Remote-ready, fast to respond, and comfortable shipping async with distributed teams.
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 760,
            opacity: reveal,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 640,
              height: 640,
              borderRadius: 999,
              border: `1px solid ${theme.colors.tones.sky}22`,
              transform: `translateY(${photoFloat * 0.6}px)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 560,
              height: 560,
              borderRadius: 999,
              border: `1px solid ${theme.colors.tones.orange}22`,
              transform: `translateY(${photoFloat}px)`,
            }}
          />
          <GlassCard
            tone="sky"
            style={{
              width: 560,
              padding: 24,
              borderRadius: 40,
              transform: `translateY(${photoFloat}px)`,
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 30,
                overflow: "hidden",
                background: "linear-gradient(180deg, rgba(15,23,42,0.5), rgba(15,23,42,0.9))",
              }}
            >
              <Img
                src={staticFile("shuvo.png")}
                style={{
                  width: "100%",
                  height: 620,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 18 }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 16,
                    letterSpacing: "0.06em",
                    color: theme.colors.tones.sky,
                    textTransform: "uppercase",
                  }}
                >
                  Base
                </div>
                <div style={{ fontSize: 24, color: theme.colors.text.primary, fontWeight: 700 }}>
                  {profile.location}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 16,
                    letterSpacing: "0.06em",
                    color: theme.colors.tones.orange,
                    textTransform: "uppercase",
                  }}
                >
                  Contact
                </div>
                <div style={{ fontSize: 24, color: theme.colors.text.primary, fontWeight: 700 }}>
                  {profile.website}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </ShowcaseShell>
  );
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm tsc --noEmit
```

Expected: no errors on IntroScene.

- [ ] **Step 3: Preview in Remotion Studio**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm dev
```

Open browser → select "Showcase" composition → scrub to frame 0. Verify:
- Frames 0–60: two lines of text visible and centered, fading in
- Frames 60–75: lines fade out
- Frame 80+: main layout with name/photo slides in
- Frame 160+: layout fades out heading into transition

- [ ] **Step 4: Commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add src/remotion/Showcase/scenes/IntroScene.tsx
git commit -m "feat: add meta hook pre-reveal to IntroScene — 75f hook before name/photo reveal"
```

---

## Task 4: Update `ExperienceScene.tsx` — 4-role 2×2 grid

**Files:**
- Modify: `src/remotion/Showcase/scenes/ExperienceScene.tsx`

- [ ] **Step 1: Replace `ExperienceScene.tsx`**

```tsx
import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { recentRoles } from "../content";
import { BulletRow, Eyebrow, GlassCard, SectionHeading, ShowcaseShell } from "../shared";
import { theme } from "../theme";

export const ExperienceScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ShowcaseShell frame={frame}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Eyebrow label="Career snapshot" />
        <SectionHeading
          title="Recent"
          accent="roles"
          body="The strongest hiring signal is in the current stack: AI product work, conversion-focused UX, performance tuning, and modern full-stack delivery."
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 24,
        }}
      >
        {recentRoles.map((role, index) => {
          const cardIn = interpolate(frame, [12 + index * 8, 28 + index * 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={role.company}
              style={{
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [38, 0])}px)`,
              }}
            >
              <GlassCard tone={role.tone} style={{ minHeight: 380 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 15,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: theme.colors.tones[role.tone],
                    }}
                  >
                    {role.meta}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div
                      style={{
                        fontFamily: theme.fonts.heading,
                        fontSize: 42,
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {role.role}
                    </div>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: theme.colors.tones[role.tone],
                      }}
                    >
                      {role.company}
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 22,
                      lineHeight: 1.45,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    {role.summary}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {role.wins.map((win) => (
                      <BulletRow key={win} text={win} tone={role.tone} />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>

      <GlassCard tone="gold" style={{ padding: 22 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 32,
              lineHeight: 1,
            }}
          >
            Earlier experience
          </div>
          <div
            style={{
              color: theme.colors.text.secondary,
              fontSize: 22,
              lineHeight: 1.4,
              textAlign: "right",
            }}
          >
            123workforce (2019–2020), Boi Kotha (2018–2019), and Code Builder IT (2016–2018) built the foundation across ecommerce, frontend systems, and full-stack delivery.
          </div>
        </div>
      </GlassCard>
    </ShowcaseShell>
  );
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Preview ExperienceScene**

In Remotion Studio, scrub to the ExperienceScene (starts around frame 570 after transitions). Verify:
- 4 role cards in a 2×2 grid (Presentia AI, Operation Nation, BuiltForYou Digital, Matthew Luke Studio)
- Each card animates up with stagger
- Footer bar shows 3 older companies only

- [ ] **Step 4: Commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add src/remotion/Showcase/scenes/ExperienceScene.tsx
git commit -m "feat: ExperienceScene — 2x2 grid with Matthew Luke Studio as 4th role"
```

---

## Task 5: Update `ProjectsScene.tsx` — 6-project 3×2 grid with special badge

**Files:**
- Modify: `src/remotion/Showcase/scenes/ProjectsScene.tsx`

- [ ] **Step 1: Replace `ProjectsScene.tsx`**

```tsx
import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { selectedProjects } from "../content";
import { Eyebrow, GlassCard, SectionHeading, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const ProjectsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <ShowcaseShell frame={frame}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Eyebrow label="Selected builds" />
        <SectionHeading
          title="Public"
          accent="proof"
          body="These builds show product thinking, code range, and execution quality across video tooling, AI workflows, dashboards, and CMS SEO."
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 24,
        }}
      >
        {selectedProjects.map((project, index) => {
          const cardIn = interpolate(frame, [14 + index * 5, 34 + index * 5], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const isMetaVideo = project.title === "AI-Powered Portfolio Video";

          return (
            <div
              key={project.title}
              style={{
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [42, 0])}px)`,
              }}
            >
              <GlassCard tone={project.tone} style={{ minHeight: 260 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: 15,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: theme.colors.tones[project.tone],
                      }}
                    >
                      {project.category}
                    </div>
                    {isMetaVideo ? (
                      <Tag label="★ This video" tone="sky" />
                    ) : (
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 999,
                          background: theme.colors.tones[project.tone],
                        }}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontSize: 38,
                      lineHeight: 1,
                    }}
                  >
                    {project.title}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 20,
                      lineHeight: 1.45,
                      color: theme.colors.text.secondary,
                    }}
                  >
                    {project.summary}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {project.stack.map((tool) => (
                      <Tag key={tool} label={tool} tone={project.tone} />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </ShowcaseShell>
  );
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Preview ProjectsScene**

In Remotion Studio, scrub to ProjectsScene (starts around frame 870 after transitions). Verify:
- 6 cards in a 3×2 grid
- "AI-Powered Portfolio Video" card shows a `★ This video` tag instead of a dot
- All 6 cards stagger-animate in
- No card content overflows its bounds

- [ ] **Step 4: Commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add src/remotion/Showcase/scenes/ProjectsScene.tsx
git commit -m "feat: ProjectsScene — 3x2 grid with 6 projects, meta badge on AI-Powered Portfolio Video"
```

---

## Task 6: Update `ContactScene.tsx` — new CTA copy and education card

**Files:**
- Modify: `src/remotion/Showcase/scenes/ContactScene.tsx`

- [ ] **Step 1: Replace `ContactScene.tsx`**

```tsx
import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { profile } from "../content";
import { Eyebrow, GlassCard, ShowcaseShell, Tag } from "../shared";
import { theme } from "../theme";

export const ContactScene: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 18) * 0.02;

  return (
    <ShowcaseShell frame={frame} justifyContent="center">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.78fr 1.22fr",
          gap: 30,
          alignItems: "stretch",
        }}
      >
        <GlassCard tone="orange" style={{ padding: 30 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, height: "100%" }}>
            <div
              style={{
                borderRadius: 30,
                overflow: "hidden",
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <Img
                src={staticFile("shuvo.png")}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 42,
                  lineHeight: 1,
                }}
              >
                {profile.name}
              </div>
              <div
                style={{
                  color: theme.colors.tones.orange,
                  fontFamily: theme.fonts.mono,
                  fontSize: 17,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {profile.role}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {profile.availability.map((item, index) => (
                <Tag
                  key={item}
                  label={item}
                  tone={index === 0 ? "sky" : index === 1 ? "orange" : "mint"}
                />
              ))}
            </div>
          </div>
        </GlassCard>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Eyebrow label="Let's work together" />

          <div
            style={{
              opacity: interpolate(frame, [0, 20], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 80,
                lineHeight: 0.94,
                letterSpacing: "-0.06em",
                margin: 0,
              }}
            >
              Send the brief.
              <br />
              I'll reply with next steps.
            </h2>
            <p
              style={{
                margin: "18px 0 0 0",
                color: theme.colors.text.secondary,
                fontSize: 28,
                lineHeight: 1.42,
                maxWidth: 920,
              }}
            >
              Strongest fit: React, Next.js, Node.js, Sanity, AI-assisted product work, and performance-focused delivery. Remote full-time, contract, or freelance.
            </p>
          </div>

          <GlassCard tone="sky" style={{ padding: 28, transform: `scale(${pulse})` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: theme.colors.tones.sky,
                }}
              >
                Primary contact
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 62,
                  lineHeight: 1,
                }}
              >
                {profile.email}
              </div>
              <div style={{ fontSize: 26, color: theme.colors.text.secondary }}>
                Portfolio: {profile.website}
              </div>
            </div>
          </GlassCard>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {[
              { label: "Location", value: profile.location, tone: "orange" as const },
              { label: "GitHub", value: profile.github, tone: "mint" as const },
              { label: "LinkedIn", value: profile.linkedin, tone: "gold" as const },
              { label: "Education", value: "B.Sc. CSE · National University of Bangladesh · 2018", tone: "sky" as const },
            ].map((item) => (
              <GlassCard key={item.label} tone={item.tone} style={{ padding: 22 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: 15,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: theme.colors.tones[item.tone],
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: item.label === "Education" ? 18 : 24,
                      lineHeight: 1.35,
                      color: theme.colors.text.primary,
                      fontWeight: 700,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </ShowcaseShell>
  );
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Preview ContactScene**

In Remotion Studio, scrub to ContactScene (starts around frame 1150 after transitions). Verify:
- Headline reads "Send the brief. / I'll reply with next steps."
- Bottom row has 4 cards: Location, GitHub, LinkedIn, Education
- Education card shows "B.Sc. CSE · National University of Bangladesh · 2018" at slightly smaller font
- Email card pulses gently

- [ ] **Step 4: Commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add src/remotion/Showcase/scenes/ContactScene.tsx
git commit -m "feat: ContactScene — Send the brief CTA, education card in 4-column bottom row"
```

---

## Task 7: Full end-to-end preview and final verification

**Files:** Read-only — no code changes

- [ ] **Step 1: Run full TypeScript check**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 2: Open Remotion Studio and scrub the full Showcase composition**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
pnpm dev
```

Select "Showcase" composition. Verify the full 1350-frame timeline:

| Frame range | What to check |
|-------------|--------------|
| 0–75 | Meta hook text fades in, two lines, centered on dark background |
| 75–180 | Hook fades out, main IntroScene layout (name, photo, tags) slides in |
| 180–200 | Fade transition into AboutScene |
| 200–350 | AboutScene — 4 proof point metric cards with updated copy |
| 350–370 | Slide transition into SkillsScene |
| 370–520 | SkillsScene — expanded tool tags visible (Svelte, Astro, FastAPI, Redis etc.) |
| 520–540 | Wipe transition into ExperienceScene |
| 540–720 | ExperienceScene — 4 cards in 2×2 grid, Matthew Luke Studio visible |
| 720–740 | Slide transition into ProjectsScene |
| 740–950 | ProjectsScene — 6 cards in 3×2 grid, "★ This video" badge on AI-Powered Portfolio Video |
| 950–970 | Wipe transition into StatsScene |
| 970–1120 | StatsScene — sharpened hiring reasons copy |
| 1120–1140 | Fade transition into ContactScene |
| 1140–1350 | ContactScene — "Send the brief." headline, 4-column bottom row with Education card |

- [ ] **Step 3: Check for visual overflow issues**

Specifically check:
- ProjectsScene: all 6 card texts fit within their cards (no clipping)
- ExperienceScene: all 4 role cards fit within the 2×2 grid without overflow
- ContactScene: the 4-column bottom row cards don't overflow their content

- [ ] **Step 4: Final commit**

```bash
cd "/Users/sar333/Documents/sar projects/remotion/portfolio"
git add -A
git status
# Verify only expected files are staged — no unintended changes
git commit -m "feat: portfolio video redesign complete — meta hook, outcomes-first narrative, full resume sync"
```

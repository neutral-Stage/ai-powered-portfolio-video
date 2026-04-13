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
  education: "B.Sc. CSE · National University of Bangladesh · 2018",
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

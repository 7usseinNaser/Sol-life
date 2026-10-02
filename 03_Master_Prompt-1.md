# 03: Master Prompt + Phase Prompts + Asset Prompts

**How to use:** open your AI builder (Claude Code / Cursor / etc.). Attach: logo, group photo, profile PDF, reference screenshots, `01_BRD`, `02_Content_AR`. Paste **MASTER PROMPT** once, then send **Phase prompts one at a time**. Do not ask for the whole site in one shot: quality drops. Review each phase before the next.

---

## A. MASTER PROMPT (paste first)

```
ROLE
You are a principal front-end engineer, motion designer and UX/UI art director with 20 years of experience shipping award-level websites (Awwwards / FWA level). You are building the official website for "Soul Life Team" (فريق سول لايف), a student-led, non-profit medical training initiative in Gaza.

INPUTS
1) 01_Soul_Life_BRD_v4.md: full spec, scroll scenario, tech stack, rules.
2) 02_Content_AR.md: the ONLY source of facts + verbatim Arabic copy.
3) Attached: logo, team group photo, profile PDF, reference screenshots.
Read 01 and 02 fully before writing code. Inspect the logo and sample exact brand colors.

NON-NEGOTIABLE RULES (override any creative instinct)
- Never invent facts, numbers, names, dates, testimonials, partners, photos or files. Missing data → render a `CONTENT_REQUIRED` placeholder (clearly flagged in dev). At the end, output a list of every CONTENT_REQUIRED.
- Never add up program student counts into a "total students".
- Keep Completed / Upcoming / Future strictly separate. Institutions are "جهات نتعاون ونتواصل معها", not "partners", unless confirmed:true in data.
- The ambulance scene is an artistic metaphor, not a claim of emergency service.
- No exact addresses/GPS/live schedules of venues. No publishing people's photos/names without consent flags.
- Security: strict CSP + security headers, Zod-validated server actions, honeypot + Turnstile + rate limit on forms, no secrets in the client, signed URLs for non-public resources, npm audit clean.
- Accessibility: WCAG AA, keyboard, focus, reduced motion (prefers-reduced-motion) with meaningful static fallbacks for every animated scene.
- Performance: LCP < 2.5s on Slow 4G, initial JS < 200KB gz, all 3D/Rive/GSAP scenes code-split + lazy, saveData/slow-network lightweight mode. If performance suffers, remove 3D before removing content.

STACK (use latest stable, verify at install)
Next.js App Router + React 19 + TypeScript strict · Tailwind CSS v4 · Motion (motion/react) · GSAP + ScrollTrigger · Lenis · React Three Fiber + drei (+ minimal postprocessing) · Rive (or dotLottie) · Embla Carousel (RTL) · Radix/shadcn primitives (heavily restyled) · React Hook Form + Zod · Resend · Cloudflare Turnstile · next-intl · next/font self-hosted · Playwright + axe + Lighthouse CI.

DESIGN
- Concept: "The Pulse Line": one ECG SVG line running through the entire page, scroll-driven, morphing into a road, thread, route, timeline rail.
- Arabic-first native RTL (logical CSS properties, mirrored carousels/arrows, correct bidi for numbers/Latin terms).
- Brand palette sampled from the logo (navy / deep teal / teal / mint / soft bg). No purple/pink. Glassmorphism as a controlled material: solid = important, glass = floating/secondary, transparent = atmosphere; solid fallback where backdrop-filter is unsupported.
- Fonts: IBM Plex Sans Arabic (body), Readex Pro or Noto Kufi Arabic (display), Inter/Cormorant for Latin accents. Self-hosted.
- Design tokens (colors, spacing, radius, shadows, blur, motion durations 200/450/800/1200ms, easings) centralized; no ad-hoc colors.
- Must NOT look like a template, a hospital site, or a copy of cura-ps.org (structure inspiration only).

ARCHITECTURE
No monolithic components. Data-driven from typed content files validated by Zod (CMS-ready). Follow the folder structure in the BRD §15. Reusable systems first: tokens, PulseLine, ScrollScene wrapper (pin/scrub + reduced-motion fallback), GlassCard, MagneticButton, SectionHeading, RevealText, ParallaxImage, ThreeScene (lazy, DPR cap, pause offscreen), Lightbox, RegionSelector, ProgramCard, StatCounter.

WORKFLOW
Work strictly phase by phase (I will send each phase). After each phase: (1) run typecheck + lint + build, (2) list what you built, (3) list assumptions and any CONTENT_REQUIRED, (4) stop and wait. Ask at most one clarifying question only if truly blocked; otherwise state your assumption and proceed.

Confirm you have read the BRD and content file by summarizing, in 8 lines max, the concept, the stack, and the top 5 integrity rules. Then wait for Phase 1.
```

---

## B. PHASE PROMPTS (send one by one)

### Phase 1: Foundation
```
Phase 1: Foundation. Set up the Next.js + TS strict + Tailwind v4 project, next-intl (ar default, RTL, en scaffold), next/font, design tokens (from the logo), global CSS variables, security headers + CSP, ESLint/Prettier, Playwright/axe/Lighthouse CI config. Build the RTL layout shell: transparent→glass sticky navbar with mega-menu (فريقنا: الفريق، اللجان، الكواليس), mobile glass drawer with persistent CTA, glass footer over a blurred team photo (phone, email, Instagram, scope, sign-off, credit line from BRD §14). Create typed content layer with Zod schemas + data files from 02_Content_AR.md (stats, programs, regions, partners, team, committees). No home scenes yet. Deliver a short report.
```

### Phase 2: Core motion systems
```
Phase 2: Core systems. Build: PulseLine (global SVG path whose pathLength is bound to page scroll, able to morph between states), ScrollScene wrapper (GSAP ScrollTrigger pin/scrub with automatic reduced-motion and saveData fallbacks), Lenis synced to ScrollTrigger (disabled under reduced motion), GlassCard, MagneticButton, RevealText, ParallaxImage, StatCounter (tabular numerals, once in view), SectionHeading with ECG divider, cursor-follow light (desktop only), page transitions. Provide a /dev/playground page showcasing each with reduced-motion toggle. Keep initial JS small.
```

### Phase 3: Preloader + Hero
```
Phase 3: Preloader + Hero. Preloader: ECG line draws, spikes and forms the logo heart, ≤1.5s, skippable, once per session. Hero: the team group photo in a large rounded glass-framed card with subtle Ken-Burns + cursor parallax, oversized Arabic display word "سول لايف" behind the subject, headline "نتعلّم. نتدرّب. نُلهم.", subheadline + two CTAs from 02_Content_AR. Add the region swipe carousel (Embla, RTL, drag/arrows/dots, autoplay 6s with pause) with three slides: خانيونس · الوسطى · غزة (use the group photo now; other photos = placeholders through data). Optimized AVIF hero, poster fallback. LCP-safe.
```

### Phase 4: Scroll scenes
```
Phase 4: Signature scroll scenes (BRD §8): (a) "The Arrival" ≈300vh pinned: pulse line becomes a road, artistic brand-colored ambulance drives in, stops, doors open, team figures step out one by one with glass role tags (only names from the org table, else generic), three copy beats نتعلّم / نتدرّب / نُلهم. Implement with Rive or SVG layers + GSAP scrub; also implement the static fallback and an optional canvas frame-sequence loader that activates only if /public/frames exists. (b) "The Gap" pinned: theory vs practice split with the pulse line stitching the halves. (c) "Three Regions" pinned: 3 nodes on the pulse line activate sequentially with region photo + text, ending with "ثلاث مناطق، فريق واحد". Add progress indicator, never trap the user, keyboard-safe.
```

### Phase 5: Home content sections
```
Phase 5: Build the remaining Home sections in the BRD §7 order: Vision/Mission/Goals glass panels, verified proof strip (counters from stats data only), Latest Courses horizontal-scroll rail with tilt/glow and a shared-element (layoutId) transition into a full-screen glass course report modal (trainer, hours, sessions, students, place level, partner; gallery; slides button only if a published resource exists), Why Choose Us with 5 evidence-backed panels (text from 02_Content_AR), Future Vision ("ما القادم؟", cards tagged "مخطّط"), Final CTA (3 audiences). Institutions strip with the 9 names using the approved wording.
```

### Phase 6: Inner pages
```
Phase 6: Inner pages: /about, /programs (Completed | Upcoming | Future filters + search), /programs/[slug] (full course report), /library (searchable, filters, file badges, visibility public/students/team, signed URLs for non-public, no fake files: empty-state if none), /team (board cards + regional teams + org constellation with fallback + credit module gated by approvedByTeam), /committees (only confirmed:true show full detail; drafts flagged), /behind-the-scenes (horizontal cinematic reel), /gallery (masonry + lightbox + keyboard/swipe), /voices (verified only, consentStatus enforced, empty-state design).
```

### Phase 7: 3D
```
Phase 7: Restrained 3D. R3F scenes, lazy + ssr:false: (1) glass heart from the logo silhouette (drei MeshTransmissionMaterial, Float, small Environment) as the centerpiece of Why Choose Us with 5 orbiting panels activating on scroll; (2) subtle hero background ECG ribbon; (3) optional About-page rotating anatomy-inspired object (GLB < 1.5MB, Draco/Meshopt). DPR cap 1.5 on mobile, no realtime shadows, frameloop="demand"/pause offscreen, static WebP fallback for low-end/reduced-motion/saveData. Report FPS and bundle impact.
```

### Phase 8: Collaborate + Contact
```
Phase 8: /collaborate (3 models: financial, in-kind, institutional; form: name, organization, email, phone, type, message) and /contact (email, phone, Instagram CTAs, scope, form). Server actions with Zod, Turnstile + honeypot + rate limit, Resend email, success animation with the ECG line, accessible error states. No street address anywhere.
```

### Phase 9: SEO + i18n + credits
```
Phase 9: SEO + polish: metadata (title/description from BRD §16), OG image, JSON-LD (Organization/EducationalOrganization; Event only for real events; Person only with consent), sitemap/robots, hreflang scaffold. Implement credits per BRD §14 (footer line + About/Team credit with links; featured module only when approvedByTeam=true; no legal ownership claims).
```

### Phase 10: QA + handoff
```
Phase 10: QA. Run Playwright e2e + visual on 360/390/430/768/1024/1440/1920, axe (0 serious), Lighthouse mobile (targets in BRD §16), reduced-motion and saveData paths, RTL checks, low-end device throttling. Content audit: grep for fabricated data; output a CONTENT_REQUIRED report and the BRD §21 open-questions list. Deliver README (run/deploy), content-editing guide (how the team adds a course/resource/team member), and a security checklist.
```

---

## C. ASSET PROMPTS (Google Flow / image & video tools)

**General rules:** no text, no logos, no real-person likeness in generated content; brand palette (navy #08324A, teal #40A39C, mint); calm, hopeful, cinematic; export WebM(VP9/AV1)+MP4, poster frame each, ambient loops ≤ 1.5MB. Authentic team footage always replaces generated footage when available.

**V1: Ambulance arrival (for the scroll scene, 6–8s, 16:9 + 9:16, static camera side view):**
"Cinematic side view of a modern white ambulance with subtle navy and teal accents driving slowly along a calm empty road at golden hour, coming to a stop. The rear doors open with a soft warm light spill. Five young medical students in white coats and scrubs with blue lanyards step out one by one and walk toward the camera. Shallow depth of field, clean composition, gentle film grain, no text, no logos, no siren lights, calm hopeful mood."
*Extract 60–90 frames → WebP sequence for canvas scrub; keep a vector/Rive version as default.*

**V2: Hall preparation (loopable, 5s):**
"Time-lapse style of volunteers arranging chairs and training equipment in a bright lecture hall, medical manikins and suturing practice pads on tables, natural window light, calm and focused mood, hands and equipment in focus, no close-up faces."

**V3: Hero ambient (seamless loop, 4s):**
"Slow abstract macro of a glowing teal ECG line flowing across a deep navy background with soft glass particles and a faint heart-shaped light bloom, seamless loop, no text."

**V4: Regions transition (optional, 6s):**
"Abstract minimal composition: three glowing nodes connected by a thin teal pulse line on deep navy, camera slowly travels from the first node to the third, subtle particles, elegant, no map, no text."

**V5: Glass heart still (for 3D fallback):**
"Photoreal frosted-glass heart sculpture with an internal thin ECG line, teal-to-navy gradient light refraction, soft studio lighting on a neutral light background, high detail, no text."

**Vector/Rive brief (default ambulance implementation):** flat modern illustration, brand palette, layers separated: road, skyline (3 parallax layers), ambulance body, wheels, rear doors, light spill, 5 character cutouts (walk cycle 4 frames each), hall silhouette. Export as `.riv` with a scroll-driven state machine input `progress (0–100)`.

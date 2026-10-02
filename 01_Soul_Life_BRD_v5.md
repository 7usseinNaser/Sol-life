# SOUL LIFE TEAM: Website BRD v5
### Product Spec + Creative Direction + Scroll Scenario + Technical Blueprint

> **v5 changelog (approved for build):** program data replaced with the official roster ("كشف الدورات التدريبية المجانية") + execution schedule + Rushdi's WhatsApp corrections (28/9). **"التغريز" and "الخياطة الجراحية/Surgical Suturing" are confirmed as two separate programs** — do not merge them. New location-privacy display rule (§5). The three date conflicts are each pinned to one value (source noted in `02_Content_AR_v5.md`) — easy to edit later, no longer blocking. **All publishing/consent approvals for names, photos and testimonials are obtained** — build without additional consent gating. The credited-contributor module is approved and active (§14). Full detail lives in `02_Content_AR_v5.md` — read it alongside this file.

**Project:** Official website for Soul Life Team / فريق سول لايف
**Language:** Arabic-first (RTL native), English-ready architecture
**Files in this package:** `01_BRD` (this file) · `02_Content_AR` (verbatim Arabic copy + data) · `03_Master_Prompt` (paste-ready prompts for the AI builder)
**Attached with this package:** logo, team group photo, official profile PDF, layout reference screenshots
**Reference studied (structure only, never copy):** CURA Medical Team, https://cura-ps.org/

> **Reading order for the AI builder:** this file → `02_Content_AR` → run prompts from `03_Master_Prompt` phase by phase. Do not skip the Integrity Rules (§3). They override every creative instruction.

---

## 1. Vision of the Site

Soul Life Team is a non-profit, student-led volunteer initiative that gives medical-specialty students in Gaza free, high-quality, hands-on training.

**Central design idea:**
> **"The Pulse Line": one living ECG line that runs through the entire website, connecting every section, becoming a road, a heartbeat, a thread, a route between three regions.**

The visitor scrolls along one continuous story: *See the people → understand the mission → feel the movement → explore the training → see the evidence → see the future → take part.*

The site must feel: **Medical + Human + Student-led + Cinematic + Technological.** It must NOT feel: hospital template, corporate, NGO-generic, stock photography, "AI purple neon".

**Visitor questions the homepage must answer fast (client's own list):**
1. Who are we? 2. How many volunteers? 3. Who did we train and how many (per program)? 4. Which institutions did we work or communicate with?

---

## 2. Client Requirements Checklist (from Rushdi Shaat, Board Chair)

| # | Requirement | Where it lives |
|---|---|---|
| 1 | First page = team intro: who we are, volunteers, students trained, associations | Home §7 (Sections 1–4), About |
| 2 | Courses page: intro of each course + slides as a **student reference** | `/programs`, `/programs/[slug]`, `/library` |
| 3 | Team page divided by **committees**, what each committee does | `/team`, `/committees` |
| 4 | Photos: team, behind the scenes, hall preparation | `/behind-the-scenes`, `/gallery` |
| 5 | Student **opinions** page | `/voices` |
| 6 | Contact us | `/contact` + footer |
| 7 | Hero image = **group photo of the team** | Home Hero |
| 8 | Hero swipe between region photos: **Khan Younis · Central · Gaza** | Home Hero carousel |
| 9 | A section with **goals, vision, mission** | Home Section 3 |
| 10 | **Latest courses** with a button → photos + full report (who taught, students, time, place) | Home Section 5 + course detail |
| 11 | **"Why Choose Us"**: strong marketing praise of the team (evidence-based) | Home Section 6 |
| 12 | Footer: phone numbers, locations, email | Footer |
| 13 | Owner's ask: something **not ordinary**: scroll animation, 3D, glass, motion, medical-team-specific storytelling (ambulance, team stepping out) | §8 Scroll Scenario, §9 3D |

---

## 3. INTEGRITY & SAFETY RULES (highest priority)

### 3.1 Content integrity (no fabrication)
- The official profile (`02_Content_AR`) is the **only source of truth**. Missing detail → render `CONTENT_REQUIRED` placeholder (visibly marked in dev, hidden or graceful in production). Never invent.
- **Never** fabricate: numbers, names, dates, testimonials, partner logos, certificates, course counts, photos of "doctors", emergency-service claims.
- **Never** sum program counts into one "total students" number (people may overlap). Show per-program numbers only, until the team confirms a unique total.
- Keep three states strictly separate: **Completed · Upcoming · Future vision.**
- Institutions: the profile says the team *built partnerships* and *submitted official letters to request coordination*. Use the label **"جهات نتعاون ونتواصل معها"**. Use "شركاء" for a logo only after the team confirms that institution.
- No unsupported superlatives ("#1", "largest", "best", "most trusted"). Marketing praise must be backed by a real fact shown next to it.
- No exaggerated pity or war imagery. Framing: *competence, access, resilience, teamwork.* Suggested line: **"الظروف صعبة، لكن الوصول للمعرفة يجب ألا يكون كذلك."**
- The ambulance sequence is **artistic/symbolic**. It must not imply Soul Life is an emergency medical service. Label the scene with training language ("الفريق يصل ليتدرّب ويُدرّب").

### 3.2 People & privacy
- Publish a person's name/photo/testimonial only with recorded consent (`consentStatus` field). **v5: the team has confirmed all current publishing approvals are obtained** (group photo, board names/photos, testimonials) — set `consentStatus: approved` for that known set in the data now; the field and the rule stay in the schema for anything added later (new testimonials, new member photos), since consent is per-item and doesn't carry forward automatically to new people or new content.
- Do **not** publish exact addresses, GPS pins, or live schedules of training venues (security context in Gaza). Show region/city level only.
- Testimonials: real submissions only, clearly separated from team claims.
- No children's/minors' images without guardian approval.

### 3.3 Web security (implementation)
- HTTPS only, HSTS. Strict **Content-Security-Policy**, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, frame protection.
- Contact/partner forms: **Zod** schema validation on server, honeypot + **Cloudflare Turnstile** (or hCaptcha), rate-limiting, no secrets in client bundle, email via server action/API route only.
- Resource library: files with visibility (`public` / `students` / `team`); non-public files served via signed, expiring URLs. Never ship placeholder download links to production.
- Dependency hygiene: lockfile, `npm audit` in CI, no unmaintained packages, no inline scripts without nonce.
- Analytics: privacy-friendly (Plausible or Umami), no invasive trackers, no third-party fonts loaded at runtime from unknown hosts (self-host fonts via `next/font`).
- Legal: no copyright/ownership claims beyond §14 (credits). Final legal footer to be reviewed by the team.

---

## 4. Verified Data (the only numbers allowed) — v5

| Fact | Value | Status |
|---|---|---|
| Total volunteers | **30** | ✅ verified |
| Board members | **9** | ✅ from org table |
| Field volunteers (3 branches) | **21** | ✅ (9 + 21 = 30) |
| Regional branches | 3 (North, Central, South) | ✅ |
| Completed program **types** | **6** — Terminology, **التغريز**, **Surgical Suturing** (separate program, not the same as التغريز), First Aid, Nursing, CBC | ✅ |
| Completed program **editions** (dated, located instances) tracked with registrant/accepted data | **7**, for Terminology + التغريز + First Aid/Nursing + CBC — see `02_Content_AR_v5.md` table | ✅ from official roster |
| Surgical Suturing (separate program, no per-edition roster data) | 3 courses (Khan Younis, Central, Gaza City) · 2 sessions · 6 hours each · **~100 students total** (single aggregate figure only, from the original profile) | ✅ |
| **Total registrations across the 7 roster editions** (excludes Surgical Suturing, which has no registrant count) | **1,734** | ✅ source: official roster PDF |
| **Total accepted / actually trained across the 7 roster editions** (excludes Surgical Suturing) | **361** | ✅ source: official roster PDF — this is the number to use for "students trained" from the roster, never a bigger one, and never combined with the Suturing ~100 into one figure |
| Medical Terminology (Central/Nuseirat) | 6 sessions · 343 registered · **160 accepted** · Dr. Dima Muhanna · date pinned to 25/8–12/9 (editable) | ✅ number updated from roster (was 180 in an earlier draft — roster is now authoritative) |
| "التغريز" — 3 editions (Khan Younis, Central, Gaza) — **separate from Surgical Suturing** | 1–2 sessions each · 311+287+234 registered · **40+30+25 = 95 accepted** · trainer `CONTENT_REQUIRED` | ✅ |
| CBC (Khan Younis) | 1 session · 198 registered · **46 accepted** · Dr. Majdi Qassem · date pinned to 18/8 (editable) | ✅ |
| First Aid + Nursing (Central, combined) | 2 sessions · 201 registered · **35 accepted** · with Palestinian Medical Center | ✅ |
| First Aid (Gaza) | 160 registered · **25 accepted** · with Furssan Al-Ghad Youth Association · date pinned to 27/9 & 28/9 (editable) | ✅ |
| Institutions listed | **9** (see 02_Content_AR) | ✅ list, ⚠️ relationship status still open |
| "التغريز" course status | was placeholder in v4 | ✅ **now `completed`**, its own program, 3 documented editions |
| Publishing consent (group photo, board names/photos, testimonials) | obtained | ✅ **all approvals taken** — build without additional consent gating in the UI |

**Never** display any "total beneficiaries" figure beyond what's in this table, and never sum, round up, or pad it (e.g. no "1,734 + 361", no "~500 more"). Surgical Suturing's ~100 and the roster's 361 are reported as two separate facts, never added into one number. If a bigger combined "impact" figure is wanted later, it must come from the team with its own source — not be invented on the design side.

All numbers live in one `stats.ts` / CMS entity, sourced from `02_Content_AR_v5.md`. One source of truth.

---

## 5. Region Model (reconciling two wordings)

- Official profile: **North / Central / South** operating model.
- Client's hero request: **Khan Younis · Central · Gaza** photos (still used for the hero region carousel — unchanged).
- **Program location display (new client instruction, 28/9):** on every program/course card and detail page, the location field shows **"قطاع غزة"** for all editions, **except CBC**, which shows **"خانيونس"**. This is the client independently applying the §3.2 privacy rule (no exact venue disclosure) — implement it as a default `locationLevel` value per program in data, not hardcoded per page. The hosting institution name (e.g. بلدية النصيرات، مستشفى ناصر) may still show as a separate "بالتعاون مع" field — it's an organization name, not an address — but never show building/hall/room-level detail.

Implement `regions` as data (`id`, `labelAr`, `labelShort`, `photo`, `description`, `activities[]`) so one edit changes everywhere. **Default:** hero carousel labels = *خانيونس · الوسطى · غزة* (client wording); About/Team "how we work" = *شمال · وسط · جنوب* (profile wording, describes the org model, not a specific course's venue).

---

## 6. Information Architecture

```
/                      Home (cinematic story)
/about                 Who we are · vision · mission · goals · values · how we work
/programs              Archive: Completed | Upcoming | Future
/programs/[slug]       Course report page (facts, gallery, slides, trainer)
/library               Student reference library (slides, PDFs) with visibility rules
/team                  Board · regional teams · org chart · featured contributor credit
/committees            Each committee: what it does, members, achievements, photos
/behind-the-scenes     الكواليس: hall prep, equipment, coordination
/gallery               Filterable masonry + lightbox
/voices                Student opinions (verified only)
/collaborate           Partners / institutions / support models
/contact               Contact + form
```

**Navigation (desktop, max 6 top-level):** الرئيسية · من نحن · برامجنا · فريقنا (mega-menu: الفريق، اللجان، الكواليس) · المكتبة · المعرض | CTA: **تعاون معنا**
**Mobile:** glass drawer, active-section indicator, persistent CTA. Navbar: transparent on top → glass on scroll.

---

## 7. HOME PAGE: Section Order (11 sections, focused)

| # | Section | Content |
|---|---|---|
| 0 | **Preloader** | ECG line draws, forms the logo heart (≤1.5s, skippable, once per session) |
| 1 | **Hero** | Team group photo in a large rounded glass-framed card; oversized Arabic headline behind/over the subject; **region swipe** (Khan Younis · Central · Gaza); CTAs |
| 2 | **The Arrival** (signature scroll scene, §8) | Pinned ambulance + team story |
| 3 | **Vision · Mission · Goals** | Client section #1: three glass panels, goals expand |
| 4 | **Proof strip** | Verified counters: 30 volunteers · 3 regions · 5 programs · free training + institutions count |
| 5 | **Latest Courses** | Horizontal-scroll cards → button → full report (§11) |
| 6 | **Why Choose Us** | 3D glass heart center + 5 orbit panels (§9), evidence-based praise |
| 7 | **Three Regions** | Abstract regional visual, pinned sequential reveal |
| 8 | **Team & Committees teaser** | Org constellation + link to `/committees` |
| 9 | **Behind the scenes + Voices teaser** | Horizontal photo reel + 1–3 verified quotes |
| 10 | **Future Vision** | Medical Hub · Scholarships · Digital Platform ("ما القادم؟") |
| 11 | **Final CTA + Footer** | Student / Trainer / Institution CTAs; footer with glass columns over blurred team photo; phone, email, Instagram, scope; sign-off "نتعلّم • نتدرّب • نُلهم" |

Institutions strip (marquee of names/logos, labelled per §3.1) sits between 4 and 5 or inside `/collaborate`.

---

## 8. SCROLL SCENARIO: "The Pulse Line" (the heart of the "not ordinary" ask)

**Global system:** one SVG path (the pulse line) is rendered in a fixed/absolute layer spanning the document. Its `pathLength` progress is bound to page scroll. In some scenes it *morphs* (road, thread, route, network). Smooth scroll via **Lenis**, orchestration via **GSAP ScrollTrigger** (pin + scrub), UI micro-motion via **Motion (Framer Motion)**. Every scene has a **static fallback** and obeys `prefers-reduced-motion`.

### Scene 0: Preloader (0–1.5s)
Dark navy. A thin teal ECG line draws left→right, spikes once, and the spike opens into the logo heart. Fade to hero. Skip on repeat visits.

### Scene 1: Hero (viewport 1)
- Big rounded card, team photo as background (subtle Ken-Burns + cursor parallax).
- Oversized Arabic word behind the people (like the reference's oversized type but in brand style): **"سول لايف"**.
- Glass label at bottom: region name + volunteer note; swipe/drag/arrows to change region (Embla, RTL). Auto-advance 6s, pause on hover/touch.
- Headline: **نتعلّم. نتدرّب. نُلهم.** Sub: *مبادرة طلابية تطوعية لبناء المعرفة والمهارة الطبية في غزة.* CTAs: **اكتشف قصتنا** · **شاهد أثرنا**.
- The pulse line sits under the hero card and starts to travel on first scroll.

### Scene 2: "The Arrival" (pinned, ≈ 300vh)
| Scroll % | What happens | Copy |
|---|---|---|
| 0–15% | Hero card scales down; pulse line flattens into a **road** across the screen | |
| 15–40% | An ambulance (artistic, brand-colored, teal/navy) **drives in along the road**, wheels turn, soft parallax skyline behind | "الفريق يصل…" |
| 40–55% | Ambulance stops; **rear doors open**; light spill | |
| 55–85% | Team members **step out one by one** (cutout figures derived from the real group photo or stylized vector); each gets a glass name/role tag (only names from the org table; otherwise generic "متطوع/ة") | "نتعلّم" → "نتدرّب" → "نُلهم" (three beats) |
| 85–100% | Figures walk into a training-hall silhouette; road turns back into the pulse line and continues down | "من المعرفة إلى المهارة" |

**Implementation (choose in this priority):**
1. **Rive / Lottie + GSAP scrub** (vector, lightest, recommended default). Ambulance and figures as vector layers.
2. **Video frame-sequence on `<canvas>`** (from Google Flow video; 60–90 WebP frames, ≤ ~2MB total for mobile set), scrubbed by ScrollTrigger.
3. **Static illustration** for reduced-motion, `saveData`, slow network (`navigator.connection`), or low-end devices.
Never make the story depend on the video alone; text carries the meaning.

### Scene 3: The Gap (pinned, ≈ 150vh)
Split screen: left "نظري" (textbook, static grayscale), right "عملي" (hands practicing). The pulse line **threads through** the middle and stitches the two halves (sutures visually: stitch marks appear along the line). Type: *المعرفة وحدها لا تكفي. المهارة تحتاج إلى ممارسة.* → *نحوّل المعرفة إلى مهارة.*

### Scene 4: Vision · Mission · Goals
Three glass panels slide in with staggered reveals; goals list expands with line-draw underlines.

### Scene 5: Proof strip
Counters count up once in view (tabular numerals). Glass bar floats over a blurred team photo.

### Scene 6: Latest Courses (horizontal scroll inside vertical scroll, pinned)
Cards travel horizontally (RTL-aware) while the pulse line becomes the **timeline rail** beneath them. Hover: soft glow follows cursor, card tilts 2–4°. Click: **shared-element transition** (Motion `layoutId`) expands card into the full-screen glass modal / course page.

### Scene 7: Why Choose Us (3D)
Center: a **glass 3D heart** (logo-inspired). As user scrolls, 5 panels orbit/activate one by one (Access · Practice · Reach · Team · Continuity), each with one real fact as evidence.

### Scene 8: Three Regions (pinned, ≈ 200vh)
Abstract composition (not a literal map): three nodes on the pulse line. Scroll activates node 1 → 2 → 3; each shows region photo + short activity text. Ends with **"ثلاث مناطق، فريق واحد"** and the three lines converge into one.

### Scene 9: Team constellation
Org chart as a node graph: Board at center, orbiting committee nodes; hover expands role + members. Fallback: clean cards.

### Scene 10: Behind the Scenes reel
Horizontal cinematic scroll: تجهيز القاعة → تجهيز الأدوات → تنسيق الفريق → التدريب → التوثيق. Full-bleed authentic photos, short captions.

### Scene 11: Future ("ما القادم؟")
Pulse line stretches into the horizon and splits into three glowing paths: Medical Hub, Scholarships, Digital Platform. Cards tagged **"مخطّط"** (never "متاح").

### Scene 12: Final CTA + Footer
Pulse line returns to a flat ECG under the CTA buttons and pulses once when the visitor hovers/clicks a CTA. Footer: glass columns over blurred team photo.

**Motion rules:** durations 200 / 450 / 800 / 1200 ms tokens; easings: standard, emphasized, cinematic. No scroll-jacking that traps the user: every pinned scene has visible progress, and the user can always scroll past. Skip-to-content link. Reduced motion → simple fades, no pin, no parallax, no 3D rotation.

---

## 9. 3D System (restrained, meaningful)

| Element | Where | Tech |
|---|---|---|
| Glass heart (from logo silhouette) + floating ECG ribbon | Hero background subtle, "Why Choose Us" centerpiece | React Three Fiber, drei `MeshTransmissionMaterial`, `Float`, `Environment` (small HDR) |
| Rotating anatomy-inspired heart or stethoscope | About page | GLB, Draco/Meshopt, < 1.5MB |
| Abstract 3-node network | Regions scene | R3F lines/instanced meshes |
| Ambulance (optional 3D version) | Scene 2 alt | low-poly GLB + GSAP scrub |

Rules: lazy-load (`next/dynamic`, `ssr:false`), cap DPR (≤ 1.5 mobile), no real-time shadows, pause when offscreen (IntersectionObserver / `frameloop="demand"`), static WebP fallback on mobile-low/reduced-motion. If performance suffers: **remove 3D before removing content.**

---

## 10. Design System

**Palette (verify by sampling the logo, then lock as tokens):**
`navy #08324A` · `deepTeal #0D5260` · `teal #40A39C` · `mint #E4F3F1` · `bg #F6FAF9` · `ink #0F2A3A` · `white #FFFFFF`. Signature gradient: navy → deepTeal → teal (dark heart half to light heart half). No purple/pink.

**Glass (controlled):** solid surfaces = important content; glass = floating/secondary; transparent = atmosphere.
`background: rgba(255,255,255,.08–.55)` (dark/light context) · `backdrop-filter: blur(16–24px) saturate(140%)` · `1px` inner border `rgba(255,255,255,.16–.6)` · layered soft shadow. Solid fallback via `@supports not (backdrop-filter…)`.

**Typography (Arabic is the identity):** Arabic: **IBM Plex Sans Arabic** (body/UI) + **Readex Pro** or **Noto Kufi Arabic** (display). Latin: **Inter** + **Cormorant Garamond** for wordmark accents. Numerals: tabular. Fluid scale with `clamp()`. Self-hosted via `next/font`.

**Shapes:** large radii (24–32px), soft circle outlines from the profile cover, ECG motif as divider/underline/loader.

**Tokens:** colors, spacing, radius, shadow, blur, motion durations, easings, type scale in one `tokens.ts` + CSS variables. No arbitrary colors in components.

**Micro-interactions:** magnetic CTA, cursor-following radial light, 2–4° card tilt, text reveal, clip-path image reveal, counters, section progress indicator, ECG draw on scroll, page transitions. Desktop-only custom cursor (disabled on touch, never required).

---

## 11. Programs, Course Reports, Library

**Program card (v5):** status badge (مكتملة / قادمة), title (AR + EN term), stats line built from real data — e.g. *6 لقاءات · 160 مقبولًا من أصل 343 مسجّلًا* — a program with multiple editions (e.g. "التغريز") shows a combined line (e.g. *3 نسخ · خانيونس، الوسطى، غزة · 95 مقبولًا*) with each edition's own numbers on the detail page. Trainer, partner/host, CTA **شاهد تفاصيل التجربة**.

**Course report (detail page/modal):** hero visual · one fact grid per edition (trainer, hours, sessions, registrants, accepted, `locationLevel` per §5, date, host organization) · description · outcomes (`CONTENT_REQUIRED` if missing) · photo gallery + lightbox · **slides viewer** (PDF/Slides embed + download, only if published) · related programs. Upcoming: badge **"قريبًا"**, no invented dates or counts. Showing both "registered" and "accepted" numbers together (not just accepted) is intentional — it demonstrates real demand and the team's capacity discipline honestly (see the official note in `02_Content_AR_v5.md`), and is stronger marketing than a single inflated figure.

**Library `/library`:** searchable resource cards, filters by course/type, file-type badges, preview, clear download action, mobile-friendly viewer. Visibility: `public | students | team`. Publish only with permission. Course info ≠ educational resources (separate UI).

**AI Doctor (الطبيب الذكي)** workshop card: highlighted **upcoming**, 3 hours, trainer م. ريمان الشهري; tools listed in `02_Content_AR`.

---

## 12. Team, Committees, Behind the Scenes, Voices

- **Team:** board cards (name, role, photo if supplied), regional teams, org constellation. Do not invent regional member names.
- **Committees:** for each **confirmed** committee: mission, members, main activities, completed work, related programs, photos. Profile-confirmed structure: Board leadership · Public Relations · Projects & Courses · Media · three Regional Branches. Descriptions are **draft copy pending team approval** (flag in UI/CMS). Guiding question: *كل لجنة شو بتعمل؟ وشو أنجزت؟*
- **Behind the scenes (الكواليس):** ما لا تراه في الصورة: categories: كواليس الفريق, تجهيز القاعات, تجهيز الأدوات, قبل/أثناء/بعد الدورة, اجتماعات الفريق. Authentic media only.
- **Voices (آراء الطلاب):** quote cards + optional short video; fields: quote, name (if consent), specialty/year (if consent), course. Never fabricated.

---

## 13. Collaboration & Contact

- **/collaborate:** headline *نبني الأثر معًا*; three models: دعم مالي · دعم عيني · احتضان مؤسسي; form (name, organization, email, phone, cooperation type, message). Institutions list per §3.1 wording.
- **/contact + footer:** Email `soullifeteam17@gmail.com` · Phone `+972 56-784-4766` · Instagram `@soullife.gaza1` · Scope: قطاع غزة (شمال، وسط، جنوب). Clickable CTAs (mailto, tel, Instagram). No street address (see §3.2).

---

## 14. Credits: Website & Platform Development

The site is built as a voluntary contribution by **Hussein Mohammad Hussein Naser (حسين محمد حسين نصر)**, Software Engineering & AI, Palestine University.

- **Footer credit (required):** *Digital Platform by Hussein Mohammad Hussein Naser.*
- **About/Team credit (required):** "Website & Platform Development: Hussein Mohammad Hussein Naser", with links: email `hussein7.7naser@gmail.com` · LinkedIn `linkedin.com/in/7ussein-naser/` · Instagram `https://instagram.com/7ussein.naser/`. Do not alter handles.
- **Featured contributor module (APPROVED by the team, Board Chair Rushdi Shaat agreed in writing):** set `featuredContributor.approvedByTeam = true`. A compact glass card ("التجربة الرقمية خلف سول لايف") on `/team`, rendered while `featuredContributor.approvedByTeam === true` in data (currently true). Title shown is configurable (`Team Leader · Platform Developer · AI Automation Specialist`); it must **not overshadow or replace** the official roles of the Board (Chair: رشدي شعت). Must not look like a personal portfolio.
- **Scope of attribution:** platform design/development only. Do not imply authorship of medical content, other people's photos, course materials, testimonials, or partner logos.
- **No legal claims:** no "all rights reserved to X" / "sole author". Final copyright wording is reviewed by the team.

---

## 15. Technology Stack (top-tier, verify latest stable versions at install)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + React 19 + TypeScript strict** | SSG/ISR, RSC, image optimization, security headers, SEO |
| Styling | **Tailwind CSS v4** + CSS variables (logical properties for RTL) | fast, token-driven |
| UI motion | **Motion (`motion/react`, formerly Framer Motion)** | layout/shared transitions, gestures, `useScroll` |
| Scroll orchestration | **GSAP + ScrollTrigger** (free, incl. plugins) | pinned scenes, scrubbing, timelines |
| Smooth scroll | **Lenis** (synced with ScrollTrigger via ticker) | premium feel; disable on reduced motion |
| 3D | **Three.js + React Three Fiber + drei** (+ minimal `@react-three/postprocessing`) | glass materials, lazy scenes |
| Vector animation | **Rive** (preferred) or **Lottie (dotLottie)** | ambulance/figures, light weight |
| Carousel | **Embla Carousel** (RTL) | swipe hero, reels |
| Components/a11y | **Radix UI / shadcn/ui** primitives (customized, not default look) | accessible dialogs, menus, tabs |
| Forms | **React Hook Form + Zod** + Server Actions | validation both sides |
| Email | **Resend** (or SMTP) | server-side only |
| Anti-spam | **Cloudflare Turnstile** + honeypot + rate limit | |
| Content/CMS | **Typed content layer** (JSON/MDX validated by Zod) now; **Sanity or Payload CMS** ready via same schemas | team can edit without code |
| i18n | **next-intl** (AR default, EN optional) | RTL/LTR |
| Fonts | `next/font` self-hosted | privacy + perf |
| Media | AVIF/WebP via `next/image`; video WebM (AV1/VP9) + MP4 fallback + posters | |
| Testing/QA | **Playwright** (e2e + visual), **axe-core**, **Lighthouse CI**, ESLint, Prettier, TypeScript strict | |
| Analytics | Plausible / Umami | |
| Hosting | **Vercel** or **Cloudflare Pages** | edge, headers |

**Architecture rule:** no giant single component. Suggested tree:

```
src/
  app/[locale]/(pages)/…          # routes
  components/{navigation,hero,scenes,sections,cards,motion,three,forms,gallery,library}/
  content/{ar,en}/… , schemas/     # Zod schemas, typed data
  data/{stats,programs,regions,partners,team,committees}.ts
  lib/{motion,scroll,security,seo}/
  styles/{tokens.css,globals.css}
  assets/{images,video,models,rive}/
```

**Shared systems (build first):** `tokens`, `GlassCard`, `MagneticButton`, `SectionHeading` (ECG divider), `PulseLine` (global SVG scroll line), `ScrollScene` wrapper (pin/scrub + reduced-motion fallback), `RevealText`, `ParallaxImage`, `ThreeScene` (lazy, DPR cap, pause offscreen), `Lightbox`, `RegionSelector`, `ProgramCard`, `StatCounter`, `ResourceCard`, `CommitteeCard`, `TestimonialCard`, `FooterGlass`.

---

## 16. Performance, Accessibility, SEO

**Performance budget (Gaza connectivity matters):** LCP < 2.5s on Slow 4G; CLS < 0.05; initial JS < 200KB gz (3D/Rive/GSAP scenes code-split and lazy); hero image ≤ ~150KB AVIF (responsive sizes); ambient video ≤ 1.5MB; `saveData`/slow network → lightweight mode (static scenes, no 3D, no video). Lighthouse mobile: Perf ≥ 85, A11y ≥ 95, SEO ≥ 95, Best Practices ≥ 95.

**Accessibility:** WCAG AA, semantic HTML, correct heading order, keyboard-operable carousels/modals/menus, visible focus, Arabic alt text, form labels, `prefers-reduced-motion`, native RTL (logical CSS, mirrored arrows/carousels, correct bidi with numbers/Latin terms), skip link.

**SEO:** Title *فريق سول لايف | تدريب وتعليم طبي مجاني في غزة*; description *فريق سول لايف مبادرة طلابية تطوعية توفر برامج تدريبية وتعليمية مجانية لطلبة التخصصات الطبية في قطاع غزة.* OG image (logo + team). JSON-LD: Organization / EducationalOrganization; `Event` **only** for real published events; `Person` only with consent. `hreflang` if EN enabled. Sitemap + robots.

---

## 17. Data Model (CMS-ready)

`TeamMember` · `Program` (slug, title, status, description, objectives, defaultLocationLevel, partner) → has many **`ProgramEdition`** (date, dateConfirmed, sessions, hours, trainer, hostOrganization, registrants, accepted, gallery) — v5 introduces this one-program-to-many-editions shape because the roster shows the same program (e.g. "التغريز") delivered 3 times in 3 places with 3 different counts; a flat `Program` record can no longer hold that. `Resource` (visibility, published, program, type, fileUrl) · `Committee` (mission, members, activities, achievements, confirmed) · `Testimonial` (quote, consentStatus, published) · `Partner` (relationshipType, confirmed) · `Region` · `GalleryItem` · `Stats` (registrants, accepted — sourced only from the official roster, never computed by summing editions on the fly without also showing both numbers) · `FeaturedContributor` (`approvedByTeam`). Each public fact has exactly one source.

---

## 18. Video / Asset Direction (for Google Flow and others)

See `03_Master_Prompt` §Assets for ready prompts (ambulance arrival, hall prep loop, ECG ambient loop, region transitions). Rules: no faces of real people generated to impersonate the team; no logos/text in generated video; every video has poster + text fallback + accessible label; authentic team footage always preferred over generated.

---

## 19. Development Phases

1. **Foundation:** repo, tokens, fonts, layout, nav (RTL), footer, security headers, CI.
2. **Core systems:** PulseLine, ScrollScene, GlassCard, motion tokens, Lenis+GSAP sync, reduced-motion.
3. **Home Hero + Preloader + Regions carousel.**
4. **Scroll scenes** (Arrival, Gap, Regions) with fallbacks.
5. **Content pages:** About, Programs, Course detail, Library.
6. **Team, Committees, Behind the Scenes, Gallery, Voices.**
7. **3D + advanced motion** (Why Choose Us heart, About 3D).
8. **Collaborate + Contact + forms + email + anti-spam.**
9. **SEO, i18n scaffolding, credits module.**
10. **QA:** Playwright, axe, Lighthouse, low-end device test, content audit (no fabrication).

---

## 20. Definition of Done

- [ ] Distinctly Soul Life, not a template; palette + logo correct
- [ ] Hero uses team group photo; region swipe works (RTL)
- [ ] Pulse Line runs through the site; Arrival scene works with static fallback
- [ ] Vision/Mission/Goals/Values; Latest Courses → full report; Why Choose Us (evidence-based)
- [ ] Programs archive (Completed / Upcoming / Future strictly separated)
- [ ] Library with visibility rules; no fake files
- [ ] Team, Committees, Behind the Scenes, Gallery, Voices (verified only)
- [ ] Collaborate + Contact forms secure and working
- [ ] Footer: phone, email, Instagram, scope
- [ ] Credits (§14) correct, no legal overclaim
- [ ] All §3 integrity/privacy/security rules satisfied
- [ ] Performance/a11y/SEO targets met; reduced-motion verified
- [ ] Zero fabricated facts; every `CONTENT_REQUIRED` listed in a handoff report
- [ ] Production build passes; README + content-editing guide delivered

---

## 21. Open Questions for the Team (do not block the build)

1. ~~Unify region wording~~: **RESOLVED** — hero keeps Khan Younis/Central/Gaza; program cards show "قطاع غزة" (or "خانيونس" for CBC only), per §5.
2. ~~Unique total of students reached~~: **RESOLVED** — use 1,734 registered / 361 accepted-and-trained for the 7 roster editions, and ~100 as its own separate figure for Surgical Suturing. Never combined or padded. See §4.
3. ~~Student counts for First Aid, Basic Nursing, CBC~~: **RESOLVED** from the official roster (§4 / `02_Content_AR_v5.md`).
4. ~~Is "التغريز" a delivered course? Same as Surgical Suturing?~~: **RESOLVED** — yes, delivered, 3 documented editions; and **confirmed as a separate program from Surgical Suturing**, not the same course.
5. Which of the 9 institutions are **confirmed partners** vs requested coordination? *(still open — not a numbers/consent question, needs a real answer)*
6. Confirm committee names + descriptions + members + achievements. *(still open)*
7. Permission to publish slides/materials; per-resource visibility. *(still open — separate from the general publishing consent below, since it concerns specific files, not people)*
8. ~~Consent to publish group photo, names, portraits, testimonials~~: **RESOLVED** — all publishing approvals obtained.
9. ~~Approval of the featured contributor module and title (§14)~~: **RESOLVED**, approved by the Board Chair together with the footer/team-page credit and portfolio-display right.
10. English version at launch? *(still open)*
11. Hero footage: authentic vs generated; permission for the ambulance concept as artistic metaphor. *(still open)*
12. ~~3 date conflicts~~: **RESOLVED for build purposes** — each pinned to one value with its source noted in `02_Content_AR_v5.md`; easy to correct later if the team wants a different date, since it's a single data-file edit.
13. Trainer names for "التغريز" (all 3 editions) and for "الخياطة الجراحية" are still `CONTENT_REQUIRED` — names can't be filled in without the team, unlike dates/numbers. *(still open)*

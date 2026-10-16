# Portfolio Redesign Brief (for Claude Code)

You are redesigning my entire personal portfolio website AND updating its content. Read this whole file before touching code.

## 0. Ground rules
- Stack stays: **Vite + React + Tailwind**. Do not migrate frameworks. Check which Tailwind version is installed (v3 vs v4) and use that version's config style.
- Work on a new git branch `redesign`. Commit in logical steps.
- First, inspect the current repo: read the existing components, any data/content already in the site, and my current `package.json`. Keep any content that is still accurate (links, bio wording I clearly wrote myself); replace everything visual.
- Do NOT invent facts, metrics, links or dates. Where I haven't given a detail, leave a clearly marked `// TODO(jeffrey):` in the data file and render the section gracefully without it. Never write fake numbers like "improved performance by 40%".
- Reference image: `reference/alex-zenkins.png` (I will place it in the repo). Open and study it before designing. It is a **style reference only**. Do not copy its text, layout 1:1, pricing section, or blog section.
- No Three.js, no WebGL, no heavy video/3D. Light motion only (Framer Motion). Target Lighthouse performance 90+ on mobile.
- Must look professional and editorial, NOT like generic AI portfolio slop: no purple/blue gradients, no glassmorphism cards, no emoji in headings, no "Hi, I'm X 👋", no grid of identical rounded cards.

## 1. Design direction (match the reference image)
Warm editorial look: **cream bands alternating with black bands**, one vivid orange-red accent, huge bold grotesk headings, tiny underlined accent labels, hairline dividers.

**Palette (tune by eye against the reference image):**
- cream background: `#FBF7EE`
- ink / black band: `#0B0B0B`
- text on cream: `#0B0B0B`; text on black: `#F5F1E8`; muted: `#6B665C` (cream) / `#9A958A` (black)
- accent orange-red: `#E8390E`
- hairlines: `rgba(11,11,11,.15)` on cream, `rgba(245,241,232,.18)` on black
Define these as Tailwind theme tokens (`cream`, `ink`, `accent`, etc.). No other accent colors. No gradients.

**Typography (Google Fonts, self-host or preconnect):**
- Display + headings: **Inter Tight** 700/800, tight tracking (-0.03em), tight line-height (~0.95) for the hero name
- Body: **Inter** 400/500
- Labels, dates, tags: **JetBrains Mono** 400/500, small, uppercase or lowercase with an underline in accent color (like "Technical Focus" in the reference)
- Hero name is very large (clamp ~56px to 140px), set in the accent color, two stacked lines like the reference.

**Layout/feel:**
- Max content width ~1200px, generous whitespace, strict alignment to a 12-col grid.
- Sections separated by full-bleed color bands (cream / ink), not by cards with shadows.
- Hairline borders instead of shadows. Corner radius mostly 0 to 4px. Buttons: small, rectangular, black with cream text; accent button for primary CTA.
- Sticky slim top nav: logo mark (my initials, stacked, like the reference), links (Work, Achievements, Experience, Contact), and a black "Get in touch" button.

## 2. Page structure (single page, smooth anchor scroll)
1. **Hero (split):** left cream panel with name (accent color, huge), 2-3 line intro, and a small grid of tech icons (monochrome, no brand colors). Right panel: solid accent-color block with my photo (cutout or cropped portrait, `public/me.jpg`; use a neutral placeholder and a TODO if the file is missing). Nav sits over the accent panel like the reference. Collapse to stacked on mobile.
2. **What I build (black band):** small underlined accent label "Technical Focus", one intro sentence, then an **accordion list** with big row titles and an arrow icon that rotates. Opening a row reveals a short description plus a small image or stack chips (animate height with Framer Motion). Rows:
   - Agentic AI systems
   - Full-stack web
   - Mobile apps (React Native / Flutter)
   - Backend, data and DevOps
3. **Selected work (cream):** label "Projects I have built". A **numbered, editorial project list/grid** (not identical cards): each entry shows number, title, year, category, one-line description, stack tags, and links (GitHub / live). Make the 2-3 flagship projects visually larger. Hover: subtle accent underline or arrow shift. Optional: click expands a detail panel or modal with problem / approach / stack / outcome.
4. **Achievements (black band):** label "Hackathons and recognition". A list with a status tag per row: `WINNER`, `3RD PLACE`, `FINALIST`, `TOP 5`, `PARTICIPANT`. Winning or top-placing rows get the accent-colored tag; others are outlined. Each row: event, organizer or college, year, result, one line on what I built.
5. **Experience (cream):** vertical timeline. Role, company, location, dates in mono, 2-4 bullet points.
6. **Education + skills (cream or small black strip):** degree, CGPA, board results; skills grouped (Languages / Frameworks / Data / Tools), shown as plain text lists or small outlined chips, not a skill-bar chart.
7. **Contact footer (black):** a huge "Let's build something." heading, email as a big link, social icons (GitHub, LinkedIn, X), small legal line like the reference.

Skip the pricing and blog sections from the reference image.

## 3. Motion and interaction (keep it light)
- Framer Motion only. Scroll-reveal fade/translate-up (once), accordion height animation, hover micro-interactions on rows/links.
- Respect `prefers-reduced-motion` (disable the reveal animations).
- Optional signature detail if time allows: a **Cmd/Ctrl+K command palette** to jump to sections and projects. Keep it small and lazy-loaded.

## 4. Code organization (so I can update content later without touching components)
Create `src/data/` with typed files and make all components read from them:
- `profile.ts` (name, tagline, bio, email, links, location)
- `projects.ts`
- `achievements.ts`
- `experience.ts`
- `education.ts`
- `skills.ts`
Components live in `src/components/` (Nav, Hero, Focus, Projects, Achievements, Experience, Education, Contact, ui/ for shared pieces). Add a short `README` section explaining "how to add a project / achievement".

## 5. Quality bar
- Fully responsive (360px to 1440px+). Test mobile layouts of hero, accordion and timeline.
- Accessible: semantic headings, accordion uses `button` with `aria-expanded`, visible focus states, color contrast AA on both band colors (check the accent on cream and on black; adjust the accent slightly if it fails for small text).
- SEO basics: title, meta description, Open Graph tags, favicon (my initials), `lang="en"`.
- Lazy-load images, set explicit width/height, preload the display font.
- Run `npm run build` and fix all errors and warnings before finishing. Then run the dev server, check each section in a browser screenshot at desktop and mobile widths, and fix visual issues.

## 6. My content (use this; mark anything missing as TODO)

**Profile**
- Name: Jeffrey Solomon M
- Based in Chennai, India
- B.Tech, Computer Science and Engineering, SRM Institute of Science and Technology, expected 2028, CGPA 9.16
- Looking for: software developer / agentic AI internships at product and AI startups
- Email: jeffreysolomon.official@gmail.com
- GitHub and LinkedIn: username `jeffreysolomon123`
- X: @jeffreysolomon_
- Existing portfolio URL: jeffreysolomon.vercel.app
- Write the hero intro in first person, plain and confident, 2-3 lines: a third-year CS student who builds full-stack, mobile and agentic AI systems and wins hackathons. Draft it and I will edit.

**Experience**
1. SDE Intern, MedXAI Innovation, Chennai, May to Sep 2026. Led coding for a 5-member team on a BLE smart ring app tracking 10 vitals in real time; Room DB + Supabase sync; foreground service supporting 150+ sport workouts.
2. Software Developer Intern, Selsons Software Solutions, Chennai, Dec 2025 to Jan 2026. Built a React Native heavy-vehicle rental app and a real-time internal chat web app.

**Achievements and hackathons**
- **Acentra Health x HackForge.ai, "Build to Care" 2026:** Top 5 finalist among 300+ teams at the grand finale. I led Team Cipher (4 members). Ranked #1 of 50+ teams in the preliminary codathon (background job processor with retries, dead-letter storage and a job status dashboard in .NET), then built **ClaimShield Nexus** for the final (healthcare fraud/waste/abuse detection; added Next-Best-Evidence engine, Compromised Member ID Radar with a member confirmation loop, and Phoenix Provider Detector). Final was a 24-hour build.
- **Kanini x Pragyan Hackathon, NIT Trichy:** Finalist, Top 10 of 115+ teams. TODO(jeffrey): what I built.
- **Hackinfinity 2025, SSN College of Engineering:** 3rd place, for SafarX.
- TODO(jeffrey): any other hackathons I only participated in; list them with the `PARTICIPANT` tag.

**Projects** (flagships first)
1. **ClaimShield Nexus** (2026): healthcare payer fraud/waste/abuse detection platform built at Build to Care. Details above. TODO(jeffrey): stack, repo link.
2. **Anbaram** (2026): donation-drive management app suite for the Chengalpattu District Administration, Tamil Nadu ("The Wall of Kindness"). Presented to the District Collector. Flutter mobile app with roles for Collection Point and Distribution Center officers, plus a React dashboard for the Collector's office. Supabase (PostgreSQL) backend, Cloudinary for images, weight-based donation logging (Clothes, Blankets, Stationery, Books), admin approval for officer sign-up, hybrid collection-cycle triggers. Being published to the Play Store. TODO(jeffrey): confirm status and any live link.
3. **UpgradeGuard** (2026, in progress): multi-agent dependency-upgrade risk assessor. Given outdated npm dependencies, agents parse changelogs, analyze usage via AST and match risks to decide whether an upgrade will break the codebase. Python, LangGraph, Groq API. Plan: UI that accepts a GitHub URL. Mark as "In progress". TODO(jeffrey): repo link.
4. **SafarX** (2025): tourist safety app with Isolation Forest anomaly detection; React Native + Supabase; 3rd place at Hackinfinity 2025.
5. **MedXAI smart ring app** (2026): from the internship above. TODO(jeffrey): confirm what I can publicly show.
6. **RAG Q&A app:** Python app that answers questions from a Chroma vector database using HuggingFace embeddings and the OpenRouter API.
7. **MNIST Digit Finder:** full-stack handwritten digit recognition; CNN trained on MNIST; draw a digit on a browser canvas and the model predicts it. github.com/jeffreysolomon123/MNIST-Digit-Finder-using-CNN
8. **Socket-Talk:** real-time chat app, MERN + Socket.IO.
9. **Heavy-vehicle rental app** (React Native) and **internal real-time chat web app** (from the Selsons internship).

**Skills**
- Languages: Java, Python, C, C++, JavaScript, TypeScript, SQL
- Frameworks and libraries: FastAPI, Express, Node.js, React, Next.js, React Native, Flutter
- Databases and infra: MongoDB, PostgreSQL, Supabase, Docker
- AI: LangGraph, RAG (Chroma, HuggingFace embeddings), Groq and OpenRouter APIs

**Education**
- B.Tech CSE, SRM Institute of Science and Technology, 2028 (expected), CGPA 9.16
- 12th: BVM Global, Perungudi, Chennai (CBSE), 88.8%, 2024
- 10th: St. Michael's Academy, Adyar, Chennai (ICSE), 94%, 2022

## 7. Deliverable
1. The redesigned site on the `redesign` branch, building cleanly.
2. A short summary of: what you changed, what content you migrated from the old site, and a list of every `TODO(jeffrey)` I still need to fill in (photo, links, missing details).
3. Do not deploy. I will review locally first.

Reference sites for feel (style only): Porteo (Framer template), FORMHAUS Brutalist Red and Swapnil's Bold Portfolio (Superdesign prompts), and the attached reference image.
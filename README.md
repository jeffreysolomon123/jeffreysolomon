# Portfolio

Personal site of Jeffrey Solomon M. Next.js (App Router) + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
src/
  app/            layout (fonts, SEO metadata), page, globals.css (design tokens), icon.svg, opengraph-image.tsx
  data/           all site content — edit these, not the components
    profile.ts      name, intro, email, socials, résumé, photo, hero icons, nav sections
    focus.ts        "Technical Focus" accordion rows
    projects.ts     projects (+ older "archive" list)
    achievements.ts hackathons and recognition
    experience.ts   internships / jobs
    education.ts    degree and school results
    skills.ts       grouped skill lists
  components/     one file per section, plus ui/ for shared pieces
```

Search the codebase for `TODO(jeffrey)` to find content that still needs filling in.

## Design tokens

Defined in `src/app/globals.css` with Tailwind v4's `@theme`:

- Fixed colours: `cream`, `ink`, `bone` (text on ink), `accent`, `accent-deep` (accent for small text on cream, which meets AA).
- Band-aware colours: `fg`, `muted`, `line`, `label`. Inside a `band-cream` or `band-ink` section they resolve to the right value for that background, so `text-muted` / `border-line` work on both.
- Fonts: `font-display` (Inter Tight), `font-sans` (Inter), `font-mono` (JetBrains Mono), self-hosted from `@fontsource-variable`.

## How to add a project

Add an object to the `projects` array in `src/data/projects.ts`:

```ts
{
  slug: "my-project",            // unique; used for #project-my-project and the Ctrl/Cmd+K palette
  title: "My Project",
  year: "2026",                  // optional
  category: "Agentic AI",
  summary: "One line on what it does.",
  stack: ["Python", "LangGraph"], // [] hides the stack
  links: { github: "https://github.com/…", live: "https://…" }, // either is optional
  status: "In development",      // optional small tag; delete to hide
  award: "Winner, Some Hackathon 2026", // optional
  flagship: true,                // optional: shows large at the top
  detail: { problem: "…", approach: "…", outcome: "…" }, // optional: adds a "Case study" panel (flagships only)
}
```

Order in the array is the order on the page; flagships are pulled to the top. Leave out anything you don't have and that part simply isn't rendered.

## How to add an achievement

Add an object to `achievements` in `src/data/achievements.ts`:

```ts
{
  event: "Some Hackathon",
  organizer: "Some College",
  year: "2026",
  result: "PARTICIPANT",          // WINNER | 3RD PLACE | FINALIST | TOP 5 | PARTICIPANT
  resultDetail: "Top 10 of 100+ teams", // optional
  built: "One line on what I built.",   // optional
  project: "my-project",          // optional: slug from projects.ts, adds a link to it
}
```

`WINNER`, `3RD PLACE` and `TOP 5` get the solid accent tag (see `highlightResults`); the rest are outlined.

## Other content

- Photo: `public/me.png` (set `profile.photo` to `null` to show a placeholder).
- Résumé: `public/Jeffrey-Solomon-Resume.pdf` (set `profile.resume` to `null` to hide the links).
- Old `/projects`, `/about` and `/contact` URLs redirect to the matching section (`next.config.ts`).

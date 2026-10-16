export type Project = {
  /** Used for the #anchor and command palette. */
  slug: string;
  title: string;
  year?: string;
  category: string;
  summary: string;
  stack: string[];
  links: { github?: string; live?: string };
  /** Small tag next to the year, e.g. "In development". Delete the field to hide it. */
  status?: "In development";
  /** Short recognition line, e.g. a hackathon result. */
  award?: string;
  /** Small image shown next to the title, e.g. a client emblem. */
  logo?: { src: string; width: number; height: number; alt: string };
  /** Flagships render large at the top of the list. */
  flagship?: boolean;
  /** Expandable case-study panel. Omit fields you don't have. */
  detail?: { problem?: string; approach?: string; outcome?: string };
};

export const projects: Project[] = [
  {
    slug: "anbaram",
    title: "Anbaram",
    year: "2026",
    category: "Civic tech, mobile + web",
    summary:
      "A donation-drive tracking platform for the Chengalpattu District Administration, Tamil Nadu, covering the full trail from collection to distribution.",
    stack: ["Flutter", "React", "Supabase", "PostgreSQL", "Cloudinary"],
    // TODO(jeffrey): add the Play Store link once the app is live.
    links: {},
    logo: { src: "/Emblem_of_Tamil_Nadu.png", width: 1588, height: 1724, alt: "Emblem of Tamil Nadu" },
    flagship: true,
    detail: {
      approach:
        "One role-based Flutter app for Collection Point and Distribution Center officers, plus a React dashboard for the Collector's office. I designed the Supabase schema for weight-based, category-wise logging (clothes, blankets, stationery, books), with role-based access, an admin-approval flow for officer onboarding and one-to-one nodal officer mapping per collection point. Cloudinary backs every entry with a photo, and the dashboard tracks collections, flags issues and generates reports.",
      outcome:
        "Presented to the District Collector of Chengalpattu. The Flutter app is being prepared for release on the Google Play Store.",
    },
  },
  {
    slug: "waypoint",
    title: "Waypoint",
    year: "2026",
    category: "AI Agents / Full-stack",
    summary:
      "A multi-agent web app that automates the first stage of an internship hunt. Enter a goal and upload your resume, and a crew of AI agents finds startups, researches them, scores your fit and drafts cold emails, streaming every step live. It only drafts and never sends.",
    stack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "Supabase", "OpenRouter", "Tavily", "Docker"],
    // TODO(jeffrey): add the Waypoint live link once it's deployed.
    links: { github: "https://github.com/jeffreysolomon123/Waypoint" },
    status: "In development",
    flagship: true,
  },
  {
    slug: "claimshield-nexus",
    title: "ClaimShield Nexus",
    year: "2026",
    category: "Healthcare AI",
    summary:
      "Fraud, waste and abuse detection for healthcare payers, built in 24 hours for the Build to Care grand finale.",
    // TODO(jeffrey): add the stack for ClaimShield Nexus.
    stack: [],
    // TODO(jeffrey): add the ClaimShield Nexus repo link (and live link if any).
    links: {},
    award: "Top 5 of 300+ teams, Build to Care 2026",
    flagship: true,
    detail: {
      problem: "Healthcare payers need to catch fraud, waste and abuse in claims before they pay out.",
      approach:
        "Led Team Cipher (4 people) through a 24-hour build. Added a Next-Best-Evidence engine, a Compromised Member ID Radar with a member confirmation loop, and a Phoenix Provider Detector.",
      outcome: "Top 5 finalist among 300+ teams at the Acentra Health x HackForge.ai grand finale.",
    },
  },
  {
    slug: "upgradeguard",
    title: "UpgradeGuard",
    year: "2026",
    category: "Agentic AI",
    summary: "A multi-agent LangGraph workflow that decides whether upgrading an outdated npm dependency will break your codebase.",
    stack: ["Python", "LangGraph", "Groq API", "AST analysis"],
    // TODO(jeffrey): add the UpgradeGuard repo link.
    links: {},
    flagship: true,
    detail: {
      approach:
        "Agents split the work into changelog parsing, AST-based usage analysis and risk matching: they read changelogs for breaking-change signals and statically analyse how the codebase uses the affected APIs. Groq (gpt-oss-120b) handles the low-latency reasoning.",
      outcome:
        "A structured, explainable upgrade-risk verdict that replaces reading changelogs by hand.",
    },
  },
  {
    slug: "safarx",
    title: "SafarX",
    year: "2025",
    category: "Safety, mobile + ML",
    summary:
      "A tourist safety app with geofencing, SOS alerts and anomaly detection (Isolation Forest spatial outlier scoring, plus prolonged-inactivity and drop-off models), and an authority dashboard to monitor alerts, manage geofences and coordinate emergency response.",
    stack: ["React Native", "Expo", "React", "Supabase", "Anomaly detection"],
    links: { github: "https://github.com/jeffreysolomon123/safarX" },
    award: "3rd place, Hackinfinity 2025, SSN College of Engineering",
  },
  {
    slug: "rag-qa",
    title: "RAG Q&A app",
    // TODO(jeffrey): add year for the RAG Q&A app.
    category: "AI",
    summary: "Answers questions from your own documents using a Chroma vector store, HuggingFace embeddings and OpenRouter LLMs.",
    stack: ["Python", "LangChain", "Chroma", "HuggingFace", "OpenRouter"],
    links: { github: "https://github.com/jeffreysolomon123/RAG" },
  },
  {
    slug: "mnist-digit-finder",
    title: "MNIST Digit Finder",
    // TODO(jeffrey): add year and the full stack for MNIST Digit Finder.
    category: "Machine learning, full-stack",
    summary: "Draw a digit on a browser canvas and a CNN trained on MNIST predicts it.",
    stack: ["Python", "CNN"],
    links: { github: "https://github.com/jeffreysolomon123/MNIST-Digit-Finder-using-CNN" },
  },
  {
    slug: "socket-talk",
    title: "Socket-Talk",
    // TODO(jeffrey): add year for Socket-Talk.
    category: "Real-time web",
    summary:
      "Full-stack real-time chat with live messaging, persistent history and online presence over Socket.IO. JWT auth in HTTP-only cookies, Cloudinary profile pictures and a responsive UI, with client and server deployed separately.",
    stack: ["React", "Express", "Socket.IO", "MongoDB", "Tailwind", "Cloudinary"],
    links: {
      github: "https://github.com/jeffreysolomon123/Socket-Talk-Client",
      live: "https://socket-talk-client.vercel.app",
    },
  },
];

/** Older projects, shown as a compact "Earlier" list. */
export const archive: Pick<Project, "slug" | "title" | "category" | "links">[] = [
  {
    slug: "qumment",
    title: "Qumment",
    category: "Embeddable comment engine",
    links: { live: "https://qumment.vercel.app", github: "https://github.com/jeffreysolomon123/Qumment" },
  },
  {
    slug: "elliptic",
    title: "Elliptic illicit transaction detection",
    category: "ML classifier",
    links: { github: "https://github.com/jeffreysolomon123/elliptic-illicit-detection" },
  },
];

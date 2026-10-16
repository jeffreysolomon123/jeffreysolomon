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
  /** Flagships render large at the top of the list. */
  flagship?: boolean;
  /** Expandable case-study panel. Omit fields you don't have. */
  detail?: { problem?: string; approach?: string; outcome?: string };
};

export const projects: Project[] = [
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
    slug: "anbaram",
    title: "Anbaram",
    year: "2026",
    category: "Civic tech, mobile + web",
    summary:
      "Donation-drive management suite for the Chengalpattu District Administration's \"Wall of Kindness\", presented to the District Collector.",
    stack: ["Flutter", "React", "Supabase", "PostgreSQL", "Cloudinary"],
    // TODO(jeffrey): confirm Play Store status and add any live link.
    links: {},
    flagship: true,
    detail: {
      problem:
        "The district needed a way to log donations at collection points and track them through to distribution centres.",
      approach:
        "A Flutter app with separate roles for Collection Point and Distribution Center officers, plus a React dashboard for the Collector's office. Weight-based logging across Clothes, Blankets, Stationery and Books, admin approval for officer sign-up, and hybrid collection-cycle triggers. Supabase (PostgreSQL) backend with Cloudinary for images.",
      outcome: "Presented to the District Collector. Being published to the Play Store.",
    },
  },
  {
    slug: "upgradeguard",
    title: "UpgradeGuard",
    year: "2026",
    category: "Agentic AI",
    summary:
      "Multi-agent risk assessor that decides whether upgrading an outdated npm dependency will break your codebase.",
    stack: ["Python", "LangGraph", "Groq API"],
    // TODO(jeffrey): add the UpgradeGuard repo link.
    links: {},
    flagship: true,
    detail: {
      problem: "Dependency upgrades are risky, and changelogs alone don't tell you whether your code is affected.",
      approach:
        "Agents parse each package's changelog, analyse how the codebase uses it via the AST, and match the two to score the risk of upgrading.",
      outcome: "In progress. Next step is a UI that accepts a GitHub URL.",
    },
  },
  {
    slug: "safarx",
    title: "SafarX",
    year: "2025",
    category: "Safety, mobile + ML",
    summary: "Tourist safety app that flags unusual movement with Isolation Forest anomaly detection.",
    stack: ["React Native", "Expo", "Supabase", "PostgreSQL", "Isolation Forest"],
    links: { github: "https://github.com/jeffreysolomon123/safarX" },
    award: "3rd place, Hackinfinity 2025",
  },
  {
    slug: "medxai-ring",
    title: "MedXAI smart ring app",
    year: "2026",
    category: "Health, mobile",
    // TODO(jeffrey): confirm what you can publicly show about the MedXAI ring app.
    summary: "BLE smart ring companion app tracking 10 vitals in real time, built during my internship at MedXAI.",
    stack: ["BLE", "Room DB", "Supabase"],
    links: {},
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
    summary: "Real-time chat with JWT auth, live rooms and persistent history.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    links: {
      github: "https://github.com/jeffreysolomon123/Socket-Talk-Client",
      live: "https://socket-talk-client.vercel.app",
    },
  },
  {
    slug: "heavy-vehicle-rental",
    title: "Heavy-vehicle rental app",
    year: "2025–26",
    category: "Mobile, Selsons internship",
    summary: "React Native app for renting heavy vehicles, built at Selsons Software Solutions.",
    stack: ["React Native"],
    links: {},
  },
  {
    slug: "internal-chat",
    title: "Internal real-time chat",
    year: "2025–26",
    category: "Web, Selsons internship",
    summary: "Real-time internal chat web app for the team at Selsons Software Solutions.",
    // TODO(jeffrey): add the stack for the Selsons internal chat app.
    stack: [],
    links: {},
  },
];

/**
 * Older projects carried over from the previous site.
 * TODO(jeffrey): keep, edit or delete these — they weren't in the redesign brief.
 */
export const archive: Pick<Project, "slug" | "title" | "category" | "links">[] = [
  {
    slug: "qumment",
    title: "Qumment",
    category: "Embeddable comment engine",
    links: { live: "https://qumment.vercel.app", github: "https://github.com/jeffreysolomon123/Qumment" },
  },
  {
    slug: "crewmate",
    title: "Crewmate",
    category: "Find collaborators for projects",
    links: { live: "https://crewmate-neon.vercel.app/", github: "https://github.com/jeffreysolomon123/crewmate" },
  },
  {
    slug: "neighbourly",
    title: "Neighbourly",
    category: "Local community app",
    links: { github: "https://github.com/jeffreysolomon123/Neighbourly" },
  },
  {
    slug: "elliptic",
    title: "Elliptic illicit transaction detection",
    category: "ML classifier",
    links: { github: "https://github.com/jeffreysolomon123/elliptic-illicit-detection" },
  },
];

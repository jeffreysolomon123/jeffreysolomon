export type FocusArea = {
  title: string;
  description: string;
  stack: string[];
  /** Slugs from projects.ts, shown as "Seen in" links. */
  projects: string[];
};

export const focusIntro =
  "I build end-to-end: the agent or API underneath, the web or mobile app on top, and the data plumbing in between.";

export const focusAreas: FocusArea[] = [
  {
    title: "Agentic AI systems",
    description:
      "Multi-agent pipelines that read, reason and decide: agents that parse changelogs and walk a codebase's AST to judge whether an upgrade is safe, and retrieval-augmented apps that answer from a vector store.",
    stack: ["LangGraph", "LangChain", "Groq", "OpenRouter", "Chroma", "HuggingFace embeddings"],
    projects: ["upgradeguard", "rag-qa"],
  },
  {
    title: "Full-stack web",
    description:
      "Dashboards and real-time apps with React and Next.js on the front, Node and Express or FastAPI behind, and Postgres or MongoDB for storage.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "Socket.IO"],
    projects: ["anbaram", "socket-talk"],
  },
  {
    title: "Mobile apps (React Native / Flutter)",
    description:
      "Production mobile apps with role-based flows, offline storage and background work, including a BLE smart ring app streaming vitals in real time.",
    stack: ["React Native", "Flutter", "Room DB", "BLE", "Supabase"],
    projects: ["anbaram", "safarx"],
  },
  {
    title: "Backend, data and DevOps",
    description:
      "Schemas, sync and job processing: Supabase and PostgreSQL backends, cloud image storage, and a background job processor with retries and dead-letter storage.",
    stack: ["PostgreSQL", "Supabase", "MongoDB", "Docker", "Cloudinary", ".NET"],
    projects: ["claimshield-nexus", "anbaram"],
  },
];

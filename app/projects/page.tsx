// app/projects/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  status?: "Live" | "In Progress" | "Experiment";
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Qumment – Lightweight Comment Engine",
    tagline: "",
    description:
      "Embeddable comment widget built with Next.js and Supabase, focused on speed, privacy, and a clean developer API. Supports nested threads, reactions, and AI-powered profanity filtering.",
    tech: ["Next.js", "TypeScript", "Supabase", "Postgres", "Edge Functions"],
    role: "",
    status: "Live",
    link: "https://qumment.vercel.app",
    repo: "https://github.com/your-username/qumment",
  },
  {
    title: "SocketTalk – Real-time Chat App",
    tagline: "",
    description:
      "Real-time chat web app built with React, Express, Socket.IO, and MongoDB. Features secure JWT-based authentication, live messaging across rooms, and persistent chat history so conversations are always available.",
    tech: ["React", "Express", "Socket.IO", "MongoDB", "JWT"],
    role: "",
    status: "Live",
    link: "https://socket-talk-client.vercel.app",
    repo: "https://github.com/jeffreysolomon123/Socket-Talk-Client",
  },

  {
    title: "Crewmate – Find Collaborators for Your Projects",
    tagline: "",
    description:
      "Crewmate helps users find the right collaborators for their tech projects. Users can create profiles, list their skills, browse open projects, and connect with others to form teams. Built with a secure backend, smooth UX, and real-time collaboration features in mind.",
    tech: ["React", "Express", "Supabase", "Bcrypt", "Node.js"],
    role: "",
    status: "Live",
    link: "https://crewmate-neon.vercel.app/",
    repo: "https://github.com/jeffreysolomon123/crewmate",
  },

  {
    title: "Neighbourly – Local Community Social App",
    tagline: "",
    description:
      "A sleek mobile app that brings your neighborhood online. Users can connect with nearby residents, share updates, discover local events, and stay in the loop with what's happening around them. Built with Expo + React Native and powered by a secure Supabase + Express backend.",
    tech: [
      "Expo",
      "React Native",
      "Express",
      "Supabase",
      "PostgreSQL",
      "JWT Auth",
    ],
    role: "",
    status: "In Progress",
    repo: "https://github.com/jeffreysolomon123/Neighbourly",
  },
  {
    title: "SafarX - AI-Powered Tourist Safety & Anomaly Detection Ecosystem",
    tagline: "",
    description:
      "A proactive safety platform designed for travellers. Built with mobile and web interfaces, SafarX uses machine learning for anomaly detection, geo-fencing alerts, and blockchain-backed IDs to ensure a secure and seamless travel experience.",
    tech: [
      "React Native",
      "Expo",
      "Express",
      "PostgreSQL",
      "Supabase",
      "JWT Auth",
    ],
    role: "",
    link: "", // live deployment not yet available
    repo: "https://github.com/jeffreysolomon123/safarX",
  },
  {
    title: "Elliptic Illicit Transaction Detection - ML Classifier",
    tagline: "",
    description:
      "Performed extensive EDA and preprocessing on the Elliptic dataset to detect illicit cryptocurrency transactions. Trained and optimized a K-Neighbors Classification model, achieving almost 98% accuracy in classifying lawful vs. unlawful activity. Features data cleaning, feature selection, scaling, and evaluation using real blockchain transaction graphs.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "EDA"],
    role: "ML engineer",
    repo: "https://github.com/jeffreysolomon123/elliptic-illicit-detection",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#03030A] text-white projectsbg">
      {/* Background gradient / glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 sm:px-10 lg:px-16">
        {/* Header */}
        <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-5xl geist-light">
                Some of my selected work across{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  <br />
                  web, mobile & AI.
                </span>
              </h1>
            </div>
          </div>

          <p className="max-w-2xl text-sm text-white/60 geist-regular">
            These are the things I’m proud of right now – shipping real
            products, playing with agents and LLMs, and exploring how AI,
            design, and engineering can come together to feel effortless for the
            user.
          </p>
        </header>

        {/* Project grid */}
        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:border-purple-300/50 hover:bg-white/10"
            >
              <div className="space-y-4">
                {/* Status + role */}
                <div className="flex items-center justify-between gap-3 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-3 py-1 geist-regular">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === "Live"
                          ? "bg-emerald-400"
                          : project.status === "In Progress"
                          ? "bg-amber-300"
                          : "bg-sky-300"
                      }`}
                    />
                    {project.status ?? "Project"}
                  </span>
                  <span className="truncate text-right text-[11px] text-white/50 geist-regular">
                    {project.role}
                  </span>
                </div>

                {/* Title + tagline */}
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-white sm:text-xl geist-medium">
                    {project.title}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.18em] text-purple-200/70 geist-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70 geist-regular">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-white/70 geist-regular"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.link || project.repo) && (
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white text-[11px] px-3 py-1.5 text-black transition hover:opacity-90 active:scale-95 geist-medium"
                    >
                      View live
                      <span aria-hidden>↗</span>
                    </Link>
                  )}
                  {project.repo && (
                    <Link
                      href={project.repo}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur transition hover:border-white/50 hover:bg-black/70 geist-regular"
                    >
                      Source on GitHub
                    </Link>
                  )}
                </div>
              )}
            </article>
          ))}
        </section>

        {/* Footer note */}
        <section className="mt-4 border-t border-white/10 pt-6 text-xs text-white/50 geist-regular">
          <p>
            I’m always building something new – agents, tiny tools, experiments.
            If you want to collaborate on an AI-driven product,{" "}
            <Link
              href="#contact"
              className="text-purple-200 underline-offset-4 hover:underline"
            >
              let’s talk
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

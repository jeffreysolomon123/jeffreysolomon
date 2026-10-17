export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "X";
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  /** Hero name, one entry per stacked line. */
  heroLines: [string, string];
  /** Small stacked wordmark in the nav. */
  logoLines: [string, string];
  initials: string;
  role: string;
  location: string;
  intro: string;
  lookingFor: string;
  email: string;
  siteUrl: string;
  resume: string | null;
  socials: SocialLink[];
};

export const profile: Profile = {
  name: "Jeffrey Solomon M",
  heroLines: ["Jeffrey", "Solomon"],
  logoLines: ["Jeffrey", "Solomon"],
  initials: "JS",
  role: "Software developer, agentic AI",
  location: "Chennai, India",
  // Draft — edit freely.
  intro:
    "I'm a third-year computer science student in Chennai. I build full-stack web apps, mobile apps and agentic AI systems, then take them to hackathons to see if they hold up. A few of them have placed.",
  lookingFor:
    "Open to software developer and agentic AI internships at product and AI startups.",
  email: "jeffreysolomon.official@gmail.com",
  siteUrl: "https://jeffreysolomon.vercel.app",
  // TODO(jeffrey): confirm public/Jeffrey-Solomon-Resume.pdf is your current résumé (set to null to hide the link).
  resume: "/Jeffrey-Solomon-Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/jeffreysolomon123", handle: "jeffreysolomon123" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jeffreysolomon123", handle: "jeffreysolomon123" },
    { label: "X", href: "https://x.com/jeffreysolomonm", handle: "@jeffreysolomonm" },
  ],
};

/** Monochrome icons shown in the hero. Keys map to icons in components/ui/TechIcon.tsx. */
export const heroTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Flutter",
  "Supabase",
  "PostgreSQL",
  "LangChain",
] as const;

export const sections = [
  { id: "work", label: "Work" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

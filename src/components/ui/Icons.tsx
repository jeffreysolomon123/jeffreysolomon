import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
  SiFlutter,
  SiLangchain,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { heroTech } from "@/data/profile";
import type { SocialLink } from "@/data/profile";

export const techIcons: Record<(typeof heroTech)[number], IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Python: SiPython,
  Flutter: SiFlutter,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  LangChain: SiLangchain,
};

export const socialIcons: Record<SocialLink["label"], IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
};

type ArrowProps = { className?: string; direction?: "down" | "up-right" | "right" };

/** Thin stroke arrow, matches the hairline style. */
export function Arrow({ className = "", direction = "right" }: ArrowProps) {
  const paths = {
    right: "M3 10h13M11 5l5 5-5 5",
    down: "M10 3v13M5 11l5 5 5-5",
    "up-right": "M5 15L15 5M7 5h8v8",
  } as const;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[direction]} />
    </svg>
  );
}

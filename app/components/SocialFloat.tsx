// app/components/SocialFloat.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

type SocialFloatProps = {
  linkedin?: string;
  github?: string;
  instagram?: string;
  youtube?: string;
};

export default function SocialFloat({
  linkedin = "https://linkedin.com/in/your-handle",
  github = "https://github.com/your-handle",
  instagram = "https://instagram.com/your-handle",
  youtube = "https://youtube.com/@your-handle",
}: SocialFloatProps) {
  return (
    <div
      className="
        fixed bottom-4 right-4 z-40
        flex flex-row items-center gap-3
        rounded-2xl border border-white/15
        bg-black/70 px-3 py-3
        shadow-xl shadow-black/40
        backdrop-blur-md
      "
    >
      <Link
        href={linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
        className="
          transition hover:scale-110 hover:text-blue-400
          text-white/80
        "
      >
        <FaLinkedin className="h-5 w-5" />
      </Link>

      <Link
        href={github}
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
        className="
          transition hover:scale-110 hover:text-gray-200
          text-white/80
        "
      >
        <FaGithub className="h-5 w-5" />
      </Link>

      <Link
        href={instagram}
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
        className="
          transition hover:scale-110 hover:text-pink-400
          text-white/80
        "
      >
        <FaInstagram className="h-5 w-5" />
      </Link>

      <Link
        href={youtube}
        aria-label="YouTube"
        target="_blank"
        rel="noreferrer"
        className="
          transition hover:scale-110 hover:text-red-500
          text-white/80
        "
      >
        <FaYoutube className="h-5 w-5" />
      </Link>
    </div>
  );
}

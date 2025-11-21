// components/GlassHeader.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
};

interface GlassHeaderProps {
  brand?: string;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function GlassHeader({
  brand = "Your Name",
  links = defaultLinks,
}: GlassHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full dm-serif-display-regular">
      {/* Glass background */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between rounded-3xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-xl backdrop-saturate-150">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-white sm:text-base pl-5">
              <Link href={"/"}>
                <h1 className="text-xl">
                  <span className="geist-medium text-white">
                    Jeffrey <span className="geist-extralight">Solomon</span>
                  </span>
                </h1>
              </Link>
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex px-5 geist-regular">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white hover:drop-shadow"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="geist-regular rounded-full border border-white/40 bg-[#4A0039]/60 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-[#4A0039]/40"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            {/* Simple hamburger / close icon */}
            <div className="flex h-4 w-4 flex-col justify-between">
              <span
                className={`h-[2px] w-full rounded-full bg-white transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-white transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        <nav
          className={`
    mt-2 overflow-hidden rounded-3xl border border-white/20
    bg-white/10 px-4 py-1.5 text-sm text-white/90 shadow-lg
    backdrop-blur-xl backdrop-saturate-150 md:hidden geist-regular
    transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
    origin-top
    ${
      open
        ? "max-h-64 opacity-100 scale-100 translate-y-0"
        : "max-h-0 opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }
  `}
        >
          <div className="flex flex-col gap-2 py-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-2 py-1.5 transition hover:bg-white/15"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-2xl border border-white/40 bg-white/10 px-3 py-2 text-xs font-semibold text-white text-center"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState, useSyncExternalStore } from "react";
import { profile, sections } from "@/data/profile";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { openCommandPalette, usePaletteShortcutLabel } from "./CommandMenu";

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

export function Nav() {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 8,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const shortcut = usePaletteShortcutLabel();
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        solid ? "border-[rgba(11,11,11,0.15)] bg-cream" : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="font-display text-[13px] leading-[0.95] font-extrabold tracking-[-0.02em] uppercase"
          onClick={() => setOpen(false)}
        >
          <span className="block text-ink">{profile.logoLines[0]}</span>
          <span className="block text-accent-deep">{profile.logoLines[1]}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6 text-[13.5px] font-medium text-ink">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors hover:decoration-current"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={openCommandPalette}
            className="h-9 rounded-[2px] border border-ink/30 px-2.5 font-mono text-[11.5px] text-ink transition-colors hover:border-ink"
            aria-label="Open command palette"
          >
            {shortcut}
          </button>
          <Button href="#contact" variant="ink">
            Get in touch
          </Button>
        </nav>

        <button
          type="button"
          className="h-9 rounded-[2px] border border-ink px-3 font-mono text-[12px] text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t border-[rgba(11,11,11,0.15)] bg-cream md:hidden">
          <Container className="py-2">
            <ul>
              {sections.map((s) => (
                <li key={s.id} className="border-b border-[rgba(11,11,11,0.15)] last:border-b-0">
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-[28px] font-bold tracking-[-0.03em]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}

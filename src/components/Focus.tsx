"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { focusAreas, focusIntro } from "@/data/focus";
import { projects } from "@/data/projects";
import { Band } from "./ui/Band";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { ChipList } from "./ui/Chip";
import { Arrow } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

const projectTitle = (slug: string) => projects.find((p) => p.slug === slug)?.title;

export function Focus() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Band tone="ink" id="focus" aria-labelledby="focus-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader id="focus-heading" label="Technical Focus" intro={focusIntro} />
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
          <ul className="col-span-12 border-b border-line md:col-span-9 md:col-start-4">
            {focusAreas.map((area, i) => {
              const open = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              const linked = area.projects
                .map((slug) => ({ slug, title: projectTitle(slug) }))
                .filter((p): p is { slug: string; title: string } => Boolean(p.title));

              return (
                <li key={area.title} className="border-t border-line">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="group flex w-full items-center gap-4 py-6 text-left md:gap-6 md:py-7"
                    >
                      <span className="w-7 shrink-0 font-mono text-[12px] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-[clamp(1.6rem,4.2vw,2.75rem)] leading-[1.05] font-bold tracking-[-0.03em] transition-colors group-hover:text-accent">
                        {area.title}
                      </span>
                      <Arrow
                        direction="down"
                        className={`size-6 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-accent" : ""}`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 pl-11 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:gap-10 md:pl-[3.25rem]">
                          <p className="max-w-[52ch] text-[16px] leading-[1.65] text-muted">{area.description}</p>
                          <div className="space-y-5">
                            <ChipList items={area.stack} label={`${area.title} stack`} />
                            {linked.length > 0 && (
                              <p className="font-mono text-[12px] text-muted">
                                Seen in{" "}
                                {linked.map((p, j) => (
                                  <span key={p.slug}>
                                    {j > 0 && ", "}
                                    <a
                                      href={`#project-${p.slug}`}
                                      className="text-fg underline decoration-accent underline-offset-4 hover:text-accent"
                                    >
                                      {p.title}
                                    </a>
                                  </span>
                                ))}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Band>
  );
}

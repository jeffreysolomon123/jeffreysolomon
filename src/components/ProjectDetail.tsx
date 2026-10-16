"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Arrow } from "./ui/Icons";

/** "Case study" toggle that expands problem / approach / stack / outcome. */
export function ProjectDetail({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const id = `case-study-${project.slug}`;
  const detail = project.detail;
  if (!detail) return null;

  const rows = [
    { label: "Problem", body: detail.problem },
    { label: "Approach", body: detail.approach },
    { label: "Stack", body: project.stack.length ? project.stack.join(", ") : undefined },
    { label: "Outcome", body: detail.outcome },
  ].filter((r): r is { label: string; body: string } => Boolean(r.body));

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 font-mono text-[12px] text-fg underline decoration-line underline-offset-4 hover:decoration-accent"
      >
        {open ? "Hide case study" : "Case study"}
        <Arrow direction="down" className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <dl className="mt-6 grid border-t border-line sm:grid-cols-2">
              {rows.map((r) => (
                <div key={r.label} className="border-b border-line py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6 sm:last:odd:col-span-2 sm:last:odd:border-r-0">
                  <dt className="font-mono text-[11.5px] text-label">{r.label}</dt>
                  <dd className="mt-2 text-[15px] leading-[1.6] text-fg">{r.body}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

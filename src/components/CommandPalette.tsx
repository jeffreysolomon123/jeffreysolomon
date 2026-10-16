"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { profile, sections } from "@/data/profile";
import { archive, projects } from "@/data/projects";

type Item = { id: string; group: "Sections" | "Projects" | "Links"; label: string; run: () => void };

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const items = useMemo<Item[]>(
    () => [
      { id: "top", group: "Sections", label: "Home", run: () => jump("top") },
      ...sections.map((s) => ({ id: s.id, group: "Sections" as const, label: s.label, run: () => jump(s.id) })),
      { id: "education", group: "Sections", label: "Education and skills", run: () => jump("education") },
      ...[...projects, ...archive].map((p) => ({
        id: `project-${p.slug}`,
        group: "Projects" as const,
        label: p.title,
        run: () => jump(`project-${p.slug}`),
      })),
      {
        id: "email",
        group: "Links",
        label: `Email ${profile.email}`,
        run: () => (window.location.href = `mailto:${profile.email}`),
      },
      ...profile.socials.map((s) => ({
        id: `social-${s.label}`,
        group: "Links" as const,
        label: `Open ${s.label}`,
        run: () => window.open(s.href, "_blank", "noopener"),
      })),
    ],
    [],
  );

  const q = query.trim().toLowerCase();
  const results = q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;
  const activeIndex = Math.min(active, Math.max(results.length - 1, 0));

  useEffect(() => {
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    document.getElementById(`${listId}-${activeIndex}`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, listId]);

  const select = (item: Item | undefined) => {
    if (!item) return;
    onClose();
    // Let the body scroll lock release before scrolling.
    requestAnimationFrame(item.run);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((activeIndex + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((activeIndex - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      select(results[activeIndex]);
    } else if (e.key === "Tab") {
      // Single focusable element: keep focus in the dialog.
      e.preventDefault();
    }
  };

  let lastGroup = "";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/60 px-4 pt-[14vh]" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-[560px] border border-ink bg-cream text-ink"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-[rgba(11,11,11,0.15)] px-4">
          <span aria-hidden="true" className="font-mono text-[12px] text-accent-deep">
            &gt;
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Jump to a section or project"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results.length ? `${listId}-${activeIndex}` : undefined}
            aria-autocomplete="list"
            className="h-14 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[#6b665c]"
          />
          <kbd className="font-mono text-[11px] text-[#6b665c]">Esc</kbd>
        </div>
        <ul id={listId} role="listbox" aria-label="Results" className="max-h-[min(380px,55vh)] overflow-y-auto py-2">
          {results.length === 0 && <li className="px-4 py-6 font-mono text-[12px] text-[#6b665c]">No matches.</li>}
          {results.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <li key={item.id} role="presentation">
                {header && (
                  <p role="presentation" className="px-4 pt-3 pb-1 font-mono text-[11px] text-[#6b665c]">
                    {header}
                  </p>
                )}
                <div
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === activeIndex}
                  onMouseMove={() => setActive(i)}
                  onClick={() => select(item)}
                  className={`mx-2 flex cursor-pointer items-center justify-between px-2 py-2.5 text-[15px] ${
                    i === activeIndex ? "bg-ink text-bone" : ""
                  }`}
                >
                  {item.label}
                  {i === activeIndex && (
                    <span aria-hidden="true" className="font-mono text-[11px] text-accent">
                      Enter
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

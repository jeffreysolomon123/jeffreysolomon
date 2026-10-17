"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "./Icons";

type Props = { label: string; children: React.ReactNode };

/** Horizontal scroll-snap track with prev/next buttons and a progress bar. Native scrolling, so touch and trackpads just work. */
export function Carousel({ label, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ canPrev: false, canNext: true, progress: 0 });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft < max - 4,
      progress: max > 0 ? el.scrollLeft / max : 1,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: reduce ? "auto" : "smooth" });
  };

  const buttonClass =
    "flex size-10 items-center justify-center rounded-[2px] border border-line text-fg transition-colors hover:border-fg hover:bg-fg hover:text-[var(--band-bg)] disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-6">
        <h3 className="font-mono text-[12px] text-muted">
          {label} <span className="text-fg">({Children.count(children)})</span>
        </h3>
        <div className="flex gap-2">
          <button type="button" onClick={() => page(-1)} disabled={!state.canPrev} aria-label="Previous projects" className={buttonClass}>
            <Arrow className="size-4 rotate-180" />
          </button>
          <button type="button" onClick={() => page(1)} disabled={!state.canNext} aria-label="Next projects" className={buttonClass}>
            <Arrow className="size-4" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label={label}
        className="no-scrollbar relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:gap-6 lg:px-0"
      >
        {Children.map(children, (child) => (
          <li className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/3)]">{child}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="mt-8 h-px bg-line">
        <div
          className="h-px origin-left bg-accent transition-transform duration-200"
          style={{ transform: `scaleX(${Math.max(state.progress, 0.08)})` }}
        />
      </div>
    </div>
  );
}

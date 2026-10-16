"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";

const OPEN_EVENT = "open-command-palette";

// The palette itself is only downloaded the first time it is opened.
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const noop = () => () => {};

/** "⌘K" on Apple devices, "Ctrl K" elsewhere. */
export function usePaletteShortcutLabel() {
  return useSyncExternalStore(
    noop,
    () => (/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl K"),
    () => "Ctrl K",
  );
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  return open ? <CommandPalette onClose={() => setOpen(false)} /> : null;
}

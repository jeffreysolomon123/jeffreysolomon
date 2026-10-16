"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

/** Fade + rise once when scrolled into view. Disabled by prefers-reduced-motion (see globals.css). */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}

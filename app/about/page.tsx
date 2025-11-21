// app/about/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.84, 0.44, 1],
      staggerChildren: 0.08,
    },
  },
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 0.84, 0.44, 1],
    },
  },
} as const;

const fadeInCard = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 0.84, 0.44, 1],
    },
  },
} as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#03030A] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-4rem] bottom-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-20 pt-28 sm:px-10 lg:px-16"
      >
        {/* Heading */}
        <motion.header variants={fadeInUp} className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-purple-200/70 geist-medium">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold geist-light">
            A little about{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent dm-serif-display-regular">
              who I am &amp; what I&apos;m building.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-white/65 geist-regular">
            This is the zoomed-out picture – what I work on, what I care about,
            and where I&apos;m trying to go long term.
          </p>
        </motion.header>

        {/* Main about card */}
        <motion.section
          variants={fadeInCard}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <div className="text-sm lg:text-xl leading-relaxed text-white/80 geist-regular space-y-4">
            <p>
              I'm Jeffrey, a full-stack and AI developer based in Chennai,
              India, who loves building end-to-end solutions — clean web apps,
              smooth mobile experiences, and intelligent systems powered by ML
              and LLMs. I work with React, Next.js, Supabase, Express, and React
              Native, Python, and I’ve been exploring vector search, RAG,
              classification models, and AI agent workflows.
            </p>
            <p>
              I like creating stuff that feels fast, simple, and actually
              useful. I care a lot about good DX, clean architecture, and UI
              that doesn’t get in the way of what the user is trying to do. Most
              of my projects start as a “what if I just built this in a
              weekend?” idea and slowly evolve into something real.
            </p>
            <p>
              My long-term goal is to build and launch my own startup —
              something at the intersection of AI, automation, and real-world
              problems. Right now I&apos;m in the experimentation era: trying
              things, shipping fast, learning from what breaks, and slowly
              figuring out which ideas are worth doubling down on.
            </p>
          </div>
        </motion.section>

        {/* Split layout: now / exploring / goals */}
        <motion.section
          variants={fadeInUp}
          className="grid gap-6 md:grid-cols-3"
        >
          {/* What I'm doing now */}
          <motion.div
            variants={fadeInCard}
            className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
          >
            <h2 className="text-sm font-semibold text-white geist-medium mb-2">
              Right now
            </h2>
            <p className="text-xs text-white/70 geist-regular leading-relaxed">
              Building web + mobile products, tinkering with agents and RAG
              setups, and polishing the kind of projects I&apos;d actually show
              investors or co-founders in the future.
            </p>
          </motion.div>

          {/* What I'm exploring */}
          <motion.div
            variants={fadeInCard}
            className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
          >
            <h2 className="text-sm font-semibold text-white geist-medium mb-2">
              Currently exploring
            </h2>
            <ul className="space-y-1.5 text-xs text-white/70 geist-regular">
              <li>• AI agents for real workflows (not just demos)</li>
              <li>• RAG systems that feel instant and low friction</li>
              <li>• Clean productized backends with great DX</li>
              <li>• How to ship faster without sacrificing quality</li>
            </ul>
          </motion.div>

          {/* Career goals */}
          <motion.div
            variants={fadeInCard}
            className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
          >
            <h2 className="text-sm font-semibold text-white geist-medium mb-2">
              Career goals
            </h2>
            <p className="text-xs text-white/70 geist-regular leading-relaxed mb-3">
              Medium term, I want to work on hard technical problems with smart,
              ambitious people. Long term, I want to build a startup around AI +
              automation that actually ships into the real world, not just stays
              as a demo on GitHub.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-[11px] text-purple-200 hover:text-purple-100 underline-offset-4 hover:underline geist-medium"
            >
              See what I&apos;m building right now
              <span aria-hidden>↗</span>
            </Link>
          </motion.div>
        </motion.section>
      </motion.div>
    </main>
  );
}

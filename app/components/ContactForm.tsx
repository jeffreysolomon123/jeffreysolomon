"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyzvglaj");

  if (state.succeeded) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center  ">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />
          <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-4 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-purple-200/80 geist-medium mb-2">
            Message sent
          </p>
          <h1 className="text-2xl font-semibold geist-light mb-3">
            Thanks for reaching out 👋
          </h1>
          <p className="text-sm text-white/70 geist-regular">
            I&apos;ll read your message and get back to you as soon as I can.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03030A] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-4rem] bottom-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 pt-28 pb-20 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold geist-light">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent dm-serif-display-regular">
              Touch
            </span>
          </h1>
          <p className="mt-3 text-sm text-white/65 geist-regular max-w-xl">
            If you&apos;d like to collaborate on a project, chat about AI, or
            just say hi - drop me a message below.
          </p>
        </motion.header>

        {/* Form card */}
        <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border border-white/10 bg-white/5 p-2 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm text-white/80 geist-regular"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="
                  mt-1 w-full rounded-lg border border-white/10
                  bg-black/30 px-4 py-2.5 text-sm text-white
                  placeholder:text-white/30
                  shadow-inner shadow-black/20
                  transition
                  focus:border-purple-300/60 focus:bg-black/50
                  focus:outline-none focus:ring-2 focus:ring-purple-500/40
                  geist-regular
                "
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm text-white/80 geist-regular"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="
                  mt-1 w-full rounded-lg border border-white/10
                  bg-black/30 px-4 py-2.5 text-sm text-white
                  placeholder:text-white/30
                  shadow-inner shadow-black/20
                  transition
                  focus:border-purple-300/60 focus:bg-black/50
                  focus:outline-none focus:ring-2 focus:ring-purple-500/40
                  geist-regular
                "
                placeholder="you@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-xs text-red-300 mt-1"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm text-white/80 geist-regular"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="
                  mt-1 w-full rounded-lg border border-white/10
                  bg-black/30 px-4 py-3 text-sm text-white
                  placeholder:text-white/30
                  shadow-inner shadow-black/20
                  transition
                  focus:border-purple-300/60 focus:bg-black/50
                  focus:outline-none focus:ring-2 focus:ring-purple-500/40
                  geist-regular
                "
                placeholder="Tell me about what you’re building or what you have in mind."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-xs text-red-300 mt-1"
              />
            </div>

            {/* Submit + small note */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={state.submitting}
                style={{
                  background: "linear-gradient(90deg, #F667BC, #9C95EB)",
                }}
                className="
    w-full cursor-pointer rounded-lg
    px-6 py-2.5 text-sm font-medium text-black
    disabled:cursor-not-allowed disabled:opacity-60
    geist-medium
  "
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </motion.button>

              <p className="text-[11px] text-white/45 geist-regular text-center">
                No spam, no newsletters - just a direct message that lands in my
                inbox.
              </p>
            </div>
          </form>
        </motion.section>
      </div>
    </main>
  );
}

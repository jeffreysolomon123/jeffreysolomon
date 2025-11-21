"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type HeroSectionProps = {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export default function HeroSection({
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  const router = useRouter();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) return onPrimaryClick();
    router.push("/projects");
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) return onSecondaryClick();
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center geist-regular">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Animated TEXT block */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 0.84, 0.44, 1],
            }}
          >
            {/* Heading */}
            <motion.h1
              className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl geist-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 0.84, 0.44, 1],
              }}
            >
              I build modern products across{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent dm-serif-display-regular">
                <br /> AI, Web & Mobile.
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="max-w-3xl text-lg leading-relaxed text-white/70 sm:text-md geist-light my-10 lg:my-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.22,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Hey, I'm Jeffrey. I’m 18, obsessed with building things — web
              apps, mobile apps, ML models, LLM-powered systems, AI Agents, you
              name it. I love fast execution, clean architecture, and creating
              tech that feels like magic.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {/* View Projects button */}
              <motion.button
                onClick={handlePrimaryClick}
                style={{
                  background: "linear-gradient(to right, #FFFFFF, #b1b1b3)",
                }}
                className="
                  cursor-pointer rounded-xl px-6 py-2.5 text-sm font-medium text-black
                  shadow-lg transition hover:opacity-90 active:scale-95 geist-medium mt-5
                "
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.16, 0.84, 0.44, 1],
                    },
                  },
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>

              {/* Download Resume button */}
              <motion.button
                onClick={handleSecondaryClick}
                className="
                  rounded-xl border cursor-pointer border-white/25
                  bg-black/40 px-6 py-2.5 text-sm font-medium text-white/80
                  backdrop-blur transition hover:border-white/50 hover:bg-black/60 
                  geist-regular mt-5
                "
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      ease: [0.16, 0.84, 0.44, 1],
                    },
                  },
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <a href="/Jeffrey-Solomon-Resume.pdf" download>
                  Download resume
                </a>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

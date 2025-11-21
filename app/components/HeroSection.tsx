"use client";
import { useRouter } from "next/navigation";

type HeroSectionProps = {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export default function HeroSection({
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  const router = useRouter();

  // Default actions if no prop callback is passed
  const handlePrimaryClick = () => {
    if (onPrimaryClick) return onPrimaryClick();
    router.push("/projects");
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) return onSecondaryClick();
    // example: router.push("/resume")
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center geist-regular">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl geist-light">
              i build modern products across{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent dm-serif-display-regular">
                <br /> AI, Web and Mobile.
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-white/70 sm:text-md geist-light">
              Hey, I'm Jeffrey. I’m 18, obsessed with building things – web
              apps, mobile apps, ML models, LLM-powered systems, AI Agents, you
              name it. I love fast execution, clean architecture, and creating
              tech that feels like magic.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              {/* View Projects */}
              <button
                onClick={handlePrimaryClick}
                style={{
                  background: "linear-gradient(to right, #FFFFFF, #b1b1b3)",
                }}
                className="
                  cursor-pointer rounded-xl
                  px-6 py-2.5 text-sm font-medium text-black
                  shadow-lg
                  transition hover:opacity-90 active:scale-95
                  geist-medium
                "
              >
                View Projects
              </button>

              {/* Download Resume */}
              <button
                onClick={handleSecondaryClick}
                className="
                  rounded-xl border cursor-pointer border-white/25
                  bg-black/40 px-6 py-2.5 text-sm font-medium text-white/80
                  backdrop-blur transition hover:border-white/50 hover:bg-black/60
                  geist-regular
                "
              >
                Download resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

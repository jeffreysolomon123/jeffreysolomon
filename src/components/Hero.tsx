import Image from "next/image";
import { heroTech, profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { techIcons } from "./ui/Icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="band-cream overflow-hidden">
      <Container className="grid lg:min-h-[min(100svh,880px)] lg:grid-cols-12">
        <div className="flex flex-col justify-center pt-28 pb-14 lg:col-span-6 lg:pt-32 lg:pr-10 lg:pb-20">
          <p className="mb-7 flex items-center gap-2 font-mono text-[12px] text-muted">
            <span aria-hidden="true" className="inline-block size-1.5 bg-accent" />
            {profile.role}, {profile.location}
          </p>

          <h1
            id="hero-name"
            className="font-display text-[clamp(3.5rem,17vw,8.75rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-accent lg:text-[clamp(4.5rem,7.6vw,8.25rem)]"
          >
            <span className="block">{profile.heroLines[0]}</span>
            <span className="block">{profile.heroLines[1]}</span>
            <span className="sr-only"> ({profile.name})</span>
          </h1>

          <p className="mt-8 max-w-[40ch] text-[17px] leading-[1.6] text-fg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Button href="#work" variant="accent">
              See my work
            </Button>
            {profile.resume && (
              <Button href={profile.resume} variant="ink" target="_blank" rel="noopener">
                Résumé (PDF)
              </Button>
            )}
          </div>

          <ul aria-label="Technologies I use" className="mt-12 grid w-fit grid-cols-4 gap-x-8 gap-y-6 text-fg">
            {heroTech.map((name) => {
              const Icon = techIcons[name];
              return (
                <li key={name} title={name} className="opacity-80 transition-opacity hover:opacity-100">
                  <Icon aria-hidden="true" className="size-[22px]" />
                  <span className="sr-only">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Accent panel bleeds to the right edge of the viewport via the ::after. */}
        <div className="relative -mx-4 flex min-h-[380px] items-end justify-center bg-accent pt-12 sm:-mx-6 lg:col-span-6 lg:mx-0 lg:pt-24 lg:after:absolute lg:after:inset-y-0 lg:after:left-full lg:after:w-[50vw] lg:after:bg-accent">
          {profile.photo ? (
            <Image
              src={profile.photo.src}
              width={profile.photo.width}
              height={profile.photo.height}
              alt={profile.photo.alt}
              priority
              sizes="(min-width: 1024px) 760px, 86vw"
              className="relative z-10 h-auto w-[min(86%,520px)] select-none lg:h-[min(86svh,820px)] lg:w-auto lg:max-w-full lg:object-contain lg:object-bottom"
            />
          ) : (
            // TODO(jeffrey): add public/me.png and set profile.photo.
            <div className="mb-0 flex aspect-[4/5] w-[min(70%,420px)] items-center justify-center border border-ink/30 font-mono text-[12px] text-ink">
              Photo coming soon
            </div>
          )}
          <p className="absolute bottom-4 left-4 z-20 font-mono text-[11px] text-ink sm:left-6 lg:left-6">
            Based in {profile.location}
          </p>
        </div>
      </Container>
    </section>
  );
}

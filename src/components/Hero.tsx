import { heroTech, profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { techIcons } from "./ui/Icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="band-cream overflow-hidden">
      <Container className="flex flex-col justify-center pt-28 pb-16 lg:min-h-[min(92svh,820px)] lg:pt-28 lg:pb-16">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[12px] text-muted">
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block size-1.5 bg-accent" />
            {profile.role}
          </p>
          <p>Based in {profile.location}</p>
        </div>

        <h1
          id="hero-name"
          className="mt-8 font-display text-[clamp(3.5rem,17vw,8.75rem)] leading-[0.88] font-extrabold tracking-[-0.04em] text-accent md:mt-10 lg:text-[clamp(8rem,17.5vw,15.5rem)]"
        >
          <span className="block">{profile.heroLines[0]}</span>
          <span className="block md:pl-[0.55em]">{profile.heroLines[1]}</span>
          <span className="sr-only"> ({profile.name})</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 md:mt-14 md:grid-cols-12 md:gap-x-6 md:pt-10">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="max-w-[44ch] text-[17px] leading-[1.6] text-fg">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Button href="#work" variant="accent" className="text-white">
                See my work
              </Button>
              {profile.resume && (
                <Button href={profile.resume} variant="ink" target="_blank" rel="noopener">
                  Résumé (PDF)
                </Button>
              )}
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[12px] text-muted">Tools I reach for</p>
            <ul aria-label="Technologies I use" className="mt-5 grid w-fit grid-cols-4 gap-x-8 gap-y-6 text-fg">
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
        </div>
      </Container>
    </section>
  );
}

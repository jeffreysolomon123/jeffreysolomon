import { heroTech, profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { techIcons } from "./ui/Icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="band-cream overflow-hidden">
      {/* On laptops everything fits in one viewport: name on the left, intro beside it. */}
      <Container className="flex flex-col justify-center pt-28 pb-16 lg:min-h-[min(100svh,860px)] lg:pt-24 lg:pb-14">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[12px] text-muted">
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block size-1.5 bg-accent" />
            {profile.role}
          </p>
          <p>Based in {profile.location}</p>
        </div>

        <div className="mt-8 grid gap-12 md:mt-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <h1
            id="hero-name"
            className="font-display text-[clamp(3.5rem,17vw,8.75rem)] leading-[0.88] font-extrabold tracking-[-0.04em] text-accent lg:col-span-8 lg:text-[clamp(6.5rem,12.5vw,10rem)]"
          >
            <span className="block">{profile.heroLines[0]}</span>
            <span className="block md:pl-[0.55em]">{profile.heroLines[1]}</span>
            <span className="sr-only"> ({profile.name})</span>
          </h1>

          <div className="border-t border-line pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pb-2 lg:pl-8">
            <p className="max-w-[44ch] text-[17px] leading-[1.6] text-fg lg:text-[16px]">{profile.intro}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Button href="#work" variant="accent" className="text-white">
                See my work
              </Button>
              {profile.resume && (
                <Button href={profile.resume} variant="ink" target="_blank" rel="noopener">
                  Résumé (PDF)
                </Button>
              )}
            </div>

            <ul aria-label="Technologies I use" className="mt-10 grid w-fit grid-cols-4 gap-x-8 gap-y-5 text-fg lg:mt-9">
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

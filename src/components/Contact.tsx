import { profile, sections } from "@/data/profile";
import { Band } from "./ui/Band";
import { Container } from "./ui/Container";
import { Label } from "./ui/Label";
import { Arrow, socialIcons } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <Band tone="ink" as="footer" id="contact" aria-labelledby="contact-heading" className="pt-20 pb-10 md:pt-28">
      <Container>
        <Reveal>
          <Label>Contact</Label>
          <h2
            id="contact-heading"
            className="mt-8 font-display text-[clamp(3.25rem,11vw,9.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em]"
          >
            Let&apos;s build
            <br />
            <span className="text-accent">something.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-16" delay={0.05}>
          <div className="col-span-12 md:col-span-8">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex max-w-full items-center gap-3 font-display text-[clamp(1.15rem,3.6vw,2.5rem)] font-bold tracking-[-0.02em] break-all underline decoration-accent decoration-2 underline-offset-[0.2em] transition-colors hover:text-accent sm:break-normal"
            >
              {profile.email}
              <Arrow
                direction="up-right"
                className="size-[0.8em] shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.6] text-muted">{profile.lookingFor}</p>
          </div>

          <ul aria-label="Social profiles" className="col-span-12 flex flex-col gap-3 md:col-span-4 md:items-end">
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[15px] transition-colors hover:text-accent"
                  >
                    <Icon aria-hidden="true" className="size-[18px]" />
                    <span>
                      {s.label} <span className="font-mono text-[12.5px] text-muted group-hover:text-accent">{s.handle}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-6 font-mono text-[11.5px] text-muted md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {profile.name}. {profile.location}.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
              {profile.resume && (
                <li>
                  <a href={profile.resume} target="_blank" rel="noopener" className="hover:text-fg">
                    Résumé
                  </a>
                </li>
              )}
              <li>
                <a href="#top" className="hover:text-fg">
                  Back to top
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </Band>
  );
}

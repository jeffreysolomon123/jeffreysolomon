import { experience } from "@/data/experience";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="band-cream pt-20 pb-8 md:pt-28">
      <Container>
        <Reveal>
          <SectionHeader id="experience-heading" label="Experience" intro="Internships so far, most recent first." />
        </Reveal>

        <ol className="mt-12 md:mt-16">
          {experience.map((job) => {
            const dates = `${job.start} – ${job.end}`;
            return (
              <Reveal as="li" key={`${job.company}-${job.start}`} className="grid grid-cols-12 gap-x-6">
                <p className="col-span-3 hidden pt-2 font-mono text-[12.5px] text-muted md:block">{dates}</p>
                <div className="relative col-span-12 border-l border-line pb-14 pl-6 md:col-span-9 md:pl-10">
                  <span aria-hidden="true" className="absolute top-3 -left-[4.5px] size-2 bg-accent" />
                  <p className="mb-3 font-mono text-[12.5px] text-muted md:hidden">{dates}</p>
                  <h3 className="font-display text-[clamp(1.6rem,3.2vw,2.25rem)] leading-[1.1] font-bold tracking-[-0.03em]">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 text-[16px] text-fg">
                    {job.company} <span className="text-muted">/ {job.location}</span>
                  </p>
                  <ul className="mt-5 max-w-[62ch] space-y-2.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[15.5px] leading-[1.6] text-fg">
                        <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-fg/50" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

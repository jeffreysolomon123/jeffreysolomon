import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { Container } from "./ui/Container";
import { Label } from "./ui/Label";
import { Reveal } from "./ui/Reveal";

export function Education() {
  return (
    <section id="education" aria-label="Education and skills" className="band-cream pb-20 md:pb-28">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 border-t border-line pt-16 md:pt-20">
          <Reveal className="col-span-12 lg:col-span-6">
            <Label as="h2" id="education-heading">
              Education
            </Label>
            <ul className="mt-8 border-b border-line">
              {education.map((e) => (
                <li key={e.qualification} className="flex items-start justify-between gap-6 border-t border-line py-5">
                  <div>
                    <h3 className="text-[17px] leading-snug font-medium">{e.qualification}</h3>
                    <p className="mt-1 text-[15px] text-muted">
                      {e.institution}
                      {e.location && `, ${e.location}`}
                    </p>
                    <p className="mt-2 font-mono text-[12px] text-muted">
                      {[e.board, e.year].filter(Boolean).join(" / ")}
                    </p>
                  </div>
                  <p className="shrink-0 font-display text-[22px] leading-none font-bold tracking-[-0.02em] whitespace-nowrap">
                    {e.score}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8" delay={0.08}>
            <Label as="h2" id="skills-heading">
              Skills
            </Label>
            <dl className="mt-8 border-b border-line">
              {skills.map((g) => (
                <div key={g.label} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
                  <dt className="pt-0.5 font-mono text-[12px] text-muted">{g.label}</dt>
                  <dd className="text-[15.5px] leading-[1.7]">
                    <ul className="flex flex-wrap gap-x-1">
                      {g.items.map((item, i) => (
                        <li key={item}>
                          {item}
                          {i < g.items.length - 1 && (
                            <span aria-hidden="true" className="text-muted">
                              ,
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

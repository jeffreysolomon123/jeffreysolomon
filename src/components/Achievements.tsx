import { achievements, highlightResults, type Result } from "@/data/achievements";
import { projects } from "@/data/projects";
import { Band } from "./ui/Band";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

function ResultTag({ result }: { result: Result }) {
  const highlight = highlightResults.includes(result);
  return (
    <span
      className={`inline-block rounded-[2px] border px-2 py-1 font-mono text-[11px] leading-none font-medium tracking-wide whitespace-nowrap ${
        highlight ? "border-accent bg-accent text-ink" : "border-line text-fg"
      }`}
    >
      {result}
    </span>
  );
}

export function Achievements() {
  return (
    <Band tone="ink" id="achievements" aria-labelledby="achievements-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            id="achievements-heading"
            label="Hackathons and recognition"
            intro="Hackathon results, most recent first."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
          <ol className="col-span-12 border-b border-line md:col-span-9 md:col-start-4">
            {achievements.map((a) => {
              const project = a.project ? projects.find((p) => p.slug === a.project) : undefined;
              return (
                <Reveal as="li" key={`${a.event}-${a.year ?? ""}`}>
                  <div className="grid gap-x-6 gap-y-3 border-t border-line py-8 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto]">
                    <div className="pt-1.5">
                      <ResultTag result={a.result} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] font-bold tracking-[-0.03em]">
                        {a.event}
                      </h3>
                      <p className="text-[15px] text-muted">{a.organizer}</p>
                      {a.resultDetail && <p className="font-mono text-[12.5px] text-label">{a.resultDetail}</p>}
                      {a.built && <p className="max-w-[60ch] pt-1 text-[15.5px] leading-[1.6] text-fg">{a.built}</p>}
                      {project && (
                        <a
                          href={`#project-${project.slug}`}
                          className="inline-block pt-1 font-mono text-[12px] text-fg underline decoration-accent underline-offset-4 hover:text-accent"
                        >
                          See {project.title}
                        </a>
                      )}
                    </div>
                    {a.year && <p className="font-mono text-[12.5px] text-muted sm:pt-1.5 sm:text-right">{a.year}</p>}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </Band>
  );
}

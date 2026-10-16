import { archive, projects, type Project } from "@/data/projects";
import { Band } from "./ui/Band";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { ChipList } from "./ui/Chip";
import { Arrow } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { ProjectDetail } from "./ProjectDetail";

const num = (i: number) => String(i + 1).padStart(2, "0");

function Meta({ project }: { project: Project }) {
  const parts = [project.year, project.category].filter(Boolean);
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] text-muted">
      {parts.map((p, i) => (
        <span key={p} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden="true">/</span>}
          {p}
        </span>
      ))}
      {project.status && (
        <span className="rounded-[2px] border border-current px-1.5 py-0.5 text-[10.5px] tracking-wide text-accent-deep uppercase">
          {project.status}
        </span>
      )}
    </p>
  );
}

function Links({ project }: { project: Project }) {
  const { github, live } = project.links;
  if (!github && !live) return null;
  const items = [
    live && { href: live, label: "Live site" },
    github && { href: github, label: "GitHub" },
  ].filter((x): x is { href: string; label: string } => Boolean(x));
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {items.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            {l.label}
            <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            <Arrow
              direction="up-right"
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Flagship({ project, index }: { project: Project; index: number }) {
  return (
    <article id={`project-${project.slug}`} className="group grid grid-cols-12 gap-x-6 gap-y-5 border-t border-line py-12 md:py-16">
      <p
        aria-hidden="true"
        className="col-span-12 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-extrabold tracking-[-0.04em] text-accent md:col-span-3"
      >
        {num(index)}
      </p>
      <div className="col-span-12 space-y-5 md:col-span-9">
        <Meta project={project} />
        <h3 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] font-extrabold tracking-[-0.035em]">
          <span className="underline decoration-transparent decoration-[3px] underline-offset-[0.14em] transition-colors duration-300 group-hover:decoration-accent">
            {project.title}
          </span>
        </h3>
        <p className="max-w-[58ch] text-[18px] leading-[1.55] text-fg">{project.summary}</p>
        {project.award && (
          <p className="font-mono text-[12px] text-label">
            <span aria-hidden="true">★ </span>
            {project.award}
          </p>
        )}
        <ChipList items={project.stack} label={`${project.title} stack`} />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-1">
          <Links project={project} />
          <ProjectDetail project={project} />
        </div>
      </div>
    </article>
  );
}

function Entry({ project, index }: { project: Project; index: number }) {
  return (
    <article id={`project-${project.slug}`} className="group flex h-full flex-col gap-3 border-t border-line pt-6 pb-10">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[12px] text-label">{num(index)}</span>
        <Meta project={project} />
      </div>
      <h3 className="font-display text-[26px] leading-[1.1] font-bold tracking-[-0.03em] transition-colors group-hover:text-accent-deep">
        {project.title}
      </h3>
      <p className="max-w-[52ch] text-[15.5px] leading-[1.6] text-muted">{project.summary}</p>
      {project.award && <p className="font-mono text-[12px] text-label">{project.award}</p>}
      {project.stack.length > 0 && <p className="font-mono text-[12px] text-fg">{project.stack.join(" · ")}</p>}
      <div className="mt-auto pt-2">
        <Links project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  const flagships = projects.filter((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);

  return (
    <Band tone="cream" id="work" aria-labelledby="work-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            id="work-heading"
            label="Projects I have built"
            intro="From a district administration's donation platform to agents that read changelogs. Flagships first."
          />
        </Reveal>

        <div className="mt-14 border-b border-line md:mt-20">
          {flagships.map((p, i) => (
            <Reveal key={p.slug}>
              <Flagship project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6">
          <h3 className="col-span-12 mb-8 font-mono text-[12px] text-muted md:col-span-3">More projects</h3>
          <ul className="col-span-12 grid gap-x-10 sm:grid-cols-2 md:col-span-9">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug}>
                <Entry project={p} index={flagships.length + i} />
              </Reveal>
            ))}
          </ul>
        </div>

        {archive.length > 0 && (
          <div className="mt-12 grid grid-cols-12 gap-x-6">
            <h3 className="col-span-12 mb-4 font-mono text-[12px] text-muted md:col-span-3">Earlier</h3>
            <ul className="col-span-12 border-b border-line md:col-span-9">
              {archive.map((a) => (
                <li
                  key={a.slug}
                  id={`project-${a.slug}`}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line py-4"
                >
                  <p className="text-[16px]">
                    <span className="font-medium">{a.title}</span>
                    <span className="text-muted"> / {a.category}</span>
                  </p>
                  <Links project={{ ...a, summary: "", stack: [] }} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Band>
  );
}

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Express", "Node.js", "React", "Next.js", "React Native", "Flutter", "MongoDB"],
  },
  {
    label: "Others",
    items: [
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
      "Git",
      "Figma",
      "Postman",
      "Docker",
      "Bootstrap",
      "Neural Networks",
    ],
  },
];

/** Shown as a small line under the skills list. */
export const spokenLanguages = "English (fluent), Tamil (native, fluent)";

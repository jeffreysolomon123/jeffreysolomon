export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Express", "Node.js", "React", "Next.js", "React Native", "Flutter"],
  },
  {
    label: "Data and infra",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Docker"],
  },
  {
    label: "AI",
    items: ["LangGraph", "RAG (Chroma, HuggingFace embeddings)", "Groq API", "OpenRouter API"],
  },
];

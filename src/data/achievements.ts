export type Result = "WINNER" | "3RD PLACE" | "FINALIST" | "TOP 5" | "PARTICIPANT";

/** Results that get the solid accent tag; the rest are outlined. */
export const highlightResults: Result[] = ["WINNER", "3RD PLACE", "TOP 5"];

export type Achievement = {
  event: string;
  organizer: string;
  year?: string;
  result: Result;
  /** e.g. "Top 10 of 115+ teams" */
  resultDetail?: string;
  /** One line on what I built. */
  built?: string;
  /** Slug from projects.ts. */
  project?: string;
};

export const achievements: Achievement[] = [
  {
    event: "Build to Care",
    organizer: "Acentra Health x HackForge.ai",
    year: "2026",
    result: "TOP 5",
    resultDetail: "Finalist, top 5 of 300+ teams. #1 of 50+ in the preliminary codathon.",
    built:
      "Led Team Cipher. Prelims: a .NET background job processor with retries, dead-letter storage and a status dashboard. Final: ClaimShield Nexus, in 24 hours.",
    project: "claimshield-nexus",
  },
  {
    event: "Kanini x Pragyan Hackathon",
    organizer: "NIT Trichy",
    // TODO(jeffrey): add the year for Kanini x Pragyan.
    result: "FINALIST",
    resultDetail: "Top 10 of 115+ teams",
    // TODO(jeffrey): one line on what you built at Kanini x Pragyan.
  },
  {
    event: "Hackinfinity 2025",
    organizer: "SSN College of Engineering",
    year: "2025",
    result: "3RD PLACE",
    built: "SafarX, a tourist safety app with anomaly detection.",
    project: "safarx",
  },
  // TODO(jeffrey): add hackathons you participated in, with result: "PARTICIPANT".
];

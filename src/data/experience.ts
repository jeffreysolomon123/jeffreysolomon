export type Role = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Role[] = [
  {
    role: "SDE Intern",
    company: "MedXAI Innovation",
    location: "Chennai",
    start: "May 2026",
    end: "Sep 2026",
    points: [
      "Led coding for a 5-member team building a BLE smart ring app that tracks 10 vitals in real time.",
      "Stored readings locally with Room DB and synced them to Supabase.",
      "Built a foreground service supporting 150+ sport workouts.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Selsons Software Solutions",
    location: "Chennai",
    start: "Dec 2025",
    end: "Jan 2026",
    points: [
      "Built a React Native app for heavy-vehicle rentals.",
      "Built a real-time internal chat web app.",
    ],
  },
];

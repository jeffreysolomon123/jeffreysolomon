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
      "Led development for a 5-member team shipping a BLE smart ring app that monitors 10 vitals in real time, with readings updating in under 2 seconds.",
      "Cut background data loss to under 1% with a local-first Room DB sync flow, dual Supabase sync paths, 3x retry logic and CI checks.",
      "Enabled tracking for 150+ sport workouts by running the workout foreground service separately from the main app lifecycle, which kept the app responsive under load.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Selsons Software Solutions",
    location: "Chennai",
    start: "Dec 2025",
    end: "Jan 2026",
    points: [
      "Built 6+ screens for a React Native heavy-vehicle rental app, covering the listing, product, booking and confirmation flows.",
      "Delivered a real-time chat web app for 30+ internal employees with under 500ms latency.",
      "Worked in a shared Git workflow with CI: built reusable UI modules, validated builds, fixed integration issues and documented the implementation for handoffs.",
    ],
  },
];

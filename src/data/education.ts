export type EducationEntry = {
  qualification: string;
  institution: string;
  location?: string;
  board?: string;
  year: string;
  /** e.g. "CGPA 9.16" or "88.8%" */
  score: string;
};

export const education: EducationEntry[] = [
  {
    qualification: "B.Tech, Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    year: "2028 (expected)",
    score: "CGPA 9.16",
  },
  {
    qualification: "Class 12",
    institution: "BVM Global",
    location: "Perungudi, Chennai",
    board: "CBSE",
    year: "2024",
    score: "88.8%",
  },
  {
    qualification: "Class 10",
    institution: "St. Michael's Academy",
    location: "Adyar, Chennai",
    board: "ICSE",
    year: "2022",
    score: "94%",
  },
];

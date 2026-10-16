export type EducationEntry = {
  qualification: string;
  institution: string;
  location?: string;
  board?: string;
  year: string;
  /** e.g. "CGPA 9.16" or "88.8%" */
  score: string;
  coursework?: string[];
};

export const education: EducationEntry[] = [
  {
    qualification: "B.Tech, Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    year: "Graduating Jan 2028",
    score: "CGPA 9.16",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Computer Networks",
      "Database Management",
      "Algorithm Design",
    ],
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

export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    date: "February 2025 - May 2025",
    title: "Student Tutor (Undergraduate TA)",
    company: "BRAC University",
    location: "Dhaka, Bangladesh",
    description:
      "Supported 40+ students through lab-based troubleshooting, one-on-one consultations, Q&A sessions, and targeted academic guidance for probation students, helping improve conceptual understanding and academic engagement. Graded assignments, maintained performance records, and organized digital course resources to streamline course delivery.",
  },
  {
    date: "June 2026 - Present",
    title: "AI Engineer Trainee",
    company: "Chowa Giken Corporation",
    location: "Dhaka, Bangladesh",
    description:
      "Selected for the NIPPON AI Dojo Program, an industry-oriented applied AI training program focused on real-world AI development, AI engineering workflows, and Japanese engineering practices.",
  },
];

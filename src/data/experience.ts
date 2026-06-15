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
    date: "June 2026 - Present",
    title: "AI Engineer Trainee",
    company: "Chowa Giken Corporation",
    location: "Dhaka, Bangladesh",
    description:
      "Selected as one of 10 participants from BRAC University from a pool of 1,000+ applicants for the NIPPON AI Dojo Program, an applied AI training initiative organized by Chowa Giken Corporation and AI Samurai Co. Ltd., with support from METI, Japan. Participating in industry-oriented on-the-job training focused on real-world AI development, AI engineering workflows, and Japanese engineering practices.",
  },
  {
    date: "February 2025 - May 2025",
    title: "Student Tutor (Undergraduate TA)",
    company: "BRAC University",
    location: "Dhaka, Bangladesh",
    description:
      "Supported 40+ students through lab-based troubleshooting, one-on-one consultations, Q&A sessions, and targeted guidance for probation students, contributing to stronger understanding of course concepts and improved academic engagement. Graded assignments, maintained performance records, and organized digital course resources to streamline the delivery of course material.",
  },
];

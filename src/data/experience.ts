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
    title: "Research Assistant",
    company: "United International University (UIU)",
    location: "Dhaka, Bangladesh",
    description:
      "At Computing for Sustainability and Social Good (C2SG) research group, under the supervision of Dr. Jannatun Noor, I conduct core research focused on computer vision and deep learning applications for AgTech. My primary role involves contributing to the design and implementation of robust machine learning pipelines aimed at advancing precision agriculture, developing low-cost intelligence, and creating applied AI solutions.",
  },
  {
    date: "June 2026 - Present",
    title: "AI Engineer Trainee",
    company: "Chowa Giken Corporation",
    location: "Dhaka, Bangladesh",
    description:
      "Selected as one of 10 participants from BRAC University from a pool of 1,000+ applicants for the NIPPON AI Dojo Program, an applied AI training initiative organized by Chowa Giken Corporation and AI Samurai Co. Ltd., with support from METI, Japan. Participating in industry-oriented on-the-job training focused on real-world AI development, and AI engineering workflows.",
  },
  {
    date: "June 2026 - Present",
    title: "Machine Learning Intern",
    company: "FlyRank AI",
    location: "Dhaka, Bangladesh (Remote)",
    description:
      "Building an end-to-end machine learning project centered around an interactive user interface. Responsibilities include developing and integrating machine learning models with front-end components to create an adaptive, interactive learning experience. Focused on optimizing both model performance and system interactivity for real-world application.",
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

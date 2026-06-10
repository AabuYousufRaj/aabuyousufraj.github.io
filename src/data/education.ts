export interface EducationProgram {
  degree: string;
  cgpa?: string;
  description?: string;
  notableCourses?: string;
  honors?: string;
}

export interface Education {
  year: string;
  institution: string;
  logo: string;
  programs: EducationProgram[];
}

export const educationData: Education[] = [
  {
    year: "September 2022 - January 2026",
    institution: "BRAC University",
    logo: "/assets/images/education/BRACU_Logo.png",
    programs: [
      {
        degree: "B.Sc. in Computer Science",
        cgpa: "CGPA: 3.88/4.00",
        description: "Graduated with Highest Distinction",
        notableCourses:
          "Notable Courses: Advanced Algorithms, Artificial Intelligence, Machine Learning, Data Science, Natural Language Processing-II, Image Processing, Computer Vision, Neural Networks, Operating Systems, Database Systems, Software Engineering, Computer Networks, Compiler Design",
        honors: "Academic Honors: Vice Chancellor's List, Dean's List",
      },
    ],
  },
  {
    year: "2011 - 2018",
    institution: "Military Collegiate School Khulna (MCSK)",
    logo: "/assets/images/education/MCSK_Logo.png",
    programs: [
      {
        degree: "Higher Secondary Certificate (HSC)",
        cgpa: "GPA: 5.00/5.00",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        cgpa: "GPA: 5.00/5.00",
      },
    ],
  },
];

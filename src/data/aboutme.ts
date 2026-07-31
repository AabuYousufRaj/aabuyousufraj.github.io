export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aabu Yousuf Raj",
  institution: "C2SG Lab, United International University",
  institutionUrl: "https://sites.google.com/site/jannatun0abigzero/c2sg/projects?authuser=0",
  title: "Research Assistant",
  description:
  "Hi, I am Yousuf (pronounced yOO-suuf), and I am from Dhaka, Bangladesh. I recently completed my B.Sc. in Computer Science from BRAC University with <b>Highest Distinction</b>.<br><br>"
  + "Currently, I am a <b>Research Assistant</b> at United International University (UIU) within the C2SG research group. Under the supervision of Dr. Jannatun Noor, I am developing robust machine learning pipelines for AgTech and precision agriculture. Alongside my research, I am an AI Engineer Trainee in the <b>NIPPON AI Dojo Program</b>, where I am gaining industry-oriented training in applied AI development.<br><br>"
  + "My research interests lie in the broad field of computer vision in smart agriculture. My undergraduate thesis proposed a computer vision ecosystem for cattle monitoring, featuring multi-disease classification with severity grading, individual identification, and weight estimation. This work has been published in Computers and Electronics in Agriculture (Elsevier, Q1) with me being the <b>First Author</b>. More recently, I designed <b>CropLiteNet</b>, an ultra-lightweight, quantized deep learning framework for mobile-based multi-crop disease detection.<br><br>"
  + "Looking ahead, I am actively seeking <b>graduate research opportunities</b> in Applied AI, Machine Learning, Computer Vision, and Data Science. I am also highly open to applied AI engineering roles where I can contribute to meaningful, real-world machine learning systems and continue growing as both a researcher and an engineer.<br><br>"
  + "Outside research and engineering, I am unapologetically sporty and into almost every kind of sport, especially football, the European kind. I am a huge Real Madrid fan and a die-hard supporter of Cristiano Ronaldo.<br>",

  email: "aabuyousufraj@gmail.com",
  imageUrl: "/assets/images/photo.jpg",
  githubUsername: "AabuYousufRaj",
  linkedinUsername: "aabuyousufraj",
  // blogUrl: "https://",
  googleScholarUrl: "https://scholar.google.com/citations?user=uCTGEpIAAAAJ&hl=en",
  // twitterUsername: "YousufRaj1552",
  cvUrl: "/assets/pdf/cv.pdf",
  altName: "Prospective Graduate Research Student",
  secretDescription:
    "Cristiano Ronaldo dos Santos Aveiro is the greatest footballer of all time.",
};

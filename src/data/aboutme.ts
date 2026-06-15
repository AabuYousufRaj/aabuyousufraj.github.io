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
  institution: "BRAC University",
  institutionUrl: "https://www.bracu.ac.bd/",
  title: "Aspiring AI Research Engineer",
  description:
  "Hello, I am Aabu Yousuf Raj, though I usually go by Yousuf, pronounced yOO-suuf. I am a Computer Science graduate from <b>BRAC University</b>, Dhaka, Bangladesh, with a strong interest in <b>Artificial Intelligence</b>, <b>Machine Learning</b>, <b>Computer Vision</b>, <b>Deep Learning</b>, and <b>Data Science</b>. I am currently an <b>AI Engineer Trainee</b> in the <b>NIPPON AI Dojo Program</b> at <b>Chowa Giken Corporation</b>, where I am gaining industry-oriented training in applied AI development, AI engineering workflows, and Japanese engineering practices. I have also served as a <b>Student Tutor (Undergraduate TA)</b> at BRAC University, supporting students through consultations, lab-based troubleshooting, academic guidance, assessment, and course resource management.<br><br>"
  + "My undergraduate thesis, supervised by <a href='https://sites.google.com/site/jannatun0abigzero/home'>Dr. Jannatun Noor</a>, focused on building a <b>computer vision driven cattle monitoring ecosystem</b> for low-resource precision livestock farming. The work integrates <b>multi-disease classification with clinically guided severity grading</b>, <b>multi-view individual cattle identification</b>, and <b>reference-object-free body weight estimation</b> using RGB images and metadata. I am the first author of the related manuscript, which has been <b>accepted for publication in Computers and Electronics in Agriculture (Elsevier)</b>. Beyond my thesis, I have worked on projects in medical imaging, urban traffic analysis, named entity recognition, symptom-based disease prediction, and multimodal music clustering using machine learning, deep learning, computer vision, NLP, and data science techniques.<br><br>"
  + "I am currently looking for <b>thesis-based graduate research opportunities, especially PhD positions</b>, in <b>AI, Machine Learning, Computer Vision, and NLP</b>. I am also open to <b>AI-related research and engineering roles</b> where I can contribute to meaningful projects, work on real-world machine learning systems, and continue growing as both a researcher and engineer.<br><br>"
  + "Outside research and engineering, I am unapologetically sporty and into almost every kind of sport, especially football, the European kind. I am a huge Real Madrid fan and a die-hard supporter of Cristiano Ronaldo. In my leisure time, you will usually find me playing chess, relaxing with mobile games like PUBG, COC, and PES, or diving into movies, series, and K-dramas. I also love rewatching comfort shows like The Big Bang Theory, my all-time favorite, and I have a soft spot for old Bollywood romantic films.<br>",

  email: "aabuyousufraj@gmail.com",
  imageUrl: "/assets/images/photo.jpeg",
  githubUsername: "AabuYousufRaj",
  linkedinUsername: "aabuyousufraj",
  // blogUrl: "https://",
  // googleScholarUrl: "https://scholar.google.com/citations?user=07812345678901234567890123456789",
  // twitterUsername: "YousufRaj1552",
  cvUrl: "/assets/pdf/cv.pdf",
  altName: "Prospective Graduate Research Candidate",
  secretDescription:
    "Cristiano Ronaldo dos Santos Aveiro is the greatest footballer of all time.",
};

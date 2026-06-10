export interface ResearchProjects {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  paperUrl?: string;
  supervisors?: string[];
  supervisorLinks?: string[];
}

export const researchProjectsData: ResearchProjects[] = [

  {
    title: "A Computer Vision driven Ecosystem for Cattle Monitoring: Multi-Disease Classification with Severity Grading, Multi-View Individual Identification, and Weight Estimation",
    description:
      "This was my undergraduate thesis project under the supervision of Dr. Jannatun Noor, where we built a computer vision based cattle monitoring ecosystem tailored for low resource settings, where continuous veterinary care and intensive monitoring are often difficult to scale. The goal was to keep the solution affordable, non invasive, low shot, and realistic for deployment. A major part of this work involved building a custom curated dataset by combining field collected cattle images with carefully selected publicly available sources, so the models learn from real conditions such as lighting variation, pose changes, background clutter, and diverse symptom appearances. Using affordable RGB images, the ecosystem is designed to support farm level monitoring by disease classification (LSD, FMD, IBK), grading disease severity using a symptom based staging profile validated with veterinary supervision, recognizing individual cattle across multiple viewpoints, and estimating body weight from multi view images along with essential metadata such as age, breed, and sex.",
    technologies: ["Computer Vision", "Deep Learning Models", "Hierarchical Classification", "Cross Attentional Multi Task", "Metric learning", "Ensemble learning", "YOLO", "Explainable AI"],
    supervisors: ["Dr. Jannatun Noor"],
    supervisorLinks: ["https://sites.google.com/site/jannatun0abigzero/home"],
    imageUrl: "/assets/images/research-projects/workflow.PNG",
    paperUrl: "https://drive.google.com/drive/folders/1t7nSCagu1kwAk5-pIci5Xh_t_HUl7knp?usp=sharing",
  },
];
  

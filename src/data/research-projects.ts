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
      "This was my <b>undergraduate thesis</b> under the supervision of Dr. Jannatun Noor, focused on developing an RGB-based computer vision ecosystem for precision livestock farming. The system integrates multi-disease classification with clinically guided severity grading, multi-view individual cattle identification, and reference-object-free body weight estimation using multi-view cattle images and metadata. I designed and evaluated deep learning pipelines using attention-based hierarchical multi-task learning, YOLOv8-based cattle localization, ConvNeXt-based metric learning for multi-view cattle identification, and ensemble learning over fused RGB image and metadata features. The system achieved 85.88% hierarchical disease-severity accuracy, 89.80% Rank-5 identification accuracy under cross-view domain shift, and 35.10 kg MAE in weight estimation, with Grad-CAM++ based explainability analysis supporting model interpretation for low-cost, low-shot, and non-invasive agricultural intelligence. I am the <b>first author</b> of the related manuscript, which has been accepted for publication in <b>Computers and Electronics in Agriculture (Elsevier, Q1)</b>.",
    technologies: ["Computer Vision", "Deep Learning Models", "Hierarchical Classification", "Cross Attentional Multi Task", "Metric learning", "Ensemble learning", "YOLO", "Explainable AI"],
    supervisors: ["Dr. Jannatun Noor"],
    supervisorLinks: ["https://sites.google.com/site/jannatun0abigzero/home"],
    imageUrl: "/assets/images/research-projects/workflow.PNG",
    paperUrl: "https://drive.google.com/drive/folders/1t7nSCagu1kwAk5-pIci5Xh_t_HUl7knp?usp=sharing",
  },
];
  

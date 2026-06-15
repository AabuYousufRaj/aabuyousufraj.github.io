export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
}

export const portfolioData: Portfolio[] = [
{
title: "Brain Tumor MRI Classification & Segmentation",
description:
"Engineered a multi-task deep learning pipeline using U-Net, Attention U-Net, and ResUNet variants for simultaneous brain tumor segmentation and classification on MRI datasets. Improved model robustness through transfer learning, augmentation pipelines, and weighted loss functions to address class imbalance.",
technologies: ["Deep Learning", "Unet", "Attention Unet", "Multi Task Learning", "Medical Image Analysis"],
imageUrl: "/assets/images/portfolio/brain tumor.png",
codeUrl: "https://github.com/AabuYousufRaj/Multi-Task-Deep-Learning-for-Brain-Tumor-MRI-Segmentation-and-Classification",
},
{
title: "Real-Time Traffic Prediction in Dhaka",
description:
"Developed a CNN-based traffic intelligence system to classify congestion severity from street-level images in Dhaka’s heterogeneous, non-lane-based urban environment. Collected, labeled, and preprocessed a custom street-imagery dataset to support data-driven traffic analysis and smart-city planning.",
technologies: ["CNN Models", "Image Classification", "Deep Learning"],
imageUrl: "/assets/images/portfolio/traffic.png",
codeUrl: "https://github.com/AabuYousufRaj/Predicting-Real-Time-Traffic-and-Congestion-Hotspots-in-Dhaka-City",
},
{
title: "Token-Level NER with RNNs",
description:
"Conducted a comparative study of RNN, LSTM, GRU, and BiLSTM architectures for token-level Named Entity Recognition using the BIO tagging scheme on news datasets. Evaluated sequence-labeling performance to analyze the role of recurrent and bidirectional context modeling in information extraction.",
technologies: ["RNN", "LSTM", "GRU", "BiLSTM", "Named Entity Recognition"],
imageUrl: "/assets/images/portfolio/nlp.png",
codeUrl: "https://github.com/AabuYousufRaj/Token-Level-Multi-Class-Classification-for-NER",
},
{
title: "Predicting Diseases from Symptom Profiles",
description:
"Built a multi-class disease prediction pipeline from patient symptom profiles, applying feature engineering, Chi-Square based feature selection, and comparative classifier evaluation to identify effective models for symptom-driven clinical decision support.",
technologies: ["Chi-Square", "Clinical Decision Support", "Healthcare Ai"],
imageUrl: "/assets/images/portfolio/symptom profile.png",
codeUrl: "https://github.com/AabuYousufRaj/Symptom-Profile-Based-Multi-Disease-Classification",
},
{
title: "Hybrid Music Clustering using Variational Autoencoders",
description:
"Built an unsupervised multimodal clustering system using VAE and Conditional VAE variants to group Bengali–English hybrid music in a shared latent space. Combined audio features, lyric embeddings, and genre conditioning, and evaluated cluster structure using visualization and clustering-quality metrics.",
technologies: ["Unsupervised Learning", "VAE Variants", "Multi Modal Clustering", "Audio Feature Extraction", "NLP for Lyrics"],
imageUrl: "/assets/images/portfolio/unsupervised.png",
codeUrl: "https://github.com/AabuYousufRaj/VAE-Driven-Unsupervised-Learning-for-Music-Clustering-with-Audio-Lyrics-and-Genre",
},
];

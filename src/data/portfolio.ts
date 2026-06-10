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
    "A multi-task deep learning pipeline using U-Net variants to perform simultaneous brain tumor segmentation and subtype classification on MRI scans, with evaluation using Dice, IoU, and accuracy metrics.",
    technologies: ["Deep Learning", "Unet", "Attention Unet", "Multi Task Learning", "Medical Image Analysis"],
    imageUrl: "/assets/images/portfolio/brain tumor.png",
    codeUrl: "https://github.com/AabuYousufRaj/Multi-Task-Deep-Learning-for-Brain-Tumor-MRI-Segmentation-and-Classification",
  },
  {
    title: "Real-Time Traffic Prediction in Dhaka",
    description:
    "A CNN-based project analyzing street images to classify traffic congestion levels and predict real-time traffic patterns for urban planning using customised dataset.",
    technologies: ["CNN Models", "Image Classification", "Deep Learning"],
    imageUrl: "/assets/images/portfolio/traffic.png",
    codeUrl: "https://github.com/AabuYousufRaj/Predicting-Real-Time-Traffic-and-Congestion-Hotspots-in-Dhaka-City",
  },
  {
    title: "Token-Level NER with RNNs",
    description:
      "A project evaluating RNN, LSTM, GRU, and BiLSTM architectures for token-level Named Entity Recognition on news datasets using the BIO tagging scheme.",
    technologies: ["RNN", "LSTM", "GRU", "BiLSTM", "Named Entity Recognition"],
    imageUrl: "/assets/images/portfolio/nlp.png",
    codeUrl: "https://github.com/AabuYousufRaj/Token-Level-Multi-Class-Classification-for-NER",
  },
  {
    title: "Predicting Diseases from Symptom Profiles",
    description:
      "A machine learning project for multi-class disease prediction from patient symptom profiles, involving feature engineering, Chi-Square based feature selection, and comparative evaluation of multiple classifiers.",
    technologies: ["Chi-Square", "Clinical Decision Support", "Healthcare Ai"],
    imageUrl: "/assets/images/portfolio/symptom profile.png",
    codeUrl: "https://github.com/AabuYousufRaj/Symptom-Profile-Based-Multi-Disease-Classification",
  },
  {
    title: "Hybrid Music Clustering using Variational Autoencoders",
    description:
      "A multi-modal unsupervised learning project applying Variational Autoencoder variants to cluster hybrid-language music using audio features, lyric embeddings and genre conditioning.",
    technologies: ["Unsupervised Learning", "VAE Variants", "Multi Modal Clustering", "Audio Feature Extraction", "NLP for Lyrics"],
    imageUrl: "/assets/images/portfolio/unsupervised.png",
    codeUrl: "https://github.com/AabuYousufRaj/VAE-Driven-Unsupervised-Learning-for-Music-Clustering-with-Audio-Lyrics-and-Genre",
  },
];

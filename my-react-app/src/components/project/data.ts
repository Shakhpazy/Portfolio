import project1img from "./assets/project1.jpg";
import project2img from "./assets/project2.jpg";
import project3img from "./assets/project3.jpg";
import project4img from "./assets/project4.jpg";
import project5img from "./assets/project5.jpg";

export type Project = {
    name: string;
    description: string;
    image: string;
    github: string;
    technologies: string[];
}

export const projectData: Project[] = [
  {
    name: 'CoinCapCrypto',
    description: 'A responsive crypto portfolio tracker that helps users monitor market trends, compare digital assets, and keep track of personal holdings with ease.',
    image: project1img,
    github: 'https://github.com/YOUR_USERNAME/coincapcrypto',
    technologies: ['React', 'Express', 'Node.js', 'PostgreSQL', 'Bootstrap'],
  },
  {
    name: 'RouteWatch',
    description: 'A mobile-friendly routing app that visualizes public safety data and suggests safer walking paths, aiming to make city navigation more secure.',
    image: project2img,
    github: 'https://devpost.com/software/routewatch',
    technologies: ['React Native', 'Express', 'Firebase Auth', "Firebase Firestore", 'Tailwind CSS', 'Map APIs'],
  },
  {
    name: 'Aegis',
    description: 'An AI-based image tool designed to detect and blur sensitive information, helping users maintain privacy when sharing visual content online.',
    image: project5img,
    github: 'https://github.com/YOUR_USERNAME/aegis',
    technologies: ['Python', 'OpenCV', 'Flask', 'React', 'Machine Learning'],
  },
  {
    name: 'ParkWatch',
    description: 'An AI-powered system that uses real-time video feeds to detect available parking spots, supporting smarter urban mobility and planning.',
    image: project4img,
    github: 'https://github.com/YOUR_USERNAME/parkwatch',
    technologies: ['Python', 'EasyOCR', 'OpenCV', 'Flask', 'Computer Vision'],
  },
  {
    name: 'Tetris',
    description: 'A full-featured Tetris game developed in Java, offering multiple game modes and a polished user interface. Designed for solo play, it emphasizes smooth controls, clean visuals, and an engaging gameplay experience.',
    image: project3img,
    github: 'https://github.com/YOUR_USERNAME/multiplayer-tetris',
    technologies: ['Java'],
  },
];
